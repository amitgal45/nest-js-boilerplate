import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database.module';
import { imageProviders } from '../image/image.provider';
import { ImageService } from '../image/image.service';
import { ProductController } from './product.controller';
import { productssProviders } from './product.provider';
import { ProductService } from './product.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductController],
  providers: [ProductService,...productssProviders,
              ImageService,...imageProviders
  ],
})
export class ProductModule {}
