import { useEffect, useState } from "react";
import "./custPizz.css";
import Large from "../src/svgs/Large.png";
import Medium from "../src/svgs/Medium.png";
import Regular from "../src/svgs/Regular.png";

const CustomizePizza = ({ currPiz }) => {
  const [pizsize, setpizSize] = useState([]);
  const [currCurst, setcurrCurst] = useState([]);

  useEffect(() => {
    setpizSize(currPiz.crust);
    setcurrCurst(currPiz.crust[0].sizes);
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
        {pizsize.map((crust) => {
          return (
            <div
              className="mainCrustDiv"
              onClick={() => setcurrCurst(crust.sizes)}
            >
              <div>{crust.name}</div>
              <div>225</div>
            </div>
          );
        })}
        Select Size
        <div className="pizzSizeDiv">
          {currCurst.map((sizes) => {
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
                  <div className="pizzasize">{saparate[0]}</div>
                  <div className="pizzasize">{saparate[1] + saparate[2]}</div>
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
