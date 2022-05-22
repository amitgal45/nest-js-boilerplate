import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean ,IsNumber,IsString } from 'class-validator';

export class UserResDTO {

    @IsNumber()
    @ApiProperty()
    id?: number;

    @IsString()
    @ApiProperty()
    email: string;

    @IsString()
    @ApiProperty()
    password: string;

    @IsString()
    @ApiProperty()
    firstName: string;

    @IsString()
    @ApiProperty()
    lastName: string;

    @IsBoolean()
    @ApiProperty()
    isActive: boolean;

}