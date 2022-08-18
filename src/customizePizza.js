import { useEffect, useState } from "react";
import "./custPizz.css";
import Large from "../src/svgs/Large.png";
import Medium from "../src/svgs/Medium.png";
import Regular from "../src/svgs/Regular.png";

const CustomizePizza = ({ currPiz }) => {
  const [pizsize, setpizSize] = useState([]);
  const [currCurst, setcurrCurst] = useState([]);
  const [selectedSize, setselectedSize] = useState(0);
  const [toppings, setToppings] = useState([]);
  const [crustPrice, setcrustPrice] = useState(0);
  const [toppingsPrice, settoppingsPrice] = useState(0);
  const [toppData, settoppData] = useState([]);
  const [selectedCrustBack, setselectedCrustBack] = useState(0);
  const [selectedSizeBack, setselectedSizeBack] = useState(0);
  const [selectedToppBack, setselectedToppBack] = useState([]);

  useEffect(() => {
    setpizSize(currPiz.crust);
    setcurrCurst(currPiz.crust[0].sizes);
    setToppings(currPiz.crust[0].sizes[0].toppings);
    setcrustPrice(currPiz.crust[0].sizes[0].price);
    let toppIntialBack = new Array(
      currPiz.crust[0].sizes[0].toppings.length
    ).fill("OFF");
    setselectedToppBack(toppIntialBack);
  }, []);

  const changePrice = (sizes, sizeId) => {
    debugger;
    setcrustPrice(sizes.price);
    // selectedCrustBack;

    setselectedSizeBack(sizeId);
    setselectedSize(sizeId);
    setToppings(sizes.toppings);
  };

  const changeCrust = (size, id) => {
    setselectedCrustBack(id);
    setcurrCurst(size);
    setcrustPrice(size[selectedSize]?.price);
  };

  const selectTopp = (toppsData, toppId) => {
    const getToppArray = selectedToppBack;

    let stateToppName = toppData;
    let checkTopp = toppData.find(
      (singleTopp) => singleTopp === toppsData.name
    );

    if (checkTopp === undefined) {
      stateToppName.push(toppsData.name);

      settoppData(stateToppName);
      settoppingsPrice(toppingsPrice + toppsData.price);
      getToppArray[toppId] = "ON";
    } else {
      const index = stateToppName.indexOf(toppsData.name);
      stateToppName.splice(index, 1);
      settoppData(stateToppName);
      settoppingsPrice(toppingsPrice - toppsData.price);
      getToppArray[toppId] = "OFF";
    }
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
            let currSize = selectedSize;
            if (crust.sizes[currSize]) {
              return (
                <div
                  style={{
                    backgroundColor:
                      selectedCrustBack === crustID ? "#006dffd1" : "",
                  }}
                  className="mainCrustDiv"
                  onClick={(e) => changeCrust(crust.sizes, crustID)}
                >
                  <div id={crustID} className="crustName">
                    {crust.name}
                  </div>
                  <div className="crustPrice">
                    {crust.sizes[selectedSize]?.price}
                  </div>
                </div>
              );
            }
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
                style={{
                  backgroundColor:
                    selectedSizeBack === sizeId ? "#006dffd1" : "",
                }}
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
          {toppings.map((topps, toppId) => {
            return (
              <div
                style={{
                  backgroundColor:
                    selectedToppBack[toppId] === "ON" ? "#006dffd1" : "",
                }}
                className="toppingsdiv"
                onClick={(e) => selectTopp(topps, toppId)}
              >
                <div className="toppName">{topps.name}</div>
                <img src={topps.images.small.toppingImage} alt="Toppings" />

                <div className="toppPrice">{topps.price}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="footerDiv">Price : {crustPrice + toppingsPrice} </div>
    </div>
  );
};

export default CustomizePizza;
