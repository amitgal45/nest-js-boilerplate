import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Product } from 'src/types/product/product.model';
import { Location } from '../location/location.model';

export interface IImage {
    id?: number;
    imageUrl:string;
}

@Table
export class Image extends Model<IImage> {

    @Column({ field: 'ID', primaryKey: true, autoIncrement: true, type: DataType.BIGINT })
    id: number;

    @Column
    imageUrl: string;

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

}


