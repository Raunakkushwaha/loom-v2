import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import { fetchProducts, addToCart, removeFromCart, placeOrder } from "../../actions/EcomAction";

import "./Ecom.css";

const Ecom = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.ecomReducer.products);
  const loading = useSelector((state) => state.ecomReducer.loading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="ecom-container">
      <h1>LOOM E-Commerce</h1>
      <p>Explore and shop for the best products!</p>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <div key={product._id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="product-price">Price: ${product.price}</p>
              <button onClick={() => dispatch(addToCart(product))} className="add-to-cart">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Ecom;
