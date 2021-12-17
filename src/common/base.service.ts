import { Inject, Injectable } from "@nestjs/common";
import { Model } from "sequelize-typescript";
// import { ne } from "sequelize/dist/lib/operators";
import { ILocation, Location } from "src/location/location.model";
import { ISkill, Skill } from "src/types/skill/skill.model";
import { CreateUserDTO } from "src/user/dto/create_user.dto";
import { UpdateUserDTO } from "src/user/dto/update_user.dto";
import UserSkills, { IUser, IUserSkills, User } from "src/user/user.model";

@Injectable()
export default class  BaseService {
    constructor(protected value: typeof Location | typeof User | typeof UserSkills | typeof Skill) {
    }

    async findAll(): Promise<any[]> {
        return await this.value.findAll<User | Location | Skill | UserSkills>()
        .catch(err=>{throw err})
    }


    async findOne(id: number): Promise<any> {
        return await this.value.findOne<User | Location | Skill | UserSkills>({ where: { id: id } })
        .catch(err=>{throw err})

    }

    async findByKeyValue(key: string, value: any): Promise<any> {
        return await this.value.findOne<User | Location | Skill | UserSkills>({ where: { [key]: value } })
        .catch(err=>{throw err})

    }

    async create(new_value: CreateUserDTO | ILocation | ISkill | IUserSkills): Promise<any> {
        return await this.value.create<User | Location | Skill | UserSkills>(new_value as any)
        .catch(err=>{throw err})

    }

    async update(new_value:UpdateUserDTO| ILocation | ISkill | IUserSkills):Promise<any>{
        return await this.value.update<User | Location | Skill | UserSkills>(new_value,{where:{id:new_value.id}})
        .catch(err=>{throw err})

    }

    async delete(id: number): Promise<any> {
        return await this.value.destroy<User | Location | Skill | UserSkills>({ where: { id: id } })
    }
}