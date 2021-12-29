import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import UserSkills, { User } from 'src/types/user/user.model';
import FridgeProduct, { Kitchen } from '../kitchen/kitchen.model';

export interface IProduct {
    id?: number;
    name:string;
    img:string;
}

@Table
export class Product extends Model<IProduct> {

    @Column({ field: 'ID', primaryKey: true, autoIncrement: true, type: DataType.BIGINT })
    id: number;

    @Column
    name: string;

    @Column
    img: string;

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

    @BelongsToMany(() => Kitchen,()=>FridgeProduct)
    kitchens: Kitchen[]
    // @BelongsToMany(() => User,"user_skill")
    // users: User[]
}

