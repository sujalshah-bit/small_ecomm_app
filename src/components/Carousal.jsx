import React, { useState } from "react";
import { slide } from "../Slide";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
const Carousal = () => {
  const [img, setImg] = useState(0);
//   console.log("url: here ", slide[0].url);
  const nextSlide = () => {
    if (img === slide.length - 1) {
      setImg(0);
    } else {
      setImg(img + 1);
    }
  };
  const prevSlide = () => {
    if (img === 0) {
      setImg(slide.length - 1);
    } else {
      setImg(img - 1);
    }
  };
  return (
    <div className="my-10  w-full h-[55vh] group p-2">
      <div
        style={{ backgroundImage: `url(${slide[img].url})` }}
        className="w-full max-w-[1200px] m-auto h-[100%] relative bg-cover bg-center bg-no-repeat duration-300 rounded-2xl"
      >
        <AiOutlineArrowRight
          size={30}
          className="absolute bg-[#00000048] top-[calc(100%-50%)] right-1 "
          onClick={nextSlide}
          fill="white"
        />
        <AiOutlineArrowLeft
          size={30}
          className="absolute bg-[#00000048] top-[calc(100%-50%)]"
          onClick={prevSlide}
          fill="white"
        />
      </div>
    </div>
  );
};

export default Carousal;
