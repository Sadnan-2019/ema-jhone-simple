import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  console.log(cart);

  let totalPrice = 0;
  let TotalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;

    totalPrice = totalPrice + product.price * product.quantity;
    TotalShipping = TotalShipping + product.shipping;
  }
  const tax = parseFloat((totalPrice * 0.1).toFixed(2));
  //   console.log(typeof tax);
  const grandTotal = totalPrice + TotalShipping + tax;
  return (
    <div className="cart">
      <h4>Cart Details</h4>
      {/* <h1>  order component</h1> */}
      <p>Selected Item:{quantity}</p>
      <div>
        <p>Total Price : ${totalPrice}</p>
        <p>Total Shipping:${TotalShipping} </p>
        <p>Tax:${tax} </p>
        <h5>Grand Total:${parseFloat(grandTotal.toFixed(2))}</h5>
        {/* {
                           console.log(typeof grandTotal)
                       } */}
      </div>
    </div>
  );
};

export default Cart;
