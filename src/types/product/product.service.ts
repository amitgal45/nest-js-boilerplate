import { Inject, Injectable } from '@nestjs/common';
import BaseService from 'src/common/services/base.service';
import { CreateProductDTO } from './dto/create_product.dto';
import { UpdateProductDTO } from './dto/update_product.dto';
import { products } from './mock/products';
import { IProduct, Product } from './product.model';

@Injectable()
export class ProductService extends BaseService {

    constructor(
        @Inject('PRODUCT_REPOSITORY')
        private productRepository: typeof Product
    ) {
        super(productRepository)
    }

    getAll() {
        return this.productRepository.findAll().catch(err => err)
    }

    getById(id: number) {
        return this.productRepository.findByPk(id).catch(err => err)
    }

    create(product: CreateProductDTO) {
        return this.productRepository.create(product).catch(err => err)
    }

    update(product: UpdateProductDTO) {
        return this.productRepository.update(product, { where: { id: product.id } }).catch(err => err)
    }

    delete(id: number) {
        return this.productRepository.destroy({ where: { id } }).catch(err => err)
    }

    createInit() {
        return this.productRepository.bulkCreate(products)
    }
}
