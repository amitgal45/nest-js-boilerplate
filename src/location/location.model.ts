import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { User } from 'src/user/user.model';

export interface ILocation {
    id?: number;
    longitude: string;
    latitude: string;
    // isActive: boolean;
    city_name: string;
    // password: string;
}

@Table
export class Location extends Model<ILocation> {

    @Column({ field: 'ID', primaryKey: true, autoIncrement: true, type: DataType.BIGINT })
    id: number;

    @Column
    longitude: number;

    @Column
    latitude: number;

    @Column
    city_name: string;

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

    @HasMany(() => User)
    users: User[]
}

