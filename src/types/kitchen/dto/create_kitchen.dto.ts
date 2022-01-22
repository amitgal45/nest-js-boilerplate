import { ApiProperty } from "@nestjs/swagger";
import { IsEmail,IsString, Length } from 'class-validator';

export class CreateKitchenDTO {
    
    @ApiProperty()
    user_id?:number;
    // @IsString()
    // @IsEmail()
    // @ApiProperty()
    // email: string;

    // @IsString()
    // @Length(8,16)
    // @ApiProperty()
    // password: string;

    // @IsString()
    // @Length(2,16)
    // @ApiProperty()
    // first_name: string;

    // @IsString()
    // @Length(2,16)
    // @ApiProperty()
    // last_name: string;

    // @ApiProperty()
    // is_active: boolean;

}

