import { Inject, Injectable } from '@nestjs/common';
import { User } from './user.model';
import { Location } from '../location/location.model';
import BaseService from 'src/common/services/base.service';
import { CreateUserDTO } from './dto/create_user.dto';
import sequelize, { Op } from 'sequelize'
import { Kitchen } from '../kitchen/kitchen.model';
import { Product } from '../product/product.model';
import { Image } from '../image/image.model';
import UserRecipe from '../recipe/child_model/user_recipe.model';
import { Recipe } from '../recipe/recipe.model';

@Injectable()
export class UserService extends BaseService {

    constructor(@Inject('USERS_REPOSITORY') private usersRepository: typeof User) {
        super(usersRepository)
    }

    override async findAll(): Promise<any[]> {
        var location = sequelize.literal(`ST_GeomFromText('POINT(${75.8577} ${22.7196})')`);
        var distance = sequelize.fn(
            'ST_DistanceSphere',
            sequelize.literal('location::geometry'),
            location
        );
        return await this.usersRepository.findAll<User>({
            attributes: [[distance, 'distance']],
            where: sequelize.where(distance, { [Op.lte]: 10 }),
            order: [
                [sequelize.literal('"distance"'), 'ASC'], // for smallest distance at top
            ],
            include: { model: Location }
        })
            .catch(err => { throw err })
    }

    override async findOne(id: number): Promise<User> {
        return await this.usersRepository.findOne<User>({
            subQuery: false, where: { id: id.toString() }, attributes: [
                [sequelize.col('image.imageUrl'), 'imageUrl'], // Take imageUrl parameter from image Model...
            ], include: [
                { model: Image, as: 'image', attributes: [] },
                { model: Location, as: 'location' },
                { model: Kitchen, include: [{ model: Product, through: { attributes: [] } }] },
                { model: Recipe, through:{attributes:[]},include: [{ model: Product,through:{attributes:[]} }] }

            ]
        });
    }

    override  async create(new_value: CreateUserDTO): Promise<any> {
        return await this.usersRepository.create<User>(new_value)
    }


}
