import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { KitchenProductService } from './kitchen-product.service';
import { CreateKitchenProductDto } from './dto/create-kitchen-product.dto';
import { UpdateKitchenProductDto } from './dto/update-kitchen-product.dto';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductService } from '../product/product.service';
import { Product } from '../product/product.model';
import { KitchenService } from '../kitchen/kitchen.service';
import KitchenProduct from './kitchen-product.model';
import { KitchenProductResDto } from './res/kitchen-product-res.dto';
import { GetKitchenProductsResDto } from './res/get.kitchen-product-res.dto';

@ApiTags('kitchen product')
@Controller()
export class KitchenProductController {
  constructor(private readonly kitchenProductService: KitchenProductService, private productService: ProductService, private kitchenService: KitchenService) { }

  @Post()
  @ApiOperation({description:'This function receives CreateKitchenProductDto object and connects Kitchen that owned by a user to a Product' })
  @ApiResponse({ status: 201, description: 'The record has been successfully created.',type:KitchenProductResDto })
  @ApiResponse({ status: 422, description: 'Some variable is not valid.' })
  async create(@Body() createKitchenProductDto: CreateKitchenProductDto) {
    try {
      const kitchen = await this.kitchenService.findOne(createKitchenProductDto.kitchen_id);
      if (!kitchen) throw new HttpException("Couldnt find kitchen", HttpStatus.FORBIDDEN);
      const product: Product = await this.productService.findOne(createKitchenProductDto.product_id);
      if (!product) throw new HttpException("Couldnt find product", HttpStatus.FORBIDDEN);
      return await this.kitchenProductService.create({ kitchen_id: kitchen.id, product_id: product.id,expiry_date:createKitchenProductDto.expiry_date,quantity:createKitchenProductDto.quantity });
    }
    catch (err) {
      console.log(err)
      throw new HttpException(err.message, HttpStatus.FORBIDDEN)
    };

  }

  @Get()
  @ApiOperation({description:'This function receives all the schema objects' })
  @ApiResponse({ status: 200, description: 'All The kitchen products',type:[KitchenProductResDto] })
  @ApiResponse({ status: 422, description: 'Some variable is not valid.' })
  findAll() {
    return this.kitchenProductService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kitchenProductService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKitchenProductDto: UpdateKitchenProductDto) {
    return this.kitchenProductService.update(+id, updateKitchenProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kitchenProductService.remove(+id);
  }
}
