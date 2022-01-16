import { Column, DataType, ForeignKey, Model, Sequelize, Table } from "sequelize-typescript";
import { Product } from "src/types/product/product.model";
import { Kitchen } from "../kitchen.model";

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

    @Column({  primaryKey: true, autoIncrement: true, type: DataType.BIGINT })
    id: number;

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
        allowNull: true,
        defaultValue:Sequelize.fn('NOW')
        
    })
    updatedAt?: Date;
}