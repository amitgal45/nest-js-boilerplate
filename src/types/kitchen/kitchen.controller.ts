import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Product } from '../product/product.model';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';
import { CreateKitchenDTO } from './dto/create_kitchen.dto';
import { Kitchen } from './kitchen.model';
import { KitchenService } from './kitchen.service';

@ApiTags('kitchen')
@Controller()
export class KitchenController {

    constructor(private kitchenService: KitchenService,private userService:UserService) { }

    @Get()
    async getAll(): Promise<Kitchen[]> {
        try{
            return await this.kitchenService.findAll();
        }
        catch (err) {throw new HttpException(err.message, HttpStatus.FORBIDDEN)};
    }

    @Get('/:id')
    async getByID(@Param('id') id: number): Promise<Kitchen> {
        try {
            const kitchen: Kitchen = await this.kitchenService.findOne(id);
            if (kitchen == null)
                throw new HttpException("Err", HttpStatus.MISDIRECTED);

            return kitchen
        }
        catch (err) {throw new HttpException(err.message, HttpStatus.FORBIDDEN)};
    }

    @Post()
    async create(@Body() createKitchenDTO: CreateKitchenDTO) {
        try {
            const user:User = await this.userService.findByKeyValue("id",createKitchenDTO.user_id);
            if(user!=null && user.kitchen_id)
                throw new Error("למשתמש כבר קיים מטבח")
            
            const kitchen:Kitchen = await this.kitchenService.create()
            user.kitchen_id=kitchen.id;
            return await user.save()
        }
        catch (err) {throw new HttpException(err.message, HttpStatus.FORBIDDEN)};
    }

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
