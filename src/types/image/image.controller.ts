import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import {  multerOptions } from 'src/common/services/file_name.config';

@ApiTags('image')

@Controller()
export class ImageController {


    @Post('upload')
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    })
    @UseInterceptors(FileInterceptor('file',multerOptions))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        const response = {
            originalname: file.originalname,
            filename: file.filename
        }
        return response
    }
}
