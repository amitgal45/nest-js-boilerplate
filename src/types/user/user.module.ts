import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { DatabaseModule } from 'src/config/database.module';
import { usersProviders } from './user.provider';
import { ImageService } from '../image/image.service';
import { ImageController } from '../image/image.controller';
import { imageProviders } from '../image/image.provider';
import { isEmailValidMiddleware } from './middleware/is-email-avaliable';

@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [UserService,ImageService,...usersProviders,...imageProviders],
})
export class UserModule {}