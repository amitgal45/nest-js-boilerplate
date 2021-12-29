import { Sequelize } from 'sequelize-typescript';
import UserSkills, { User } from 'src/types/user/user.model';
import { Location } from 'src/types/location/location.model';
import { Product } from 'src/types/product/product.model';
import configuration from './configuration';
import { Image } from 'src/types/image/image.model';
import KitchenProduct, { Kitchen } from 'src/types/kitchen/kitchen.model';

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
      sequelize.addModels([User,Location,Product,UserSkills,Image,Kitchen,KitchenProduct]);
      console.log(process.env.DATABASE_PORT)
      await sequelize.sync({
          // force:true
      });
      return sequelize;
    },
  },
];