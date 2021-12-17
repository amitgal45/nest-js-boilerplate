import { Inject, Injectable } from '@nestjs/common';
import { IUser, User } from 'src/types/user/user.model';
import BaseService from '../services/base.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService extends BaseService {

    constructor(private jwtService: JwtService,
        @Inject('USERS_REPOSITORY')
        private usersRepository: typeof User
    ) {
        super(usersRepository)
    }

    async login(email: string, password: string) {
        try {
            const isExists:IUser = await this.findByKeyValue("email", email);
            if (isExists != null) {
                if (isExists.password == password)
                    return {
                        user:isExists,
                        access_token: this.jwtService.sign({email:isExists.email,id:isExists.id}),
                    };
                // return isExists;

                throw new Error('Password doesnt match')
            }
            throw new Error('Couldnt find email')
        }
        catch (err) {
            throw err
        }
    }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.findByKeyValue("email", username);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
}
