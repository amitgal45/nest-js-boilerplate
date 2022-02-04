import { Inject, Injectable } from '@nestjs/common';
import BaseService from 'src/common/services/base.service';
// import { Location } from './location.model';
import sequelize from 'sequelize'
import { Product } from './product.model';

@Injectable()
export class ProductService extends BaseService {


    constructor(
        @Inject('PRODUCT_REPOSITORY')
        private productRepository: typeof Product
    ) {
        super(productRepository)
    }

    // async DistanceBetweenTwoPoints(my_location:any,user_location:any){
    //     const point = { type: 'Point', coordinates: [-76.984722, 39.807222]}; // GeoJson format: [lng, lat]
    //     this.productRepository.create({
    //         longitude:3,
    //         latitude:5,
    //         location:point
    //         // location:,
    //         ,
    //         city_name:'dsfsdfsdf'
    //     })
    // }

}
