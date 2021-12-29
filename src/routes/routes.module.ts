import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
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
                }
            ]
        },
    ]),]
})
export class RoutesModule {

}
