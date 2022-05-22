import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from '../user/user.model';
import { JwtService } from '@nestjs/jwt';
import { RegisterAuthDto } from './dto/register_auth.dto';
import { LoginAuthDto } from './dto/login_auth.dto';
import { Op } from 'sequelize';
import { Image } from '../image/image.model';
import { ImageService } from '../image/image.service';
// import { AuthDto } from './dto/auth.dto';
@Injectable()
export class AuthService {


    constructor(@Inject('USERS_REPOSITORY') private usersRepository: typeof User,private imageService: ImageService ,private jwtService: JwtService) {

    }

    async getTokens(userId: number, email: string) {
        const [at, rt] = await Promise.all([
            this.jwtService.signAsync({sub: userId, email},
                {
                    expiresIn: 60 * 15,
                    secret: '1234567'
                }),
            this.jwtService.signAsync({sub: userId,email},
                {
                    secret: '12345678',
                    expiresIn: 60 * 60 * 24 * 7
                })
        ])
        return {
            access_token: at,
            refresh_token: rt
        }

    }


    async hashData(data: string) {
        return await bcrypt.hash(data, 10)
    }

    async signUpLocal(dto: RegisterAuthDto,file) {
        const image: Image = await this.imageService.create(file.filename);

        const hash = await this.hashData(dto.password)
        const newUser = await this.usersRepository.create({ ...dto, password: hash })
        const tokens = await this.getTokens(newUser.id, newUser.email)
        await this.updateRtHash(newUser.id, tokens.refresh_token)
        newUser.image_id = image.id;
        await newUser.save()
        return tokens
    }

    async signinLocal(dto: LoginAuthDto) {
        const user = await this.usersRepository.findOne({ where: { email: dto.email } })
        if (!user) throw new ForbiddenException("Access Denied")
        const passwordMatched = await bcrypt.compare(dto.password, user.password)
        if (!passwordMatched) throw new ForbiddenException("Access Denied")
        const tokens = await this.getTokens(user.id, user.email)
        await this.updateRtHash(user.id, tokens.refresh_token)
        return tokens

    }
    async logout(userId: number) {
        await this.usersRepository.update({ hashedRt: null }, { where: { id: userId } })
    }
    async refreshTokens(userId: number, rt: string) {
        try {
            const user = await this.usersRepository.findOne({ where: { id: userId, hashedRt: { [Op.ne]: null } } })
            if (!user) throw new ForbiddenException("Access Denied")
            const rtMatches = await bcrypt.compare(rt, user.hashedRt)
            if (!rtMatches) throw new ForbiddenException("Access Denied");
            const tokens = await this.getTokens(user.id, user.email)
            await this.updateRtHash(user.id, tokens.refresh_token)
            return tokens
        }
        catch (err) { 
            console.log(err)
            throw err
        }
    }


    async updateRtHash(userId: number, rt: string) {
        const hash = await this.hashData(rt)
        await this.usersRepository.update({ hashedRt: hash }, { where: { id: userId } })
    }
}
