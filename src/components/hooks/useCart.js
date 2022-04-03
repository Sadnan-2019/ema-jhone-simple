import { useEffect, useState } from "react";
import { getStoredData } from "../../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const saveCart = getStoredData();

    const storeCart = [];
    for (const id in saveCart) {
      const addededCart = products.find(product => product.id === id);
      if (addededCart) {
        const quentity = saveCart[id];
        addededCart.quantity = quentity;
        storeCart.push(addededCart);
      }
    }
    setCart(storeCart);
  }, [products]);
  return [cart, setCart];
};
export default useCart;
