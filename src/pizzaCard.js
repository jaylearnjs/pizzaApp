import { useEffect, useState } from "react";
import SlideDrawer from "./SlideDrawer";
import BackDrop from "./Backdrop";
import "./custPizz.css";

const PizzaCard = ({ allpiz, cartData }) => {
  const [crustData, setcrustData] = useState([]);
  const [selectedprice, setselectedprice] = useState(0);
  const [pizDesc, setpizDesc] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedCrust, setselectedCrust] = useState("");
  const [selectedSize, setselectedSize] = useState("");

  useEffect(() => {
    setcrustData(allpiz.crust[0].sizes);
    setpizDesc(allpiz.crust[0].description);
    setselectedprice(allpiz.crust[0].sizes[0].price);
    setselectedCrust(allpiz.crust[0].name);
    setselectedSize(allpiz.crust[0].sizes[0].name);
  }, []);

  const handleCrustChange = (event, id) => {
    let crustId = event.target.value;
    let findcrustData = allpiz.crust.find(
      (element) => element.crustID == crustId
    );

    setselectedCrust(findcrustData.name);
    setpizDesc(findcrustData.description);
    setcrustData(findcrustData.sizes);
    handleSizeChange(findcrustData.sizes[0].price);
  };

  const handleSizeChange = (event, id) => {
    if (id) {
      let sizeonchange = event.target.value;
      let splitedprice = sizeonchange.split(")")[1];
      let splitedSizeName = sizeonchange.split(")")[0] + ")";
      setselectedSize(splitedSizeName);
      setselectedprice(splitedprice);
    } else {
      setselectedprice(event);
    }
  };

  const addToCart = () => {
    let lclStr = [];
    let fullCustData = {
      name: allpiz.name,
      size: selectedSize,
      crust: selectedCrust,
      price: selectedprice,
      pizimage: allpiz.image,
      description: allpiz.description
    };

    const getStoredValue = JSON.parse(localStorage.getItem("cartData"));
    if (getStoredValue == null) {
      lclStr = [fullCustData];
      localStorage.setItem("cartData", JSON.stringify(lclStr));
      cartData(lclStr);
    } else {
      lclStr = [...getStoredValue, fullCustData];
      localStorage.setItem("cartData", JSON.stringify(lclStr));
      cartData(lclStr);
    }
  };

  return (
    <div className="pizzaCard">
      <div className="imagediv">
        <div className="displayprice">₹ {selectedprice}</div>

        <div className="customizeClass">
          <SlideDrawer
            cartData={cartData}
            close={() => setDrawerOpen(false)}
            show={drawerOpen}
            pizzId={allpiz}
          />
          {drawerOpen && <BackDrop closeDrawer={() => setDrawerOpen(false)} />}
          <p className="custtag" onClick={() => setDrawerOpen(!drawerOpen)}>
            Customize
          </p>
        </div>
        <img
          className="homeImage"
          // src=""
          src={allpiz.image}
          alt="Piz"
        />
      </div>
      <div className="cardDataDiv">
        <div className="titleDiv">
          <h2>{allpiz.name}</h2>
          <p>{pizDesc}</p>
        </div>
        <div className="dropdowndiv">
          <select onClick={(e) => handleSizeChange(e, allpiz.id)}>
            {crustData.map((option) => {
              return (
                <option value={option.crustID}>
                  <p>{option.name}</p>
                  <br />
                  <p>{option.price}</p>
                </option>
              );
            })}
          </select>
          <select onChange={(e) => handleCrustChange(e, allpiz.id)}>
            {allpiz.crust.map((option) => {
              return <option value={option.crustID}>{option.name}</option>;
            })}
          </select>
        </div>
        <div className="buttonOuter">
          <div className="buttonDiv" onClick={(e) => addToCart()}>
            ADD TO CART
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
