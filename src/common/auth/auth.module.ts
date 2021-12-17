import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database.module';
import { usersProviders } from 'src/types/user/user.provider';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import {JwtService,JwtModule} from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthStrategy } from './auth.strategy';

@Module({
  imports: [DatabaseModule,PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '24h' },
    }),],
  controllers: [AuthController],
  providers: [AuthService,...usersProviders,AuthStrategy],
})
export class AuthModule {}
