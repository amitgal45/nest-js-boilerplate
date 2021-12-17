import { Body, Controller, Delete, Get, HttpException, HttpStatus, Next, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/auth/auth.guard';
import { RolesGuard } from 'src/common/auth/roles.guard';
import { CreateUserDTO } from './dto/create_user.dto';
import { UpdateUserDTO } from './dto/update_user.dto';
import { User } from './user.model';
import { UserService } from './user.service';

@ApiTags('user')
@Controller()
// @UseGuards(new AuthGuard())
export class UserController {

    constructor(private userService: UserService) { }

    @Get()
    async getAll(): Promise<User[]> {
        return await this.userService.findAll();
    }

    @Get(':id')
    async getByID(@Param('id') id: number): Promise<User> {
        try {
            const user: User = await this.userService.findOne(id);
            if (user == null)
                throw new HttpException("Err", HttpStatus.MISDIRECTED);

            return user
        }
        catch (err) {
            throw new HttpException(err.message, HttpStatus.FORBIDDEN);
        }
    }

    @Post()
    async create(@Body() createUserDTO: CreateUserDTO) {
        try {
            return await this.userService.create(createUserDTO)
        }
        catch (err) {
            console.log(err)
            throw new HttpException(err.message, HttpStatus.FORBIDDEN);
        }
    }

    @Put()
    async update(@Body() updateUserDTO: UpdateUserDTO) {
        try {
            return await this.userService.update(updateUserDTO);
        }
        catch (err) {
            throw new HttpException(err.message, HttpStatus.FORBIDDEN);
        }
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<any> {
        try {
            return await this.userService.delete(id)
        }
        catch (err) {
            throw new HttpException(err.message, HttpStatus.FORBIDDEN);

        }
    }
}
