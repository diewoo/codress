import ProductActionTypes from './product.types';

const INITIAL_STATE = {
    currentProduct: null,
    error: null
  };
  
    const productReducer = (state = INITIAL_STATE, action) => {
        // switch (action.type) {
        //     case CartActionTypes.ADD_ITEM:
        //         return {
        //           ...state,
        //           cartItems: addItemToCart(state.cartItems, action.payload)
        //         };
        // }    
    }   
    export default productReducer; 