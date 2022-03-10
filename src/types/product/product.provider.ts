import { Product } from './product.model';

export const productssProviders = [
  {
    provide: 'PRODUCT_REPOSITORY',
    useValue: Product,
  },
];