import { Inject, Injectable } from '@nestjs/common';
import { User } from './user.model';
import {Location} from '../location/location.model';
import BaseService from 'src/common/base.service';
import { CreateUserDTO } from './dto/create_user.dto';

@Injectable()
export class UserService extends BaseService {

    constructor(
        @Inject('USERS_REPOSITORY')
        private usersRepository: typeof User
    ) { 
        super(usersRepository)
    }


    override async findOne(id: number): Promise<User> {
        return await this.usersRepository.findOne<User>({ where: { id: id }, include:{model:Location} });
    }

    override  async create(new_value: CreateUserDTO): Promise<any> {
        return await this.usersRepository.create<User>(new_value)
    }


}
