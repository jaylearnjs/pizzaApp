import "./App.css";
import Pizza from "./pizza";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CustomizePizza from "./customizePizza";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Pizza />} />

          <Route path="/custpizz" element={<CustomizePizza />} />
        </Routes>
      </div>
    </Router>

    // <div className="App">
    //   <Pizza />
    // </div>
  );
}

export default App;
