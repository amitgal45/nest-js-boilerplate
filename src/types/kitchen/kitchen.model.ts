import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey,HasOne,Model, Sequelize, Table } from 'sequelize-typescript';
import { User } from 'src/types/user/user.model';
import { Product } from '../product/product.model';
export interface IKitchen {
    id?: number;
    user_id:number;
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