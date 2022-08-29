import pizzadata from "./pizzadata";
import { useState, useEffect } from "react";
import "./pizza.css";
import PizzaCard from "./pizzaCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import customizePizza from "./customizePizza";
import Cart from "./cart";

const Pizza = ({}) => {
  const [data, fetchdata] = useState([]);
  const [cartDatachld, setcartDatachld] = useState([]);

  useEffect(() => {
    fetchdata(pizzadata.data);
  }, []);

  const addToCart = (cartData) => {
   
    setcartDatachld(cartData);
  };


  return (
    <>
      <div className="allPizzas">
        {data.map((allpiz) => (
          <PizzaCard allpiz={allpiz} cartData={addToCart} />
        ))}
      </div>
      <Cart sendCartData={cartDatachld} />
      {/* <div className="cartDiv">ABCDE</div> */}
    </>
  );
};

export default Pizza;
