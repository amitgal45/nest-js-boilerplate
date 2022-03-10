import { Module } from '@nestjs/common';
import { KitchenProductService } from './kitchen-product.service';
import { KitchenProductController } from './kitchen-product.controller';
import { kitchenProductsProviders } from './kitchen-product.provider';
import { DatabaseModule } from 'src/config/database.module';
import { kitchenProviders } from '../kitchen/kitchen.provider';
import { KitchenService } from '../kitchen/kitchen.service';
import { productssProviders } from '../product/product.provider';
import { ProductService } from '../product/product.service';

@Module({
  imports:[DatabaseModule],
  controllers: [KitchenProductController],
  providers: [ProductService,...productssProviders,KitchenService,...kitchenProviders,KitchenProductService,...kitchenProductsProviders]
})
export class KitchenProductModule {}
