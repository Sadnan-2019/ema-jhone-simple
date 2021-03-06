// import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProducts";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";

const Orders = () => {
  let navigate = useNavigate();
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const removeHandler = (items) => {
    // console.log(items)

    const rest = cart.filter((item) => item._id !== items._id);
    setCart(rest);
    removeFromDb(items._id);
  };
  const inventory = () => {
    const path = `/inventory/`;
    navigate(path);
  };

  return (
    <div className="shop-container">
      {/* <h1>This is order page....:{products.length}</h1>  */}
      <div className="products-order-container">
        {cart.map((product) => (
          <ReviewItem
            product={product}
            key={product._id}
            removeHandler={removeHandler}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to={"/shippment"}>
            <button
              className="btn btn-primary"
              style={{ marginTop: "10px", padding: "10px" }}
            >
              Proceed Shippment
            </button>
          </Link>
          <br></br>
          <button onClick={inventory}>Inventory</button>
        </Cart>
        {/* <h1>This is order page....:{cart.length}</h1>  */}
      </div>
    </div>
  );
};

export default Orders;
