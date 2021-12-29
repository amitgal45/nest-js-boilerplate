import {Image} from './image.model'
export const imageProviders = [
  {
    provide: 'IMAGE_REPOSITORY',
    useValue: Image,
  },
];