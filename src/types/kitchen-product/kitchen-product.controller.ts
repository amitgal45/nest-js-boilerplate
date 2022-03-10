import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { KitchenProductService } from './kitchen-product.service';
import { CreateKitchenProductDto } from './dto/create-kitchen-product.dto';
import { UpdateKitchenProductDto } from './dto/update-kitchen-product.dto';
import { ApiTags } from '@nestjs/swagger';
import { ProductService } from '../product/product.service';
import { Product } from '../product/product.model';
import { KitchenService } from '../kitchen/kitchen.service';

@ApiTags('kitchen product')
@Controller()
export class KitchenProductController {
  constructor(private readonly kitchenProductService: KitchenProductService,private productService:ProductService,private kitchenService:KitchenService) {}

  @Post()
  async create(@Body() createKitchenProductDto: CreateKitchenProductDto) {
    try {
      const kitchen = await this.kitchenService.findOne(createKitchenProductDto.kitchen_id);
      if(!kitchen) throw new HttpException("Couldnt find kitchen",HttpStatus.FORBIDDEN);
      const product:Product = await this.productService.findOne(createKitchenProductDto.product_id);
      if(!product) throw new HttpException("Couldnt find product",HttpStatus.FORBIDDEN);
      return await this.kitchenProductService.create({kitchen_id:kitchen.id,product_id:product.id});
  }
  catch (err) {throw new HttpException(err.message, HttpStatus.FORBIDDEN)};
  
  }

  @Get()
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
