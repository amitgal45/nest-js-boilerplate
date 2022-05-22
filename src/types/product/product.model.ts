import {  BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table,BelongsTo } from 'sequelize-typescript';
import { Image } from '../image/image.model';
import KitchenProduct from '../kitchen-product/kitchen-product.model';
import { Kitchen } from '../kitchen/kitchen.model';
import RecipeProduct from '../recipe/child_model/recipe_product.model';
import { Recipe } from '../recipe/recipe.model';

export interface IProduct {
    id?: number;
    name:string;
    description?:string;
    type?:ProductType;
    bar_code?:string;
    image?:Image;
    image_id?:number;
    
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

    @Column({type:DataType.STRING,unique:true})
    name: string;

    @Column({type:DataType.STRING})
    bar_code: string;

    @Column
    description: string;

    @Column
    type: string;


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
    kitchen_product: KitchenProduct[]

    @BelongsToMany(() => Recipe,()=>RecipeProduct)
    recipes: Recipe[];

    @ForeignKey(() => Image)
    @Column({ field: 'image_id' })
    image_id: number;
  
    @BelongsTo(() => Image)
    image: Image;

}

