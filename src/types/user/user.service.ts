import { HttpException, Inject, Injectable } from '@nestjs/common';
import { User } from './user.model';
import { Location } from '../location/location.model';
import BaseService from 'src/common/services/base.service';
import { CreateUserDTO } from './dto/create_user.dto';
import { Op } from 'sequelize';
import { Kitchen } from '../kitchen/kitchen.model';
import { Product } from '../product/product.model';
import { Image } from '../image/image.model';
import UserRecipe from '../recipe/child_model/user_recipe.model';
import { Recipe } from '../recipe/recipe.model';
import KitchenProduct from '../kitchen-product/kitchen-product.model';
import * as sequelize from 'sequelize'
import { KitchenProductModule } from '../kitchen-product/kitchen-product.module';
// import { findByIdOptions } from './queries/find-by-id';
@Injectable()
export class UserService extends BaseService {
  constructor(
    @Inject('USERS_REPOSITORY') private usersRepository: typeof User,
  ) {
    super(usersRepository);
  }

  // override async findAll(): Promise<any[]> {
  //     var location = sequelize.literal(`ST_GeomFromText('POINT(${75.8577} ${22.7196})')`);
  //     var distance = sequelize.fn(
  //         'ST_DistanceSphere',
  //         sequelize.literal('location::geometry'),
  //         location
  //     );
  //     return await this.usersRepository.findAll<User>({
  //         attributes: [[distance, 'distance']],
  //         where: sequelize.where(distance, { [Op.lte]: 10 }),
  //         order: [
  //             [sequelize.literal('"distance"'), 'ASC'], // for smallest distance at top
  //         ],
  //         include: { model: Location }
  //     })
  //         .catch(err => { throw err })
  // }

  override async findAll(): Promise<any[]> {
    try{
    return await this.usersRepository.findAll<User>({
      attributes: [
        [sequelize.col('first_name'), 'first_name'], // Take imageUrl parameter from image Model...
        [sequelize.col('last_name'), 'last_name'], // Take imageUrl parameter from image Model...
        [sequelize.col('email'), 'email'], // Take imageUrl parameter from image Model...
        [sequelize.col('image.imageUrl'), 'imageUrl'], // Take imageUrl parameter from image Model...
        // [sequelize.col('kitchen.kitchen_products.product.name'), 'kitchen.kitchen_products.is'], // Take imageUrl parameter from image Model...
      ],
      include: [
        { model: Image, as: 'image', attributes: [] },
        { model: Location, as: 'location' },
        {
          model: Kitchen,
          as: 'kitchen',
          include: [{
            model: KitchenProduct, as: 'kitchen_products',attributes: ['id','is_expired'], where: { is_expired: { [Op.not]: true } },
            include: [{ model: Product, as: 'product', attributes: ['name'] },]
          }]
        },
        {
          model: Recipe,
          through: { attributes: [] },
          include: [{ model: Product, through: { attributes: [] } }],
        },
      ],
    });
  }
  catch(err){
    console.log(err)
    throw new HttpException("IDK",401)
  }
  }

  override async findOne(id: number): Promise<User> {
    return await this.usersRepository.findOne<User>({
      where: {
        id: id.toString() 
      },
      attributes: [
        [sequelize.col('first_name'), 'first_name'], // Take imageUrl parameter from image Model...
        [sequelize.col('last_name'), 'last_name'], // Take imageUrl parameter from image Model...
        [sequelize.col('email'), 'email'], // Take imageUrl parameter from image Model...
        [sequelize.col('image.imageUrl'), 'imageUrl'], // Take imageUrl parameter from image Model...
      ],
      include: [
        { model: Image, as: 'image', attributes: [] },
        { model: Location, as: 'location' },
        {
          model: Kitchen,
          as: 'kitchen',
          include: [{
            model: KitchenProduct, as: 'kitchen_products',attributes: ['id','is_expired'], where: { is_expired: { [Op.not]: true } },
            include: [{ model: Product, as: 'product', attributes: ['name'] },]
          }]
        },
        {
          model: Recipe,
          through: { attributes: [] },
          include: [{ model: Product, through: { attributes: [] } }],
        },
      ],
    });
  }

  override async create(new_value: CreateUserDTO): Promise<any> {
    return await this.usersRepository.create<User>(new_value);
  }
}
