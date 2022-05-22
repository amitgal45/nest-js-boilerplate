import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsDataURI, IsNumber } from 'class-validator';
import { CreateKitchenProductDto } from './create-kitchen-product.dto';

export class UpdateKitchenProductDto  {

    @ApiProperty()
    @IsNumber()
    id?:number;
    

    @ApiProperty()
    @IsNumber()
    product_id?:number;

    @ApiProperty()
    @IsNumber()
    kitchen_id?:number;

    @ApiProperty()
    @IsDataURI()
    expiry_date?:Date;

    @ApiProperty()
    @IsNumber()
    quantity?:number;
}
