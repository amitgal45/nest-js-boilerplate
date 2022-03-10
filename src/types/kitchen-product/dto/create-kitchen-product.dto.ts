import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateKitchenProductDto {

    @ApiProperty()
    @IsNumber()
    product_id?:number;

    @ApiProperty()
    @IsNumber()
    kitchen_id?:number;
}
