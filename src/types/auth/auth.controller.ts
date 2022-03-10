import { Body, Controller, HttpCode, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { GetCurrentUser } from 'src/common/decorators';
import { GetCurrentUserById } from 'src/common/decorators/get-current-user-by-id.decorator';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login_auth.dto';
import { RegisterAuthDto } from './dto/register_auth.dto';
import { AtGuard, RtGuard } from './guards';
import { JwtPayLoad } from './strategies';

@ApiTags('auth')
@Controller()
export class AuthController {


    constructor(private authService:AuthService){}
    @Post('/local/signup')
    @HttpCode(HttpStatus.CREATED)
    signupLocal(@Body() dto:RegisterAuthDto ){
        return this.authService.signUpLocal(dto)
    }

    @Post('/local/signin')
    @HttpCode(HttpStatus.OK)
    signinLocal(@Body() dto:LoginAuthDto){
        return this.authService.signinLocal(dto)
    }

    // @ApiBearerAuth()
    // @UseGuards(RtGuard)
    @Post('/logout')
    @HttpCode(HttpStatus.OK)
    logout(@GetCurrentUserById() userId:number){
        return this.authService.logout(userId)
    }

    @ApiBearerAuth()
    @UseGuards(RtGuard)
    @Post('/refresh')
    @HttpCode(HttpStatus.OK)
    refresh(@GetCurrentUserById() userId:number, @GetCurrentUser('refreshToken') refreshToken:string){

        return this.authService.refreshTokens(userId,refreshToken)

    }

}
