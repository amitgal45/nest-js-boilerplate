import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database.module';
import { KitchenController } from './kitchen.controller';
import { kitchenProviders } from './kitchen.provider';
import { KitchenService } from './kitchen.service';

@Module({
  imports: [DatabaseModule],
  controllers: [KitchenController],
  providers: [KitchenService,...kitchenProviders],
})
export class KitchenModule {}
