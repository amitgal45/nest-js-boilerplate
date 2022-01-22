import { Injectable } from "@nestjs/common";
import { IImage, Image } from "src/types/image/image.model";
import { CreateKitchenDTO } from "src/types/kitchen/dto/create_kitchen.dto";
import { IKitchen, Kitchen } from "src/types/kitchen/kitchen.model";
import { ILocation, Location } from "src/types/location/location.model";
import { IProduct, Product } from "src/types/product/product.model";
import UserProducts, { IUserProduct } from "src/types/user/child_model/user_product.model";
import { CreateUserDTO } from "src/types/user/dto/create_user.dto";
import { UpdateUserDTO } from "src/types/user/dto/update_user.dto";
import { User } from "src/types/user/user.model";

@Injectable()
export default class  BaseService {
    constructor(protected value: typeof Location | typeof User | typeof UserProducts | typeof Product | typeof Kitchen | typeof Image) {
    }

    async findAll(): Promise<any[]> {
        return await this.value.findAll<User | Location | Product | UserProducts | Kitchen | Image>()
        .catch(err=>{throw err})
    }


    async findOne(id: number): Promise<any> {
        return await this.value.findOne<User | Location | Product | UserProducts |Kitchen | Image>({ where: { id: id } })
        .catch(err=>{throw err})

    }

    async findByKeyValue(key: string, value: any): Promise<any> {
        return await this.value.findOne<User | Location | Product | UserProducts | Kitchen | Image>({ where: { [key]: value } })
        .catch(err=>{throw err})

    }

    async create(new_value: CreateUserDTO | ILocation | IProduct | UserProducts|CreateKitchenDTO | Image): Promise<any> {
        return await this.value.create<User | Location | Product | UserProducts|Kitchen | Image>(new_value as any)
        .catch(err=>{throw err})

    }

    async update(new_value:UpdateUserDTO| ILocation | IProduct | IUserProduct|IKitchen|IImage):Promise<any>{
        return await this.value.update<User | Location | Product | UserProducts|Kitchen|Image>(new_value,{where:{id:new_value.id}})
        .catch(err=>{throw err})

    }

    async delete(id: number): Promise<any> {
        return await this.value.destroy<User | Location | Product | UserProducts | Kitchen|Image>({ where: { id: id } })
    }
}