import {
    GET_PRODUCTS, GET_PRODUCT_BY_ID, GET_BRANDS, CLEAR_DETAIL, POST_PRODUCT
  } from "../actions/actions";
  
  const initialState = {
    products: [],
    details: [],
    brands: []
  };
  
  export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_PRODUCTS:
        return {
          ...state,
          products: action.payload,
        };
      case GET_PRODUCT_BY_ID:
        return {
          ...state,
          details: action.payload,
        };
      case CLEAR_DETAIL:
        return {
          ...state,
          details: [],
        };
        case GET_BRANDS:
        return{
            ...state,
            brands: action.payload
        }
        case POST_PRODUCT:
        return{
          ...state
        }
      default:
        return { ...state };
    }
  };