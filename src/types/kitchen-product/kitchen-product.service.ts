import { Inject, Injectable } from '@nestjs/common';
import { CreateKitchenProductDto } from './dto/create-kitchen-product.dto';
import { UpdateKitchenProductDto } from './dto/update-kitchen-product.dto';
import KitchenProduct from './kitchen-product.model';

@Injectable()
export class KitchenProductService {
  /**
   *
   */
  constructor(@Inject('KITCHEN-PRODUCT_REPOSITORY')
  private kitchenProductRepository: typeof KitchenProduct) { 
  }
  create(createKitchenProductDto: CreateKitchenProductDto) {
    console.log("3####df##",createKitchenProductDto)
    return this.kitchenProductRepository.create(createKitchenProductDto).catch(err=>{console.log(err);throw err})
  }

  findAll() {
    return this.kitchenProductRepository.findAll().catch(err=>err);
  }

  findOne(id: number) {
    return this.kitchenProductRepository.findByPk(id).catch(err=>err);
  }

  update(id: number, updateKitchenProductDto: UpdateKitchenProductDto) {
    return this.kitchenProductRepository.update(updateKitchenProductDto,{where:{id}}).catch(err=>err);
  }

  remove(id: number) {
    return this.kitchenProductRepository.destroy({where:{id}}).catch(err=>err);
  }
}
