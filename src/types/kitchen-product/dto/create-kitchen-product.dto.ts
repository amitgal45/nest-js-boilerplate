import { ApiProperty } from "@nestjs/swagger";
import { IsDataURI, IsDateString, IsNumber } from "class-validator";
import { IsDate } from "sequelize-typescript";

export class CreateKitchenProductDto {

    @ApiProperty()
    @IsNumber()
    product_id?:number;

    @ApiProperty()
    @IsNumber()
    kitchen_id?:number;

    @ApiProperty()
    @IsDateString()
    expiry_date?:Date;

    @ApiProperty()
    @IsNumber()
    quantity?:number;
}
