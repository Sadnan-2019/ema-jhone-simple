import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../../Product/Product";
import { addToDb, getStoredData } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import useProducts from "../hooks/useProducts";
import "./Shop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStreetView } from "@fortawesome/free-solid-svg-icons";
import useCart from "../hooks/useCart";

const Shop = () => {
  //   const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart();

  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [page, size]);

  useEffect(() => {
    fetch(`http://localhost:5000/product-count`)
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 10);
        setPageCount(pages);
      });
  }, []);

  //  useEffect(()=>{

  //            fetch(`products.json`)
  //            .then(res => res.json())
  //            .then(data =>setProducts(data))
  //  },[]);

 
  const handleAddtoCart = (selectedProduct) => {
    let newcart = [];
    const exists = cart.find((product) => product._id === selectedProduct._id);
    //  console.log(exists)
    if (!exists) {
      selectedProduct.quantity = 1;
      newcart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(
        (product) => product._id !== selectedProduct._id
      );
      exists.quantity = exists.quantity + 1;
      newcart = [...rest, exists];
    }

    // const newcart =[...cart, selectedProduct];
    setCart(newcart);
    addToDb(selectedProduct._id);

    //   console.log(product);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {/* <h1>This is product component:{products.length}</h1> */}

        {products.map((product) => (
          <Product
            product={product}
            key={product._id}
            handleAddtoCart={handleAddtoCart}
          ></Product>
        ))}
      </div>

      <div className="cart-container">
        {/* <h1>  order component</h1> */}
        {/* <p>Selected Item{cart.length}</p> */}
        <Cart cart={cart}>
          <Link to={"/orders"}>
            <button style={{ marginTop: "20px" }}>
              Riview Order
              <FontAwesomeIcon icon={faStreetView}></FontAwesomeIcon>
            </button>
          </Link>
        </Cart>
      </div>

      <div className="pagination App">
        {[...Array(pageCount).keys()].map((number) => (
          <button
            className={page === number ? "selected" : ""}
            onClick={() => setPage(number)}
          >
            {number + 1}
          </button>
        ))}
        {/* {size} */}
        <select onChange={(e) => setSize(e.target.value)}>
          <option value="5">5</option>
          <option value="10" selected>
            10
          </option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default Shop;
