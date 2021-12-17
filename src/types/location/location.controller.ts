import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateLocationDTO } from './dto/create_location.dto';
import { UpdateLocationDTO } from './dto/update_location.dto';
import { Location } from './location.model';
import { LocationService } from './location.service';

@ApiTags('location')
@Controller('location')
export class LocationController {

    /**
     *
     */
    constructor(private locationService: LocationService) {
        // super();

    }

    @Get()
    async getAll(): Promise<Location[]> {
        return await this.locationService.findAll();
    }

    @Get(':id')
    async getByID(@Param('id') id: number): Promise<Location> {
        try {
            const location: Location = await this.locationService.findOne(id);
            if (location == null)
                throw new HttpException("Err", HttpStatus.MISDIRECTED);

            return location
        }
        catch (err) {
            
            throw new HttpException(err.message, HttpStatus.FORBIDDEN);
        }
    }

    @Post()
    async create(@Body() createUserDTO: CreateLocationDTO) {
        try {
            return await this.locationService.create(createUserDTO)
        }
        catch (err) {
            console.log(err)
            throw new HttpException(err.message, HttpStatus.FORBIDDEN);
        }
    }

    @Put()
    async update(@Body() updateUserDTO: UpdateLocationDTO) {
        try {
            return await this.locationService.update(updateUserDTO);
        }
        catch (err) {
            throw new HttpException(err.message, HttpStatus.FORBIDDEN);
        }
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<any> {
        try {
            return await this.locationService.delete(id)
        }
        catch (err) {
            throw new HttpException(err.message, HttpStatus.FORBIDDEN);

        }
    }
}
