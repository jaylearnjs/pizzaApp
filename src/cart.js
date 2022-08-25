import { useEffect, useState } from "react";
import "./pizza.css";
import "./cart.css";

const Cart = (props) => {
  const [allOrder, setallOrder] = useState([]);

  useEffect(() => {
    const abcd = JSON.parse(localStorage.getItem("cartData"));
    setallOrder(abcd);
  }, []);

  return (
    <>
      <div className="cartDiv">
        {allOrder.map((indData) => {
          return (
            <>
              <div className="wholeItemDiv">
                {/* {" "}
                <div>{indData.name}</div>
                <div>{indData.size}</div>
                <div>{indData.crust}</div>
                <div>
                  {indData.toppings?.map((topps) => {
                    return <span> {topps} </span>;
                  })}
                </div> */}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
