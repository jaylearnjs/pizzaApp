import pizzadata from "./pizzadata";
import { useState, useEffect } from "react";
import "./pizza.css";
import PizzaCard from "./pizzaCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import customizePizza from "./customizePizza";

const Pizza = ({}) => {
  const [data, fetchdata] = useState([]);
  useEffect(() => {
    fetchdata(pizzadata.data);
  }, []);

  window.addEventListener("storage", () => {
    // When local storage changes, dump the list to
    // the console.
    console.log(JSON.parse(window.localStorage.getItem("sampleList")));
  });

  return (
    <>
      <div className="allPizzas">
        {data.map((allpiz) => (
          <PizzaCard allpiz={allpiz} />
        ))}
      </div>

      <div className="cartDiv">ABCDE</div>
    </>
  );
};

export default Pizza;
