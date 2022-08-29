import { useEffect, useState } from "react";
import "./pizza.css";
import "./cart.css";

const Cart = ({ sendCartData }) => {
  const [allOrder, setallOrder] = useState([]);

  useEffect(() => {
    setallOrder(sendCartData);
  }, [sendCartData]);

  return (
    <>
      <div className="cartDiv">
        {allOrder.map((indData) => {
          return (
            <>
              <div className="wholeItemDiv">
                <div className="imgName">
                  <div className="itemImg">
                    {/* <img src={indData.pizimage} /> */}
                  </div>
                  <div className="pizNameSize">
                    <h1>{indData.name}</h1>
                    <div>{indData.description}</div>
                    <div className="sizenCrust">
                      <div>{indData.size} | </div>
                      <div>{indData.crust}</div>
                    </div>
                  </div>
                </div>
                <div className="pricenQty">
                  <div>
                    <span className="qty">-</span>
                    <span className="qty">1</span>
                    <span className="qty">+</span>
                  </div>
                  <div>₹ {indData.price}</div>
                </div>
                <div className="CustData">
                  <div className="custHeading">Your Customisation</div>

                  {indData.toppings.map((conCurTop) => {
                    return (
                      <>
                        <span>{conCurTop}</span>
                      </>
                    );
                  })}
                </div>
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
