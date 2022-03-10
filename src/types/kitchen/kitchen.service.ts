import { Inject, Injectable, Logger } from '@nestjs/common';
import sequelize from 'sequelize';
import BaseService from 'src/common/services/base.service';
import { Product } from '../product/product.model';
// import KitchenProduct, { IKitchenProduct, Kitchen } from './kitchen.model';
import { Cron } from '@nestjs/schedule';
import { Op } from 'sequelize';
import * as moment from 'moment';
import { Kitchen } from './kitchen.model';
import { CreateKitchenDTO } from './dto/create_kitchen.dto';

@Injectable()
export class KitchenService extends BaseService {

    constructor(@Inject('KITCHEN_REPOSITORY') private kitchenRepository: typeof Kitchen) {
        super(kitchenRepository)
    }

    private readonly logger = new Logger(KitchenService.name);

    // @Cron('30 * * * * *')
    // async handleCron() {
    //     await KitchenProduct.update({is_expired:true},{where:{
    //         createdAt: { [Op.lte]: moment(Date.now() - 7 * 24 * 3600 * 1000).format('YYYY-MM-DD')}
    //     }});

    // }

    override async findAll(): Promise<Kitchen[]> {
        return await this.kitchenRepository.findAll<Kitchen>({ include: { model: Product, through: { attributes: [] } } })
    }

    override async findOne(id: number): Promise<Kitchen> {
        return await this.kitchenRepository.findOne<Kitchen>({ where: { id: id }, include: { model: Product, through: { attributes: [] } } })
    }

    override async create(): Promise<Kitchen> {
        return await this.kitchenRepository.create<Kitchen>()
    }



    // override async findOne(id: number): Promise<User> {
    //     return await this.usersRepository.findOne<User>({ where: { id: id }, include: { model: Location } });
    // }


    override  async delete(id:number): Promise<any> {
        return await this.kitchenRepository.destroy<Kitchen>({where:{id:id}})
    }


}

