import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Kitchen } from './kitchen.model';
import { KitchenService } from './kitchen.service';

@ApiTags('kitchen')
@Controller()
export class KitchenController {

    constructor(private kitchenService: KitchenService) { }

    @Get()
    async getAll(): Promise<Kitchen[]> {
        try{
            return await this.kitchenService.findAll();
        }
        catch (err) {throw new HttpException(err.message, HttpStatus.FORBIDDEN)};
    }

    @Get(':id')
    async getByID(@Param('id') id: number): Promise<Kitchen> {
        try {
            const kitchen: Kitchen = await this.kitchenService.findOne(id);
            if (kitchen == null)
                throw new HttpException("Err", HttpStatus.MISDIRECTED);

            return kitchen
        }
        catch (err) {throw new HttpException(err.message, HttpStatus.FORBIDDEN)};
    }

    // @Post()
    // async create(@Body() createUserDTO: CreateUserDTO) {
    //     try {
    //         return await this.kitchenService.create(createUserDTO)
    //     }
    //     catch (err) {throw new HttpException(err.message, HttpStatus.FORBIDDEN)};
    // }

    // @Put()
    // async update(@Body() updateUserDTO: UpdateUserDTO) {
    //     try {
    //         return await this.kitchenService.update(updateUserDTO);
    //     }
    //     catch (err) {throw new HttpException(err.message, HttpStatus.FORBIDDEN)};
    // }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<any> {
        try {
            return await this.kitchenService.delete(id)
        }
        catch (err) {throw new HttpException(err.message, HttpStatus.FORBIDDEN)};
    }
}
