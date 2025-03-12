import * as api from "../api/EcomRequests"; // Make sure api/index.js contains relevant API calls

// Action Types
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const PLACE_ORDER = "PLACE_ORDER";

// Fetch Products
export const fetchProducts = () => async (dispatch) => {
  try {
    const { data } = await api.getProducts(); 
    dispatch({ type: FETCH_PRODUCTS, payload: data });
  } catch (error) {
    console.log("Error fetching products:", error);
  }
};

// Add to Cart
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

// Remove from Cart
export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
};

// Place Order
export const placeOrder = (orderData) => async (dispatch) => {
  try {
    const { data } = await api.createOrder(orderData);
    dispatch({ type: PLACE_ORDER, payload: data });
  } catch (error) {
    console.log("Error placing order:", error);
  }
};
