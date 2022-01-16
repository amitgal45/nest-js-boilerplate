import { Recipe } from './recipe.model';

export const recipeProviders = [{
  provide: 'RECIPE_REPOSITORY',
  useValue: Recipe,
},
];