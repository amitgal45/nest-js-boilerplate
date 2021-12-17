import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database.module';
import { LocationController } from './location.controller';
import { locationProviders } from './location.provider';
import { LocationService } from './location.service';

@Module({
  imports: [DatabaseModule],
  controllers: [LocationController],
  providers: [LocationService,...locationProviders],
})
export class LocationModule {}
