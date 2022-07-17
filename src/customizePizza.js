import { useEffect, useState } from "react";
import "./custPizz.css";

const CustomizePizza = ({ currPiz }) => {
  const [size,setSize]=useState("")
  useEffect(() => {
    setSize(currPiz.crust[0].sizes);
   
  }, []);
  var abcd = size;
  debugger
  return (
    <div>
      <img
        className="custImage"
        src="https://images.dominos.co.in/new_margherita_2502.jpg"
      />
      {/* <div style={{ "padding-left": "15px" }}> {selectedpizzid}</div> */}
      <div className="custMainDiv">
        {" "}
        <div>{currPiz.description}</div>
        <div></div>
      </div>
    </div>
  );
};

export default CustomizePizza;
