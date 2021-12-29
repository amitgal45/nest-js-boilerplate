import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, HasOne, Model, Sequelize, Table } from 'sequelize-typescript';
import { Col } from 'sequelize/dist/lib/utils';
import { User } from 'src/types/user/user.model';
// import {GEOMETRY,GEOGRAPHY} from 'sequelize'
import { STRING,GEOGRAPHY } from 'sequelize/types';
import { Product } from '../product/product.model';
export interface IKitchen {
    id?: number;
    longitude: number;
    latitude: number;
    location:{type:string,coordinates:number[]};
    // isActive: boolean;
    city_name: string;
    // password: string;
}

@Table
export class Kitchen extends Model<IKitchen> {

    @Column({ field: 'ID', primaryKey: true, autoIncrement: true, type: DataType.BIGINT })
    id: number;

    @Column({
        type: DataType.DATE,
        field: 'createdAt',
        allowNull: true,
    })
    createdAt: Date;

    @Column({
        type: DataType.DATE,
        field: 'updatedAt',
        allowNull: true,
    })
    updatedAt?: Date;

    @BelongsToMany(() => Product,()=>KitchenProduct)
    products: Product[];


    // @BelongsTo(()=>User,"kitchen_id")
    
}

export interface IKitchenProduct{
    id?:number;
    product_id?:number;
    kitchen_id?:number;
    is_expired?:boolean;
    updatedAt?:Date;
    createdAt?:Date;
}


@Table
export default class KitchenProduct extends Model<IKitchenProduct>{

    @Column
    is_expired:boolean; 

    @ForeignKey(()=>Product)
    @Column
    product_id:number;

    @ForeignKey(()=>Kitchen)
    @Column
    kitchen_id:number;

    @Column({
        type: DataType.DATE,
        field: 'createdAt',
        allowNull: true,
        defaultValue:Sequelize.fn('NOW')
    })
    createdAt: Date;

    @Column({
        type: DataType.DATE,
        field: 'updatedAt',
        // default:new Date.now(),
        allowNull: true,
        defaultValue:Sequelize.fn('NOW')
        
    })
    updatedAt?: Date;
}