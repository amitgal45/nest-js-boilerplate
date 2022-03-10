import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './types/user/user.module';
import { LocationModule } from './types/location/location.module';
import { ProductModule} from './types/product/product.module';
import { RoutesModule } from './routes/routes.module';
import { ImageModule } from './types/image/image.module';
import { KitchenModule } from './types/kitchen/kitchen.module';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { MulterModule } from '@nestjs/platform-express';
import MulterConfigService from './common/services/multer.service';
import { isUserExistsMiddleware } from './types/user/middleware/is-user-exists';
import { RecipeModule } from './types/recipe/recipe.module';
import { AuthModule } from './types/auth/auth.module';
import { KitchenProductModule } from './types/kitchen-product/kitchen-product.module';


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
    RecipeModule,
    KitchenProductModule
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