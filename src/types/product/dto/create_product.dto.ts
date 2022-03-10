import { ApiProperty } from "@nestjs/swagger";
import { IsEmail,IsString, Length } from 'class-validator';

export class CreateProductDTO {
    
    id?: number;

    @ApiProperty()
    @IsString()
    @Length(2,40)
    name: string;

    @ApiProperty()
    @IsString()
    img: string;

}

export const createUserDTOSwagger = {
    schema: {
        type: 'object',
        properties: {
            file: {
                type: 'string',
                format: 'binary',
            },
            email:{type:'string'},
            password:{type:'string'},
            first_name:{type:'string'},
            last_name:{type:'string'},
            is_active:{type:'boolean'}
        },
    },
}