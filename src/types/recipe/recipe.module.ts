import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database.module';
import { RecipeController } from './recipe.controller';
import { recipeProviders } from './recipe.provider';
import { RecipeService } from './recipe.service';

@Module({
  imports: [DatabaseModule],
  controllers: [RecipeController],
  providers: [RecipeService,...recipeProviders]
})
export class RecipeModule {}
