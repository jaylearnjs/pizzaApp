import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SlideDrawer from "./SlideDrawer";
import BackDrop from "./Backdrop";
import "./custPizz.css";

const PizzaCard = ({ allpiz, cartData }) => {
  const [crustData, setcrustData] = useState([]);
  const [selectedprice, setselectedprice] = useState(0);
  const [pizDesc, setpizDesc] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  // const [initprice,setinitprice]=useState(0)

  useEffect(() => {
    setcrustData(allpiz.crust[0].sizes);
    setpizDesc(allpiz.crust[0].description);
    setselectedprice(allpiz.crust[0].sizes[0].price);
  }, []);

  const handleCrustChange = (event, id) => {
    let crustId = event.target.value;
    let findcrustData = allpiz.crust.find(
      (element) => element.crustID == crustId
    );

    setpizDesc(findcrustData.description);
    setcrustData(findcrustData.sizes);
    handleSizeChange(findcrustData.sizes[0].price);
  };

  const handleSizeChange = (event, id) => {
    if (id) {
      let sizeonchange = event.target.value;
      let splitedprice = sizeonchange.split(")")[1];
      setselectedprice(splitedprice);
    } else {
      setselectedprice(event);
    }
  };

  function handleOpenDrawerButton() {
    setDrawerOpen(!drawerOpen);
  }

  function handleBackdropClick() {
    setDrawerOpen(false);
  }

  return (
    <div className="pizzaCard">
      <div className="imagediv">
        <div className="displayprice">₹ {selectedprice}</div>

        <div className="customizeClass">
          <SlideDrawer cartData={cartData} close={() => setDrawerOpen(false)} show={drawerOpen} pizzId={allpiz} />
          {drawerOpen && <BackDrop closeDrawer={handleBackdropClick} />}
          <p className="custtag" onClick={handleOpenDrawerButton}>
            Customize
          </p>
        </div>
        <img
          className="homeImage"
          // src=""
          src="https://images.dominos.co.in/new_margherita_2502.jpg"
          alt="Piz"
        />
      </div>

      <div className="titleDiv">
        <h2>{allpiz.name}</h2>
        <p>{pizDesc}</p>
      </div>
      <div className="dropdowndiv">
        <select onClick={(e) => handleSizeChange(e, allpiz.id)}>
          {crustData.map((option) => {
            return (
              <option value={option.crustID}>
                {/* {`option.name \n option.price`} */}
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
      <div className="buttonDiv"></div>
    </div>
  );
};

export default PizzaCard;
