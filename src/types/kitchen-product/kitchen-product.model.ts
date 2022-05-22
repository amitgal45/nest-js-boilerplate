import { ConstraintMetadata } from "class-validator/types/metadata/ConstraintMetadata";
import { AllowNull, BelongsTo, Column, DataType, ForeignKey, HasOne, Model, Sequelize, Table, Unique } from "sequelize-typescript";
import { DATE } from "sequelize/dist";
import { Product } from "src/types/product/product.model";
import { Kitchen } from "../kitchen/kitchen.model";
import { KitchenModule } from "../kitchen/kitchen.module";

export interface IKitchenProduct{
    id?:number;
    product_id?:number;
    kitchen_id?:number;
    is_expired?:boolean;
    expiry_date?:Date;
    quantity?:number;
    updatedAt?:Date;
    createdAt?:Date;
}


@Table
export default class KitchenProduct extends Model<IKitchenProduct>{

    @Column({  primaryKey: true, autoIncrement: true, type: DataType.BIGINT })
    id: number;

    @AllowNull(true)
    @Column({type:DataType.DATE})
    expiry_date:Date;

    @Column({defaultValue:false})
    is_expired:boolean; 

    @Column
    quantity:number;

    @ForeignKey(() => Product)
    @Column
    product_id: number

    @BelongsTo(()=>Product)
    product:Product;

    @ForeignKey(() => Kitchen)
    @Column
    kitchen_id: number

    @BelongsTo(()=>Kitchen)
    kitchen:Kitchen;

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