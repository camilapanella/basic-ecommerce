import axios from "axios";

//constants - products
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const POST_PRODUCT = 'POST_PRODUCT'
export const GET_BRANDS = "GET_BRANDS";

export function getProducts() {
  return async function (dispatch) {
    var json = await axios.get(`http://localhost:3001/products`);
    return dispatch({
      type: GET_PRODUCTS,
      payload: json.data,
    });
  };
}

export function getProductById(id) {
  return async function (dispatch) {
    var json = await axios.get(`http://localhost:3001/products/${id}`);
    return dispatch({
      type: GET_PRODUCT_BY_ID,
      payload: json.data,
    });
  };
}
export function clearDetail() {
  return {
    type: CLEAR_DETAIL,
  };
}
export function postProduct(payload) {
  return async function (dispatch) {
    var json = await axios.post(`http://localhost:3001/products`, payload);
    return json;
  };
}
export function deleteProduct(id) {
  return async function () {
    var json = await axios.delete(`http://localhost:3001/products/${id}`);
  };
}

export function getBrands() {
  return async function (dispatch) {
    var json = await axios.get(`http://localhost:3001/brands`);
    return dispatch({
      type: GET_BRANDS,
      payload: json.data,
    });
  };
}
