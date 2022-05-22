import { ApiProperty } from '@nestjs/swagger';


export class KitchenProductResDto  {

    @ApiProperty()
    id?:number;
    

    @ApiProperty()
    product_id?:number;

    @ApiProperty()
    kitchen_id?:number;

    @ApiProperty()
    expiry_date?:Date;

    @ApiProperty()
    quantity?:number;
}
