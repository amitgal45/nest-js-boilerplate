import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/types/user/user.model";
import { Recipe } from "../recipe.model";

export interface IUserRecipe{
    id?:number;
    recipe_id?:number;
    user_id?:number;
}


@Table
export default class UserRecipe extends Model<IUserRecipe>{

    @Column({  primaryKey: true, autoIncrement: true, type: DataType.BIGINT })
    id: number;
    
    @ForeignKey(()=>User)
    @Column
    user_id:number;

    @ForeignKey(()=>Recipe)
    @Column
    recipe_id:number;
}