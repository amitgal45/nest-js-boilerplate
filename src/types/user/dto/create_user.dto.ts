import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean ,IsString } from 'class-validator';

export class CreateUserDTO {
    
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