import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Product } from "src/types/product/product.model";
import { Recipe } from "../recipe.model";

export interface IRecipeProduct{
    id?:number;
    product_id?:number;
    recipe_id?:number;
}


@Table
export default class RecipeProduct extends Model<IRecipeProduct>{

    @Column({  primaryKey: true, autoIncrement: true, type: DataType.BIGINT })
    id: number;
    
    @ForeignKey(()=>Product)
    @Column
    product_id:number;

    @ForeignKey(()=>Recipe)
    @Column
    recipe_id:number;
}
