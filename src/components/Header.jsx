import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="border-b-2 border-gray-400">
      <div className="max-w-[1200px] m-auto flex p-1 items-center justify-between bg md:text-xl md:p-3">
        <div className="text-[15px] font-medium md:text-xl">eBucket</div>
        {/* <div className=" flex items-center gap-3 border-b-[1.4px] border-black bg ">
          <input
            type="text"
            placeholder="Search..."
            onChange={e=>setSearchTerm(e.target.value)}
            className="outline-none border-none p-[2px] md:"
          />
          <AiOutlineSearch className="text-[21px] md:text-2xl " onClick={handleSearch} />
        </div> */}
        <div className="text-2xl md:text-3xl relative">
          <Link to={"/cart"}>
          <AiOutlineShoppingCart className="" />
            <div className="bg-red-600 text-white font-medium rounded-[50%] w-[20px] h-[20px] grid place-items-center text-sm absolute top-[-10px] right-[-7px]">
              {cart.count}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
