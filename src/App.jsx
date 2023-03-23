import { useState } from "react";
import "./App.css";
import Carousal from "./components/Carousal";
import Header from "./components/Header";
import ProductsDisplay from "./components/ProductsDisplay";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import MyCart from "./components/MyCart";
import Search from "./components/Search";

function App() {
  // fetch('https://dummyjson.com/products')
  // .then(res => res.json())
  // .then(json => console.log(json))

  return (
    <div className="App overflow-x-hidden">
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<ProductsDisplay />}/>
            <Route path="/products/:productId" element={<ProductDetail/>} />
            <Route path="/cart" element={<MyCart/>} />
            <Route> Opps, 404 Not Found!!</Route>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
