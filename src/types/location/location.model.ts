import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Col } from 'sequelize/dist/lib/utils';
import { User } from 'src/types/user/user.model';
// import {GEOMETRY,GEOGRAPHY} from 'sequelize'
import { STRING,GEOGRAPHY } from 'sequelize/types';
export interface ILocation {
    id?: number;
    longitude: number;
    latitude: number;
    location:{type:string,coordinates:number[]};
    // isActive: boolean;
    city_name: string;
    // password: string;
}

@Table
export class Location extends Model<ILocation> {

    @Column({ field: 'ID', primaryKey: true, autoIncrement: true, type: DataType.BIGINT })
    id: number;

    @Column({type:DataType.GEOMETRY})
    location:{type:string,coordinates:number[]};
    
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

