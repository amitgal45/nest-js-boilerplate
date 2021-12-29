import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database.module';
import { ImageController } from './image.controller';
import { imageProviders } from './image.provider';

import { ImageService } from './image.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ImageController],
  providers: [ImageService,...imageProviders],
})
export class ImageModule {}
