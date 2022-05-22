import {
  AfterFind,
  BeforeCreate,
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Sequelize,
  Table,
} from 'sequelize-typescript';
import encryptionService from 'src/common/services/encryption.service';
import encrypt from 'src/common/services/encryption.service';
// import EncryptService from 'src/common/services/encryption.service';
import { Product } from 'src/types/product/product.model';
import { Image } from '../image/image.model';
import { Kitchen } from '../kitchen/kitchen.model';
import { Location } from '../location/location.model';
import UserRecipe from '../recipe/child_model/user_recipe.model';
import { Recipe } from '../recipe/recipe.model';
import UserProducts from './child_model/user_product.model';

export interface IUser {
    id?: number;
    first_name: string;
    last_name: string;
    is_active: boolean;
    email?: string;
    password?: string;
    hashedRt?: string;
    location_id?:number;
    kitchen_id?:number;
}

@Table
export class User extends Model<IUser> {
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.BIGINT })
  id: number;

  @Column
  first_name: string;

  @Column
  last_name: string;

  @Column({ field: 'email', unique: true, type: DataType.STRING })
  email: string;

  @Column
  password: string;

  @Column({ defaultValue: true })
  is_active: boolean;

  @Column({
    type: DataType.DATE,
    field: 'createdAt',
    defaultValue: Sequelize.fn('NOW'),
  })
  createdAt: Date;

    @Column({
        type:DataType.STRING,
        allowNull:true
    })
    hashedRt: string;


  @ForeignKey(() => Location)
  @Column({ field: 'location_id' })
  location_id: number;

  @BelongsTo(() => Location)
  location: Location;

  @ForeignKey(() => Image)
  @Column({ field: 'image_id' })
  image_id: number;

  @BelongsTo(() => Image)
  image: Image;

  @ForeignKey(() => Kitchen)
  @Column({ field: 'kitchen_id' })
  kitchen_id: number;

  @BelongsTo(() => Kitchen)
  kitchen: Kitchen;

  @BelongsToMany(() => Product, () => UserProducts)
  products: Product[];

  @BelongsToMany(() => Recipe, () => UserRecipe)
  recipes: Recipe[];

  @BeforeCreate
  static async hashPasswordBeforeUpdate(user: User) {
    try {
      // Encrypt User Data
      // const encryptedFirstName = encryptionService.encrypt(user.first_name);
      // const encryptedLastName = encryptionService.encrypt(user.last_name);
      // const encryptedEmail = encryptionService.encrypt(user.email);
      if(user.password){
        const encryptedPassword = await encryptionService.hashing(user.password);
        user.password = encryptedPassword;
      }

    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  @AfterFind
  static After(user: User) {
    try {
      // decrypt User Data
      // const decryptedFirstName = encryptionService.decrypt(user.first_name);
      // const decryptedLastName = encryptionService.decrypt(user.last_name);
      // const decryptedEmail = encryptionService.decrypt(user.email);
      // user.first_name = decryptedFirstName;
      // user.last_name = decryptedLastName;
      // user.email = decryptedEmail;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
