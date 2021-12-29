import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database.module';
import { ProductController } from './product.controller';
import { productssProviders } from './product.provider';
import { ProductService } from './product.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductController],
  providers: [ProductService,...productssProviders],
})
export class ProductModule {}
