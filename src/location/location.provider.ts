// import { User } from './user.model';
import {Location} from './location.model'
export const locationProviders = [
  {
    provide: 'LOCATION_REPOSITORY',
    useValue: Location,
  },
];