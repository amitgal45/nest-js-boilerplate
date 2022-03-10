import KitchenProduct from "./kitchen-product.model";

export const kitchenProductsProviders = [
  {
    provide: 'KITCHEN-PRODUCT_REPOSITORY',
    useValue: KitchenProduct,
  },
];