import { useEffect, useState } from "react";
import "./pizza.css";

const Cart = ({}) => {
  const [allOrder, setallOrder] = useState([]);

  useEffect(() => {
    // const abcd = JSON.parse(localStorage.getItem("fullCustData3"));
    // setallOrder(abcd);
  }, [localStorage.getItem("fullCustData3")]);

  return (
    <>
      <div className="cartDiv">
        {" "}
        <div>{allOrder.name}</div>
        <div>{allOrder.size}</div>
        <div>{allOrder.crust}</div>
        <div>
          {allOrder.toppings?.map((topps) => {
            return <span> {topps} </span>;
          })}
        </div>
      </div>
    </>
  );
};

export default Cart;
