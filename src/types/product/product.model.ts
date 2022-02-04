import {  BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import KitchenProduct from '../kitchen/child_model/kitchen_product.model';
import { Kitchen } from '../kitchen/kitchen.model';
import RecipeProduct from '../recipe/child_model/recipe_product.model';
import { Recipe } from '../recipe/recipe.model';

export interface IProduct {
    id?: number;
    name:string;
    img:string;
    description:string;
    type:ProductType;
    
}

export enum ProductType {
    דגנים,
    לחם,
    עוף,
    בשר,
}
@Table
export class Product extends Model<IProduct> {

    @Column({ field: 'ID', primaryKey: true, autoIncrement: true, type: DataType.BIGINT })
    id: number;

    @Column
    name: string;

    @Column
    description: string;

    @Column
    type: string;

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

    @BelongsToMany(() => Kitchen,()=>KitchenProduct)
    kitchens: Kitchen[]

    @BelongsToMany(() => Recipe,()=>RecipeProduct)
    recipes: Recipe[];

}

