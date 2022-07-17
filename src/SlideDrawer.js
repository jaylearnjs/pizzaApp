import React from "react";
import CustomizePizza from "./customizePizza";
import "./drawer.css";

const SlideDrawer = ({ show, pizzId }) => {
  let drawerClasses = show ? "side-drawer open" : "side-drawer";

  return (
    <div className={drawerClasses}>
      {show ? <CustomizePizza currPiz={pizzId} /> : ""}
      {/* <h1 style={{ color: "white" }}>Hello, I'm a drawer!</h1> */}
    </div>
  );
};

export default SlideDrawer;
