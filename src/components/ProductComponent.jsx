import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.Products);
//   console.log(products);
  const renderList = products ? (
    products.map((elem) => {
      return (
        <Link to={`/products/${elem.id}`}>
          <div
            key={elem.id}
            className="flex flex-col w-[250px] h-[330px]  border border-gray-500"
          >
            <div
              style={{ backgroundImage: `url(${elem.image})` }}
              className="bg-contain bg-center bg-no-repeat w-full h-[50%]"
            ></div>
            <hr />
            <div className="h-[50%] flex flex-col gap-10">
              <div className="font-medium text-xl md:text-xl h-8 overflow-hidden text-center">
                {elem.title}
              </div>
              <div className="flex justify-center gap-4 ">
                <button className="w-[80px] h-[30px] bg-red-300 font-semibold ">
                  {elem.price}$
                </button>
                <div className="">Category: {elem.category}</div>
              </div>
            </div>
          </div>
        </Link>
      );
    })
  ) : (
    <div>....Loading</div>
  );
  return (
    <div className="grid grid-cols-1 place-items-center md:place-items-start md:grid-cols-3 max-w-[1200px] m-auto gap-4">
      {renderList}
    </div>
  );
};

export default ProductComponent;
