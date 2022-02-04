import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { multerOptions } from 'src/common/services/file_name.config';
import { Image } from '../image/image.model';
import { CreateProductDTO, createProductDTOSwagger } from './dto/create_product.dto';
import { Product } from './product.model';
import { ProductService } from './product.service';
import {ImageService} from './../image/image.service'
import { UpdateUserDTO } from '../user/dto/update_user.dto';
import { UpdateProductDTO, updateProductDTOSwagger } from './dto/update_product.dto';

@ApiTags('product')
@Controller()
export class ProductController {

    /**
     *
     */
    constructor(private productService: ProductService, private imageService:ImageService) {
        // super();

    }
    

    @Get()
    async getAll(): Promise<Location[]> {
        return await this.productService.findAll();
    }

    // @Get(':id')
    // async getByID(@Param('id') id: number): Promise<Location> {
    //     try {
    //         const location: Location = await this.locationService.findOne(id);
    //         if (location == null)
    //             throw new HttpException("Err", HttpStatus.MISDIRECTED);

    //         return location
    //     }
    //     catch (err) {
            
    //         throw new HttpException(err.message, HttpStatus.FORBIDDEN);
    //     }
    // }



    @Post()
    @ApiConsumes('multipart/form-data')
    @ApiBody(createProductDTOSwagger)
    @UseInterceptors(FileInterceptor('file', multerOptions))
    async create(@Body() createProductDTO: CreateProductDTO, @UploadedFile() file: Express.Multer.File) {
        try {
            const product: Product = await this.productService.create(createProductDTO);
            const image: Image = await this.imageService.create(file.filename);
            product.img = image.imageUrl;
            return await product.save()
        }
        catch (err) { throw (new HttpException(err.message, HttpStatus.FORBIDDEN)) };
    }

    @Put()
    @ApiConsumes('multipart/form-data')
    @ApiBody(updateProductDTOSwagger)
    @UseInterceptors(FileInterceptor('file', multerOptions))
    async update(@Body() UpdateProductDTO: UpdateProductDTO) {
        try {
            return await this.productService.update(UpdateProductDTO);
        }
        catch (err) {
            throw new HttpException(err.message, HttpStatus.FORBIDDEN);
        }
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<any> {
        try {
            return await this.productService.delete(id)
        }
        catch (err) {
            throw new HttpException(err.message, HttpStatus.FORBIDDEN);

        }
    }
}
