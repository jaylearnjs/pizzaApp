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

  return (
    <div className="allPizzas">
      {data.map((allpiz) => (
        <PizzaCard allpiz={allpiz} />
      ))}
     

    </div>
  );
};

export default Pizza;
