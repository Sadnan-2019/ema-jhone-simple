import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../../Product/Product';
import { addToDb, getStoredData } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useProducts from '../hooks/useProducts';
import './Shop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faStreetView } from '@fortawesome/free-solid-svg-icons'



const Shop = () => {

          const [products,setProducts]=useProducts();
          const [cart,setCart] = useState([]);
          
         //  useEffect(()=>{

         //            fetch(`products.json`)
         //            .then(res => res.json())
         //            .then(data =>setProducts(data))
         //  },[]);

          useEffect(()=>{
            //  console.log(products)

            const storedCart =getStoredData();
            // console.log(storedCart);
            const saveCart=[];
            for(const id  in storedCart){
               const addedProduct =products.find(product =>product.id === id);
               if(addedProduct){
                  // console.log(addedProduct)
                  const quantity=storedCart[id];
                  addedProduct.quantity=quantity;
                  // console.log(addedProduct);
                  saveCart.push(addedProduct);


                  
               }

            }     

            setCart(saveCart);
            // console.log(products);
          },[products])
          const handleAddtoCart = (selectedProduct)=>{
             let newcart =[];
             const exists=cart.find(product =>product.id ===selectedProduct.id);
            //  console.log(exists)
             if(!exists){

               selectedProduct.quantity=1;
               newcart=[...cart,selectedProduct];
             }else{
                const rest =cart.filter(product=>product.id !==selectedProduct.id);
                exists.quantity=exists.quantity+1;
                newcart=[...rest,exists]

             }

            // const newcart =[...cart, selectedProduct];
            setCart(newcart);
            addToDb(selectedProduct.id);
            

                  //   console.log(product);
          }
          return (
                    <div className='shop-container'>
                       <div className='products-container'>
                       {/* <h1>This is product component:{products.length}</h1> */}

                       {
                                 products.map(product =><Product
                                 product={product}
                                 key={product.id}
                                 handleAddtoCart={handleAddtoCart}

                                 
                                 ></Product>)
                       }
                       </div> 



                       <div className='cart-container'> 
                       {/* <h1>  order component</h1> */}
                       {/* <p>Selected Item{cart.length}</p> */}
                       <Cart cart={cart}>

                          <Link to={"/orders"}>
                          <button style={{marginTop:"20px"}}>Riview Order
                          <FontAwesomeIcon icon={faStreetView}></FontAwesomeIcon>
                          </button>
                          </Link>
                       </Cart>
                       </div>       

                             
                    </div>
          );
};

export default Shop;