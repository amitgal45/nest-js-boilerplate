import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { UserModule } from 'src/types/user/user.module';

@Module({
    imports: [RouterModule.register([
        {
            path: 'api',
            children: [
                {
                    path: 'user',
                    module: UserModule,
                }
            ]
        },
    ]),]
})
export class RoutesModule {

}
