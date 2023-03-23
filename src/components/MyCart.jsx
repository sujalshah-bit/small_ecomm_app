import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/Action/ProductAction";
const MyCart = () => {
  const checker = useSelector((state) => state.cart.items.length);
  const cartList = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const renderCart= cartList.items.map((product)=>{
    return checker ? (
    <div className="w-full max-w-[800px] m-auto ">
      <div className=" h-[150px] mt-10 border-2 border-gray-400 flex ">
        <div
          style={{ backgroundImage: `url(${product.image})` }}
          className="bg-contain bg-no-repeat mr-1 h-full w-[120px] md:w-[180px]"
        ></div>
        <div className="flex flex-col gap-3">
          <div className="font-bold text-xs md:text-xl">
            {product.title}
          </div>
          <div className="text-xs md:text-lg">
            Category:{" "}
            <span className="font-medium uppercase">
              {product.category}
            </span>
          </div>
          <div className="flex gap-2">
            <button className="bg-black text-white border-none text-xs md:text-lg p-[5px] rounded-lg font-medium hover:bg-neutral-300 hover:text-black">
              Buy Now
            </button>
            <button className="bg-black text-white border-none text-xs md:text-lg p-[5px] rounded-lg font-medium hover:bg-neutral-300 hover:text-black" onClick={()=> dispatch(removeFromCart(product.id))}>
              Remove item
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>No Product in a List</div>
  );
  })
  console.log(cartList);
  return (
    <>
      {renderCart}
    </>
  )
};

export default MyCart;
