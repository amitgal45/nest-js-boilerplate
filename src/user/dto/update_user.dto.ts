import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean ,IsNumber,IsString } from 'class-validator';

export class UpdateUserDTO {
    // @Column({ field: 'ID', primaryKey: true, autoIncrement: true, type: DataType.BIGINT })
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