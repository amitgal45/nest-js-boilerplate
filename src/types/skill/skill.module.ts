import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database.module';
import { SkillController } from './skill.controller';
import { skillsProviders } from './skill.provider';
import { SkillService } from './skill.service';

@Module({
  imports: [DatabaseModule],
  controllers: [SkillController],
  providers: [SkillService,...skillsProviders],
})
export class SkillModule {}
