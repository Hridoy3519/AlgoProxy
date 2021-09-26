
import { useState } from "react";
import "./App.css";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";

function App() {
  const [cart,setCart] = useState([]);
  return (
    <div>
      {/* Navbar & Header */}
      <Header cart={cart}></Header>

      {/* Courses Card & Cart */}
      <Courses cart={cart} setCart={setCart}></Courses>
    </div>
  );
}

export default App;
