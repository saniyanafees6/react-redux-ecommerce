import { SET_PRODUCTS } from '../constants/productConstants';

const initialState = {
  products: [
    {
      id: 1,
      title: 'Pendant Light',
      category: 'ceiling lights',
    },
  ],
};
export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return state;

    default:
      break;
  }
};
