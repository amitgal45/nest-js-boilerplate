import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AuthModule } from 'src/types/auth/auth.module';
import { ImageModule } from 'src/types/image/image.module';
import { KitchenProductModule } from 'src/types/kitchen-product/kitchen-product.module';
import { KitchenModule } from 'src/types/kitchen/kitchen.module';
import { LocationModule } from 'src/types/location/location.module';
import { ProductModule } from 'src/types/product/product.module';
import { RecipeModule } from 'src/types/recipe/recipe.module';
import { UserModule } from 'src/types/user/user.module';

@Module({
    imports: [RouterModule.register([
        {
            path: 'api',
            children: [
                {
                    path: 'user',
                    module: UserModule,
                },
                {
                    path: 'kitchen',
                    module: KitchenModule,
                },
                {
                    path: 'kitchen-product',
                    module: KitchenProductModule,
                },
                {
                    path: 'product',
                    module: ProductModule,
                },
                {
                    path: 'recipe',
                    module: RecipeModule,
                },

                {
                    path: 'location',
                    module: LocationModule,
                },
                {
                    path: 'image',
                    module: ImageModule,
                },
                {
                    path: 'auth',
                    module: AuthModule,
                }
            ]
        },
    ]),]
})
export class RoutesModule {

}
