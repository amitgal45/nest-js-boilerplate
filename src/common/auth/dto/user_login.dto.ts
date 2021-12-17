import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean ,IsString } from 'class-validator';

export class UserLoginDTO {

    @IsString()
    @ApiProperty()
    email: string;

    @IsString()
    @ApiProperty()
    password: string;

}