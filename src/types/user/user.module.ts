import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { DatabaseModule } from 'src/config/database.module';
import { usersProviders } from './user.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [UserService,...usersProviders],
})
export class UserModule {}