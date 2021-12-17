import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import UserSkills, { User } from 'src/types/user/user.model';

export interface ISkill {
    id?: number;
    name:string;
    img:string;
}

@Table
export class Skill extends Model<ISkill> {

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

    @BelongsToMany(() => User,()=>UserSkills)
    users: User[]
    // @BelongsToMany(() => User,"user_skill")
    // users: User[]
}

