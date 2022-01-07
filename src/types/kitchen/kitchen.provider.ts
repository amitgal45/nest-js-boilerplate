import {Kitchen} from './kitchen.model'
export const kitchenProviders = [
  {
    provide: 'KITCHEN_REPOSITORY',
    useValue: Kitchen,
  },
];