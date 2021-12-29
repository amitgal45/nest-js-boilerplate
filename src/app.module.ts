import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { RolesGuard } from './common/auth/roles.guard';
import { UserModule } from './types/user/user.module';
import { LocationModule } from './types/location/location.module';
import { ProductModule} from './types/product/product.module';
import { RoutesModule } from './routes/routes.module';
import { AuthModule } from './common/auth/auth.module';
import { ImageModule } from './types/image/image.module';
import { KitchenModule } from './types/kitchen/kitchen.module';
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
@Module({
  imports: [
    RoutesModule,
    UserModule,
    LocationModule,
    ProductModule,
    AuthModule,
    ImageModule,
    KitchenModule,
    ScheduleModule.forRoot()

    
  ],
  controllers: [AppController],
  providers: [AppService,     // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard,
    // },
    ],
})
export class AppModule {}