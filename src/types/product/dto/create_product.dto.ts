import { ApiProperty } from "@nestjs/swagger";
import { IsEmail,IsString, Length } from 'class-validator';

export class CreateProductDTO {
    
    id?: number;

    @ApiProperty()
    @IsString()
    @Length(2,40)
    name: string;

    image_id?:number


}

export const createUserDTOSwagger = {
    schema: {
        type: 'object',
        properties: {
            file: {
                type: 'string',
                format: 'binary',
            },
            name:{type:'string'},
        },
    },
}