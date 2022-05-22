import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { multerOptions } from 'src/common/services/file_name.config';
import { ImageService } from '../image/image.service';
import { CreateProductDTO, createUserDTOSwagger } from './dto/create_product.dto';
import { UpdateProductDTO } from './dto/update_product.dto';
import { IProduct, Product } from './product.model';
import { ProductService } from './product.service';

@ApiTags('product')
@Controller()
export class ProductController {

    constructor(private productService: ProductService,private imageService:ImageService) {
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

    @ApiConsumes('multipart/form-data')
    @ApiBody(createUserDTOSwagger)
    @UseInterceptors(FileInterceptor('file', multerOptions))
    @Post('/')
    async create(@Body() product:CreateProductDTO, @UploadedFile() file: Express.Multer.File):Promise<IProduct[]>{
        try {
            const productData:CreateProductDTO = {...product};
            const img = await this.imageService.create(file.filename)
            productData.image_id = img.id;
           return await this.productService.create(productData);
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
    async init():Promise<Product[]>{
        try {
           return await this.productService.createInit();
        }
        catch (err) {
            throw new HttpException(err.message, HttpStatus.FORBIDDEN);
        }
    }

}
