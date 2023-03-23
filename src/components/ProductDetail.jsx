import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addToCart, removeSelectedProduct, selectedProduct } from "../redux/Action/ProductAction";

const ProductDetail = () => {
  const product = useSelector((state) => state.selectedProduct);
  const { productId } = useParams();
  const dispatch = useDispatch();
  const fetchProduct = async () => {
    const resp = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log("Error", err));
    dispatch(selectedProduct(resp.data));
  };

  useEffect(() => {
    fetchProduct();
    return () => {
      dispatch(removeSelectedProduct())
    }
  }, [productId]);

  return product ? (
    <div className="w-full h-[650px]  flex flex-col lg:w-[1200px] lg:m-auto md:flex-row ">
      <div
        style={{
          backgroundImage: `url(${product.image})`,
        }}
        className="h-[50%] w-full md:w-[50%] md:h-full  max-w-[1200px] m-auto  bg-contain bg-center bg-no-repeat "
      ></div>
        <hr />

      <div className="h-[50%] w-full md:w-[50%] md:h-full">
        <div className="p-1 text-center text-lg md:text-2xl">
          {product.title}
        </div>
        <hr />
        <hr />
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="mt-3 flex gap-3 text-xl px-3 md:text-2xl ">
            <div>Ratings:</div>
            <div className="font-bold">
              {product.rating && product.rating.rate
                ? `${product.rating.rate}/5`
                : "N/A"}
            </div>
            {product.rating && product.rating.count
              ? `${product.rating.count}`
              : "N/A"}
          </div>

          <div className="mt-3 flex gap-3 text-xl px-3 md:text-lg ">
            <div className="uppercase">{product.category}</div>
          </div>
        </div>

        <div className="flex mt-3 px-3 tracking-wide">
                {product.description}
        </div>

        <div className="flex w-full justify-around mt-8">
            <button className="bg-black text-white border-none px-4 rounded-lg font-medium hover:bg-neutral-300 hover:text-black ">{product.price}$</button>
            <button className="bg-black text-white border-none p-2 rounded-lg font-medium hover:bg-neutral-300 hover:text-black " onClick={()=> dispatch(addToCart(product))}>Add To Cart</button>
        </div>
      </div>
    </div>
  ) : (
    <div>...loading</div>
  );
};

export default ProductDetail;
