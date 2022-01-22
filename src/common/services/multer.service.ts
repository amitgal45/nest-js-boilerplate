import { Injectable } from "@nestjs/common";
import { MulterModuleOptions, MulterOptionsFactory } from "@nestjs/platform-express";
import { diskStorage } from 'multer'
// import { editFileName } from "./file_name.config";

@Injectable()
export default class MulterConfigService implements MulterOptionsFactory {
    createMulterOptions(): MulterModuleOptions {
        return {

            // storage: diskStorage({
            //     destination: './uploads',
            //     filename: editFileName,

            //     // filename:editFileName
            // }),
            dest: './uploads'


        }
    }
}

