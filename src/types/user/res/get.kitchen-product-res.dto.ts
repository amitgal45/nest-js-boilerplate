import { ApiProperty } from '@nestjs/swagger';
import { KitchenProductResDto } from './kitchen-product-res.dto';


export class GetKitchenProductsResDto  {

    @ApiProperty({type:KitchenProductResDto,isArray:true})
    kitchen_products?:KitchenProductResDto[];
    
}
