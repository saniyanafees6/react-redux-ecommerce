import {
  SET_PRODUCTS,
  SELECT_PRODUCT,
  REMOVE_SELECTED_PRODUCT,
} from '../constants/actionTypes';

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const selectProduct = (product) => {
  return {
    type: SELECT_PRODUCT,
    payload: product,
  };
};
