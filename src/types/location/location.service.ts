import { Inject, Injectable } from '@nestjs/common';
import BaseService from 'src/common/services/base.service';
import { Location } from './location.model';
import sequelize from 'sequelize'

@Injectable()
export class LocationService extends BaseService {


    constructor(
        @Inject('LOCATION_REPOSITORY')
        private locationRepository: typeof Location
    ) {
        super(locationRepository)
    }

    async DistanceBetweenTwoPoints(my_location:any,user_location:any){
        const point = { type: 'Point', coordinates: [-76.984722, 39.807222]}; // GeoJson format: [lng, lat]
        this.locationRepository.create({
            longitude:3,
            latitude:5,
            location:point
            // location:,
            ,
            city_name:'dsfsdfsdf'
        })
    }

}
