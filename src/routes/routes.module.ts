import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { ImageModule } from 'src/types/image/image.module';
import { KitchenModule } from 'src/types/kitchen/kitchen.module';
import { LocationModule } from 'src/types/location/location.module';
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
                    path: 'location',
                    module: LocationModule,
                },
                {
                    path: 'image',
                    module: ImageModule,
                },
            ]
        },
    ]),]
})
export class RoutesModule {

}
