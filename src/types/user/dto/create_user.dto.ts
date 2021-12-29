import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean ,IsEmail,IsString, Length } from 'class-validator';
// import { Length } from "sequelize-typescript";

export class CreateUserDTO {
    
    id?: number;

    @IsString()
    @IsEmail()
    @ApiProperty()
    email: string;

    @IsString()
    @Length(8,16)
    @ApiProperty()
    password: string;

    @IsString()
    @Length(2,16)
    @ApiProperty()
    first_name: string;

    @IsString()
    @Length(2,16)
    @ApiProperty()
    last_name: string;

    @IsBoolean()
    @ApiProperty()
    is_active: boolean;

}