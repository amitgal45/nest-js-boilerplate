import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { Product } from '../product/product.model';
import KitchenProduct from './child_model/kitchen_product.model';

export interface IKitchen {
    ID?: number;
    id?:number;
    // ID?:number;
    // user_id:number;
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

