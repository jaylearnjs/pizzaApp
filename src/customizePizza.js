import { useEffect, useState } from "react";
import "./custPizz.css";
import Large from "../src/svgs/Large.png";
import { ReactComponent as Medium } from "../src/svgs/Medium.svg";
import { ReactComponent as Regular } from "../src/svgs/Regular.svg";

const CustomizePizza = ({ currPiz }) => {
  const [pizsize, setpizSize] = useState([]);
  useEffect(() => {
    setpizSize(currPiz.crust[0].sizes);
  }, []);

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
        Select Size
        <div className="pizzSizeDiv">
          {pizsize.map((sizes) => {
            let saparate = sizes.name.split(" ");
            debugger;
            return (
              <div className="indPizSize">
                <div>
                  {/* <{...saparate[0]} /> */}
                  <img src={Large} />
                </div>
                <div>
                  <div>{saparate[0]}</div>
                  <div>{saparate[1] + saparate[2]}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CustomizePizza;
