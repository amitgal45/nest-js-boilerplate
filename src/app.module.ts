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
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { MulterModule } from '@nestjs/platform-express';
import MulterConfigService from './common/services/multer.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { isEmailValidMiddleware } from './types/user/middleware/is-email-avaliable';
import { UserController } from './types/user/user.controller';
import { isUserExistsMiddleware } from './types/user/middleware/is-user-exists';
import { RecipeModule } from './types/recipe/recipe.module';


@Module({
  imports: [
    MulterModule.registerAsync({
      useClass: MulterConfigService,
    }),
    RoutesModule,
    UserModule,
    LocationModule,
    ProductModule,
    AuthModule,
    ImageModule,
    KitchenModule,
    ScheduleModule.forRoot(),
    RecipeModule
  ],
  controllers: [AppController],

  providers: [AppService,    // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard,
    // },
    ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer
    //   .apply(isEmailValidMiddleware)
    //   .forRoutes({ path: 'api/user', method: RequestMethod.POST });

    consumer
      .apply(isUserExistsMiddleware)
      .forRoutes({ path: 'api/user/:id', method: RequestMethod.GET });
  }
}