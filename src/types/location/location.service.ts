import { Inject, Injectable } from '@nestjs/common';
import BaseService from 'src/common/services/base.service';
import { Location } from './location.model';

@Injectable()
export class LocationService extends BaseService {


    constructor(
        @Inject('LOCATION_REPOSITORY')
        private locationRepository: typeof Location
    ) {
        super(locationRepository)
    }

}
