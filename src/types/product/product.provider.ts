import { Product } from './product.model';

export const productssProviders = [
  {
    provide: 'SKILLS_REPOSITORY',
    useValue: Product,
  },
];