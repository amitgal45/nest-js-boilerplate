import { Body, Controller, Get, HttpException, HttpStatus, Post, Request, Res, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { UserLoginDTO } from './dto/user_login.dto';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';

@ApiTags('auth')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post()
    async login(@Body() userLoginDto: UserLoginDTO, @Res() response: Response) {
        try {
            const { email, password } = userLoginDto;
            const user = await this.authService.login(email, password);
            response
                .cookie('access_token', user.access_token, {
                    httpOnly: true,
                    domain: 'localhost', // your domain here!
                    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
                })

            return response.status(200).json(user)
        }
        catch (err) {
            throw new HttpException(err.message, HttpStatus.FORBIDDEN);
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async authGet(@Request() req) {
        try {
            const { user } = req;
            return await this.authService.findOne(user.id)
        }
        catch (err) {
            throw new HttpException(err.message, HttpStatus.FORBIDDEN);
        }
    }
}


