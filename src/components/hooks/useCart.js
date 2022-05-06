import { useEffect, useState } from "react";
import { getStoredData } from "../../utilities/fakedb";

const useCart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const saveCart = getStoredData();

    const storeCart = [];
    const keys = Object.keys(saveCart);
    fetch('http://localhost:5000/product-cart',{

      method: "POST",
      headers:{
        "content-type" : "application/json"
      },
      body:JSON.stringify(keys)
    })
      .then((res) => res.json())
      .then((products) => {
        console.log(products);

        for (const id in saveCart) {
          const addededCart = products.find((product) => product._id === id);
          if (addededCart) {
            const quentity = saveCart[id];
            addededCart.quantity = quentity;
            storeCart.push(addededCart);
          }
        }
        setCart(storeCart);
      });
    console.log(keys);
  }, []);
  return [cart, setCart];
};
export default useCart;
