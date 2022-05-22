// import sequelize, { Op } from "sequelize";
// import KitchenProduct from "src/types/kitchen-product/kitchen-product.model";
// import { Kitchen } from "src/types/kitchen/kitchen.model";
// import { Product } from "src/types/product/product.model";
// import { Recipe } from "src/types/recipe/recipe.model";

// export const findByIdOptions = {


//     attributes: [
//         [sequelize.col('first_name'), 'first_name'], // Take imageUrl parameter from image Model...
//         [sequelize.col('last_name'), 'last_name'], // Take imageUrl parameter from image Model...
//         [sequelize.col('email'), 'email'], // Take imageUrl parameter from image Model...
//         [sequelize.col('image.imageUrl'), 'imageUrl'], // Take imageUrl parameter from image Model...
//       ],
//       include: [
//         { model: Image, as: 'image', attributes: [] },
//         { model: Location, as: 'location' },
//         {
//           model: Kitchen,
//           as: 'kitchen',
//           include: [{
//             model: KitchenProduct, as: 'kitchen_products',attributes: ['id','is_expired'], where: { is_expired: { [Op.not]: true } },
//             include: [{ model: Product, as: 'product', attributes: ['name'] },]
//           }]
//         },
//         {
//           model: Recipe,
//           through: { attributes: [] },
//           include: [{ model: Product, through: { attributes: [] } }],
//         },
//       ],
// }