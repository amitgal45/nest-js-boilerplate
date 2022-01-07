import { Inject, Injectable } from '@nestjs/common';
import BaseService from 'src/common/services/base.service';
import { Image } from './image.model';

@Injectable()
export class ImageService extends BaseService {

    constructor(@Inject('IMAGE_REPOSITORY') private imagesRepository: typeof Image) {
        super(imagesRepository)
    }


    override  async create(_imageUrl: any): Promise<any> {
        return await this.imagesRepository.create<Image>({imageUrl:_imageUrl})
    }


}
