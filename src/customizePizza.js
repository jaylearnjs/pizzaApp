import { useEffect, useState } from "react";
import "./custPizz.css";
import Large from "../src/svgs/Large.png";
import Medium from "../src/svgs/Medium.png";
import Regular from "../src/svgs/Regular.png";

const CustomizePizza = ({ currPiz }) => {
  const [pizsize, setpizSize] = useState([]);
  const [currCurst, setcurrCurst] = useState([]);
  // const [pizzaPrize, setPizzaPrice] = useState(0);
  const [selectedSize, setselectedSize] = useState(0);
  const [toppings, setToppings] = useState([]);
  const [crustPrice, setcrustPrice] = useState(0);
  const [sizePrice, setsizePrice] = useState(0);
  const [toppingsPrice, settoppingsPrice] = useState(0);
  const [toppData, settoppData] = useState([]);
  const [finalPrice, setfinalPrice] = useState(0);

  useEffect(() => {
    setpizSize(currPiz.crust);
    setcurrCurst(currPiz.crust[0].sizes);
    setToppings(currPiz.crust[0].sizes[0].toppings);
  }, []);

  const changePrice = (sizes, sizeId) => {
    // setPizzaPrice(sizes.price);
    setselectedSize(sizeId);
    setToppings(sizes.toppings);
  };

  const changeCrust = (size) => {
    setcurrCurst(size);
    let crustndSize = size[selectedSize]?.price;
    setcrustPrice(size[selectedSize]?.price);
  };

  const selectTopp = (toppsData) => {
    let selectedToppings = toppsData;
    let stateToppPrice = toppingsPrice;
    let stateToppName = toppData;
    settoppData(stateToppName.push(toppsData.name));
    settoppingsPrice();
    debugger;
  };

  return (
    <div>
      <img
        className="custImage"
        // src=""
        src="https://images.dominos.co.in/new_margherita_2502.jpg"
        alt="Pizza"
      />
      <div className="custMainDiv">
        {" "}
        <div>{currPiz.description}</div>
        <div className="parentcrustdiv">
          {pizsize.map((crust, crustID) => {
            return (
              <div
                className="mainCrustDiv"
                onClick={(e) => changeCrust(crust.sizes)}
                // onClick={
                //   (() => {setcurrCurst(crust.sizes),
                //   setcrustPrice(crust.sizes[selectedSize]?.price)})
                // }
              >
                <div className="crustName">{crust.name}</div>
                {/* <div>{pizzaPrize || crust.sizes[0].price}</div> */}
                <div className="crustPrice">
                  {crust.sizes[selectedSize]?.price}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        Select Size
        <div className="pizzSizeDiv">
          {currCurst.map((sizes, sizeId) => {
            let saparate = sizes.name.split(" ");
            return (
              <div
                className="indPizSize"
                onClick={(e) => changePrice(sizes, sizeId)}
              >
                <div>
                  <img
                    className="pizsizeicon"
                    src={
                      saparate[0] === "Large"
                        ? Large
                        : saparate[0] === "Medium"
                        ? Medium
                        : Regular
                    }
                    alt="Pizza Size"
                  />
                </div>
                <div>
                  <div className="pizzasize">{saparate[0]}</div>
                  <div className="pizzasize">{saparate[1] + saparate[2]}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        Select Toppings
        <div className="toppingsMainDiv">
          {toppings.map((topps) => {
            return (
              <div className="toppingsdiv" onClick={(e) => selectTopp(topps)}>
                <div className="toppName">{topps.name}</div>
                <img src={topps.images.small.toppingImage} alt="Toppings" />

                <div className="toppPrice">{topps.price}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="footerDiv">Price : {crustPrice} </div>
    </div>
  );
};

export default CustomizePizza;
