import { useEffect, useState } from "react";
import "./custPizz.css";
import Large from "../src/svgs/Large.png";
import Medium from "../src/svgs/Medium.png";
import Regular from "../src/svgs/Regular.png";

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
        alt="Pizza"
      />
      <div className="custMainDiv">
        {" "}
        <div>{currPiz.description}</div>
        {currPiz.crust.map((crust) => {
          return <div>abcd</div>;
        })}
        Select Size
        <div className="pizzSizeDiv">
          {pizsize.map((sizes) => {
            debugger;
            let saparate = sizes.name.split(" ");
            return (
              <div className="indPizSize">
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
