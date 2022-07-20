import "./custPizz.css";
import Large from "../src/svgs/Large.png";
import Medium from "../src/svgs/Medium.png";
import Regular from "../src/svgs/Regular.png";

const Images = ({ imgclass, imgsrc, imgalt }) => {
  return <img className={imgclass} src={imgsrc} alt={imgalt} />;
};
export default Images;
