import ProductActionTypes from './product.types';

export const productStart = userProduct => ({
    type: ProductActionTypes.ADD_PRODUCT,
    payload:userProduct
  });