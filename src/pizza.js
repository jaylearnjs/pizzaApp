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
    console.log(
      "🚀 ~ file: pizza.js ~ line 18 ~ AddToCart ~ cartData",
      cartData
    );
    setcartDatachld(cartData);
  };

  // window.addEventListener("storage", () => {
  //   // When local storage changes, dump the list to
  //   // the console.
  //   console.log(JSON.parse(window.localStorage.getItem("sampleList")));
  // });

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
