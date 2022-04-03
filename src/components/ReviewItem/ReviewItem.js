import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrashAlt } from '@fortawesome/free-solid-svg-icons'



const ReviewItem = (props) => {
  const { name, img, price, shipping, quantity } = props.product;
  return (
    <div className="review-item">
      {/* <h5>this is.... {name}</h5>     */}

      <div className="img">
        <img src={img} alt="" />
      </div>

      <div className="product-details-container"> 
          <div className="product-details" title={name}>
                    <h5>Name: {name.length >20 ? name.slice(0,20) + "..." : name}</h5>
                    <p>Price: ${price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Shipping: {shipping}</p>
          </div>
          <div className="delete-container">
                <button onClick={()=>props.removeHandler(props.product)} className="delete-button">
                <FontAwesomeIcon icon={faTrashAlt} className="icon"></FontAwesomeIcon>



                </button>
      </div>

      </div>
      
    </div>
  );
};

export default ReviewItem;
