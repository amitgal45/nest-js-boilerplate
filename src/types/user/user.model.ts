import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Skill } from 'src/types/skill/skill.model';
import { Location } from '../location/location.model';

export interface IUser {
    id?: number;
    firstName: string;
    lastName: string;
    isActive: boolean;
    email?: string;
    password?: string;
}

@Table
export class User extends Model<IUser> {

    @Column({ field: 'ID', primaryKey: true, autoIncrement: true, type: DataType.BIGINT })
    id: number;

    @Column
    firstName: string;

    @Column
    lastName: string;

    @Column
    email: string;

    @Column
    password: string;

    @Column({ defaultValue: true })
    isActive: boolean;

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

    @ForeignKey(()=>Location)
    @Column({ field: 'location_id' })
    location_id: number

    @BelongsTo(() => Location)
    location: Location

    @BelongsToMany(() => Skill,()=>UserSkills)
    skills: Skill[]
}


export interface IUserSkills{
    id?:number;
    skill_id?:number;
    user_id?:number;
}
@Table
export default class UserSkills extends Model<IUserSkills>{

    // @BelongsToMany(()=>)

    @ForeignKey(()=>Skill)
    @Column
    skill_id:number;

    @ForeignKey(()=>User)
    @Column
    user_id:number;
}

