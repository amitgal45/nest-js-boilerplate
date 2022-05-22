import { BelongsToMany, Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import KitchenProduct from '../kitchen-product/kitchen-product.model';
import { Product } from '../product/product.model';

export interface IKitchen {
    id?: number;
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

    @HasMany(() => KitchenProduct)
    kitchen_products: Product[];

    
 
}

