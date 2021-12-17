import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { RolesGuard } from './common/auth/roles.guard';
import { UserModule } from './types/user/user.module';
import { LocationModule } from './types/location/location.module';
import { SkillModule } from './types/skill/skill.module';
import { RoutesModule } from './routes/routes.module';
import { AuthModule } from './common/auth/auth.module';

@Module({
  imports: [
    RoutesModule,
    UserModule,
    LocationModule,
    SkillModule,
    AuthModule,
    
  ],
  controllers: [AppController],
  providers: [AppService,
    // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard,
    // },
    ],
})
export class AppModule {}