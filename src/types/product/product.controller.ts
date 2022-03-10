import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateProductDTO } from './dto/create_product.dto';
import { UpdateProductDTO } from './dto/update_product.dto';
import { IProduct, Product } from './product.model';
import { ProductService } from './product.service';

@ApiTags('product')
@Controller()
export class ProductController {

    constructor(private productService: ProductService) {
        // super();

    }
    
    @Get('/')
    async getAll():Promise<IProduct[]>{
        try {
           return await this.productService.getAll();
        }
        catch (err) {
            throw new HttpException(err.message, HttpStatus.FORBIDDEN);
        }
    }

    @Get('/:id')
    async getById(@Param('id') id: number):Promise<IProduct>{
        try {
           return await this.productService.getById(id);
        }
        catch (err) {
            throw new HttpException(err.message, HttpStatus.FORBIDDEN);
        }
    }

    @Post('/')
    async create(@Body() product:CreateProductDTO):Promise<IProduct[]>{
        try {
           return await this.productService.create(product);
        }
        catch (err) {
            throw new HttpException(err.message, HttpStatus.FORBIDDEN);
        }
    }

    @Put('/')
    async update(@Body() product:UpdateProductDTO):Promise<IProduct[]>{
        try {
           return await this.productService.update(product);
        }
        catch (err) {
            throw new HttpException(err.message, HttpStatus.FORBIDDEN);
        }
    }

    @Delete('/:id')
    async delete(@Param('id') id:number):Promise<IProduct[]>{
        try {
           return await this.productService.delete(id);
        }
        catch (err) {
            throw new HttpException(err.message, HttpStatus.FORBIDDEN);
        }
    }

    @Post('/init')
    async init():Promise<IProduct[]>{
        try {
           return await this.productService.createInit();
        }
        catch (err) {
            throw new HttpException(err.message, HttpStatus.FORBIDDEN);
        }
    }

}
