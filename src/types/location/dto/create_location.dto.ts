import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from 'class-validator';



export class CreateLocationDTO {

    id?: number;

    @IsNumber()
    @ApiProperty()
    longitude: number;

    @IsNumber()
    @ApiProperty()
    latitude: number;

    @IsString()
    @ApiProperty()
    city_name: string;

}