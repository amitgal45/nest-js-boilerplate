import {BelongsToMany, Column, DataType, Model, Sequelize, Table } from 'sequelize-typescript';
import { Product } from 'src/types/product/product.model';
import  { User } from '../user/user.model';
import RecipeProduct from './child_model/recipe_product.model';
import UserRecipe from './child_model/user_recipe.model';

export interface IRecipe {
    id?: number;
    name: string;
    description: string;
    rating:number;

}

@Table
export class Recipe extends Model<IRecipe> {

    @Column({  primaryKey: true, autoIncrement: true, type: DataType.BIGINT })
    id: number;

    @Column
    name: string;

    @Column
    description: string;

    @Column({field:'rating',unique:true,type:DataType.BIGINT})
    rating: number;

    @Column({
        type: DataType.DATE,
        field: 'createdAt',
        defaultValue:Sequelize.fn('NOW')
    })
    createdAt: Date;

    @Column({
        type: DataType.DATE,
        field: 'updatedAt',
        defaultValue:Sequelize.fn('NOW')
    })
    updatedAt?: Date;

    @BelongsToMany(() => Product,()=>RecipeProduct)
    products: Product[];

    @BelongsToMany(() => User,()=>UserRecipe)
    users: User[];
}


