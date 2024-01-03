import { useState } from "react";
import Landing from "./pages/Landing";
import Shop from "./components/Shop";
import {Routes,Route} from "react-router-dom";
import Detailscard from "./pages/Detailscard"
import Cart from "./components/Cart";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
   <>
    <Nav/>
        <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/details" element={<Detailscard/>}/>
        <Route path="/cart" element={<Cart/>}/>
        </Routes>
      <Footer/>

   </>
  );
}

export default App;
