import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean ,IsString } from 'class-validator';

export class CreateUserDTO {
    // @Column({ field: 'ID', primaryKey: true, autoIncrement: true, type: DataType.BIGINT })
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