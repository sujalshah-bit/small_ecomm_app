import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../redux/Action/ProductAction";
import Carousal from "./Carousal";
import ProductComponent from "./ProductComponent";

const ProductsDisplay = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state);
  const fetchProduct = async () => {
    const resp = await axios
      .get(`https://fakestoreapi.com/products/`)
      .catch((err) => console.log("error:", err));
    dispatch(setProduct(resp.data));
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  console.log("Products:", products);

  return (
    <div>
      <div className="">
         <Carousal/>
        <ProductComponent />
      </div>
    </div>
  );
};

export default ProductsDisplay;
