import { ApiProperty } from "@nestjs/swagger";
import { IsNumber,IsString } from 'class-validator';


export class UpdateLocationDTO {
    // @Column({ field: 'ID', primaryKey: true, autoIncrement: true, type: DataType.BIGINT })
    @IsNumber()
    @ApiProperty()
    id?: number;

    @IsNumber()
    @ApiProperty()
    longitude: string;

    @IsNumber()
    @ApiProperty()
    latitude: string;

    @IsString()
    @ApiProperty()
    city_name: string;


}