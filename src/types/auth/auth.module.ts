import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { DatabaseModule } from 'src/config/database.module';
import { imageProviders } from '../image/image.provider';
import { ImageService } from '../image/image.service';
import { usersProviders } from '../user/user.provider';
import { UserService } from '../user/user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AtStrategy, RtStrategy } from './strategies';

@Module({
  controllers: [AuthController],
  providers: [AuthService,UserService,...usersProviders,ImageService,...imageProviders,RtStrategy,AtStrategy,],
  imports:[JwtModule.register({

  })]
})
export class AuthModule {}
