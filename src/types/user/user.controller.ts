import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { multerOptions } from 'src/common/services/file_name.config';
import { Image } from '../image/image.model';
import { ImageService } from '../image/image.service';
// import { ImageService } from '../image/image.service';
import { CreateUserDTO, createUserDTOSwagger } from './dto/create_user.dto';
import { UserResDTO } from './dto/res.dto';
import { UpdateUserDTO } from './dto/update_user.dto';
import { User } from './user.model';
import { UserService } from './user.service';

@ApiTags('user')
@Controller()
export class UserController {

    constructor(private userService: UserService, private imageService: ImageService) { }

    @ApiOperation({description:'This function receives all the schema objects' })
    @ApiResponse({ status: 200, description: 'Users Schema'})
    @Get()
    async getAll(): Promise<User[]> {
        try {
            return await this.userService.findAll();
        }
        catch (err) { throw new HttpException(err.message, HttpStatus.FORBIDDEN) };
    }

    @Get(':id')
    async getByID(@Param('id') id: number): Promise<User> {
        try {
            const user: User = await this.userService.findOne(id);
            if (user == null)
                throw new HttpException("Err", HttpStatus.MISDIRECTED);

            return user
        }
        catch (err) { throw new HttpException(err.message, HttpStatus.FORBIDDEN) };
    }

    @Post()
    @ApiConsumes('multipart/form-data')
    @ApiBody(createUserDTOSwagger)
    @ApiResponse({status:200,type:UserResDTO})
    @UseInterceptors(FileInterceptor('file', multerOptions))
    async create(@Body() createUserDTO: CreateUserDTO, @UploadedFile() file: Express.Multer.File) {
        try {
            const user: User = await this.userService.create(createUserDTO);
            const image: Image = await this.imageService.create(file.filename);
            user.image_id = image.id;
            return await user.save()
        }
        catch (err) { throw (new HttpException(err.message, HttpStatus.FORBIDDEN)) };
    }

    @Put()
    async update(@Body() updateUserDTO: UpdateUserDTO) {
        try {
            return await this.userService.update(updateUserDTO);
        }
        catch (err) { throw new HttpException(err.message, HttpStatus.FORBIDDEN) };
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<any> {
        try {
            return await this.userService.delete(id)
        }
        catch (err) { throw new HttpException(err.message, HttpStatus.FORBIDDEN) };
    }
}
