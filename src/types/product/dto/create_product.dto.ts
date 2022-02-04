import { ApiProperty } from "@nestjs/swagger";
import { IsEmail,IsString, Length } from 'class-validator';
import { ProductType } from "../product.model";

export class CreateProductDTO {
    
    id?: number;

    @IsString()
    @Length(2,20)
    @ApiProperty()
    name: string;

    @IsString()
    @Length(2,20)
    @ApiProperty()
    description: string;

    // @IsString()
    // @Length(2,20)
    @ApiProperty()
    type: ProductType;



}

export const createProductDTOSwagger = {
    schema: {
        type: 'object',
        properties: {
            file: {
                type: 'string',
                format: 'binary',
            },
            name:{type:'string'},
            description:{type:'string'},
            type:{type:'string'}

        },
    },
}