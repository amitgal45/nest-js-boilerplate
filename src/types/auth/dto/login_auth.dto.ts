import { ApiProperty } from "@nestjs/swagger";
import { IsEmail,IsString, Length } from 'class-validator';

export class LoginAuthDto {
    
    @IsString()
    @IsEmail()
    @ApiProperty()
    email: string;

    @IsString()
    @Length(8,16)
    @ApiProperty()
    password: string;


}

export const loginAuthDTOSwagger = {
    schema: {
        type: 'object',
        properties: {
            email:{type:'string'},
            password:{type:'string'},
        },
    },
}