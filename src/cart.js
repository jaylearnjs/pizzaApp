import { useEffect, useState } from "react";
import "./pizza.css";
import "./cart.css";

const Cart = ({ sendCartData }) => {
  const [allOrder, setallOrder] = useState([]);

  useEffect(() => {
    setallOrder(sendCartData);
  }, [sendCartData]);

  const removeItem = (id) => {
    const getStoredDataValue = JSON.parse(localStorage.getItem("cartData"));
    getStoredDataValue.splice(id, 1);
    localStorage.setItem("cartData", JSON.stringify(getStoredDataValue));
    setallOrder(getStoredDataValue);
  };

  return (
    <>
      <div className="cartDiv">
        {allOrder.map((indData, id) => {
          return (
            <>
              <div className="wholeItemDiv" key={id}>
                <div className="imgName">
                  {/* <div className="itemImg">
                    <img src={indData.pizimage} />
                  </div> */}
                  <img
                    className="itemImg"
                    src={indData.pizimage}
                    alt="cartItem"
                  />
                  <div className="pizNameSize">
                    <div>{indData.name}</div>
                    <div>{indData.description}</div>
                    <div className="sizenCrust">
                      <div>{indData.size} | </div>
                      <div>{indData.crust}</div>
                    </div>
                  </div>
                </div>
                <div className="pricenQty">
                  <div>
                    <span className="qty" onClick={(e) => removeItem(id)}>
                      -
                    </span>
                    <span className="qty">1</span>
                    <span className="qty">+</span>
                  </div>
                  <div>₹ {indData.price}</div>
                </div>

                {indData.toppings ? (
                  <div className="CustData">
                    <div className="custHeading">Your Customisation</div>

                    {indData.toppings.map((conCurTop, id) => {
                      let totalToppings = indData.toppings.length;
                      let diffrentiateTopp =
                        totalToppings > id + 1 ? conCurTop + ", " : conCurTop;

                      return (
                        <>
                          <span>{diffrentiateTopp}</span>
                        </>
                      );
                    })}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
