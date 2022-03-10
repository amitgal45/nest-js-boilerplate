import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database.module';
import { usersProviders } from '../user/user.provider';
import { UserService } from '../user/user.service';
import { KitchenController } from './kitchen.controller';
import { kitchenProviders } from './kitchen.provider';
import { KitchenService } from './kitchen.service';

@Module({
  imports: [DatabaseModule],
  controllers: [KitchenController],
  providers: [KitchenService,...kitchenProviders,UserService,...usersProviders],
})
export class KitchenModule {}
