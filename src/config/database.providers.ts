import { Sequelize } from 'sequelize-typescript';
import  { User } from 'src/types/user/user.model';
import { Location } from 'src/types/location/location.model';
import { Product } from 'src/types/product/product.model';
import configuration from './configuration';
import { Image } from 'src/types/image/image.model';
import { Recipe } from 'src/types/recipe/recipe.model';
import UserRecipe from 'src/types/recipe/child_model/user_recipe.model';
import RecipeProduct from 'src/types/recipe/child_model/recipe_product.model';
import UserProducts from 'src/types/user/child_model/user_product.model';
import { Kitchen } from 'src/types/kitchen/kitchen.model';
import KitchenProduct from 'src/types/kitchen/child_model/kitchen_product.model';

const {database} = configuration();
export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: database.host,
        port: database.port,
        username: database.username,
        password: database.password,
        database: database.databaseName,
      });
      sequelize.addModels([User,Location,Product,UserProducts,Image,Kitchen,KitchenProduct,Recipe,UserRecipe,RecipeProduct]);
      console.log(process.env.DATABASE_PORT)
      await sequelize.sync({
          // force:true
      });
      return sequelize;
    },
  },
];