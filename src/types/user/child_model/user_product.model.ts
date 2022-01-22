import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Product } from "src/types/product/product.model";
import { User } from "../user.model";

export interface IUserProduct{
    id?:number;
    product_id?:number;
    user_id?:number;
}


@Table
export default class UserProducts extends Model<IUserProduct>{

    @Column({  primaryKey: true, autoIncrement: true, type: DataType.BIGINT })
    id: number;
    
    @ForeignKey(()=>Product)
    @Column
    product_id:number;

    @ForeignKey(()=>User)
    @Column
    user_id:number;
}
