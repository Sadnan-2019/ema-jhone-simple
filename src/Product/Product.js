import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'


import './Product.css'

const Product = (props) => {
          // console.log(props)
          const {name,img,seller,price,ratings}=props.product;
          return (
                    <div className='product'>
                          <img src={img} alt='' /> 

                              <div className='product-info'>
                              <p className='product-name'>{name}</p>
                          <p>Price:${price}</p>
                          <p><small>Seller:{seller}</small></p>
                          <p><small>Ratings:{ratings}</small></p>  
                              </div>

                              <button className='btn-cart' onClick={()=>props.handleAddtoCart(props.product)}>

                                        <p className='cart-text'>Add to cart</p>
                                        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                              </button>
                         
                    </div>
          );
};

export default Product;