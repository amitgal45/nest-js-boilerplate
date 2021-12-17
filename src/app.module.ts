import { Module } from '@nestjs/common';
import { APP_GUARD, RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesGuard } from './auth/roles.guard';
import { UserModule } from './user/user.module';
import { LocationModule } from './location/location.module';
import { SkillModule } from './types/skill/skill.module';
import { RoutesModule } from './routes/routes.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   load:[configuration],
    //   envFilePath: [__dirname+".env"],

    // }),
    RoutesModule,
    UserModule,
    LocationModule,
    SkillModule,
    
  ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    ],
})
export class AppModule {}