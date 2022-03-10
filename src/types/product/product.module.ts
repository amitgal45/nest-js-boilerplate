import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database.module';
import { kitchenProductsProviders } from '../kitchen-product/kitchen-product.provider';
import { KitchenProductService } from '../kitchen-product/kitchen-product.service';
import { kitchenProviders } from '../kitchen/kitchen.provider';
import { KitchenService } from '../kitchen/kitchen.service';
import { ProductController } from './product.controller';
import { productssProviders } from './product.provider';
import { ProductService } from './product.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductController],
  providers: [ProductService,...productssProviders,KitchenService,...kitchenProviders],
})
export class ProductModule {}
