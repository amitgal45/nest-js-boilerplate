import { Sequelize } from 'sequelize-typescript';
import UserSkills, { User } from 'src/types/user/user.model';
import { Location } from 'src/types/location/location.model';
import { Skill } from 'src/types/skill/skill.model';
import configuration from './configuration';

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
      sequelize.addModels([User,Location,Skill,UserSkills]);
      console.log(process.env.DATABASE_PORT)
      await sequelize.sync({
          // force:true
      });
      return sequelize;
    },
  },
];