import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const getProducts = () => API.get("/products");
export const createOrder = (orderData) => API.post("/orders", orderData);
