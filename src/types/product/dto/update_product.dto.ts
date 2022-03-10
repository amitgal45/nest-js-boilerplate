import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean ,IsNumber,IsString, Length } from 'class-validator';

export class UpdateProductDTO {

    @IsNumber()
    id: number;

    @ApiProperty()
    @IsString()
    @Length(2,40)
    name: string;

    @ApiProperty()
    @IsString()
    img: string;

}