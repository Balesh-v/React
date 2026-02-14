import React from "react";

const Card = ({ img, text, buttonText , color }) => {
  return (
    <div className="w-60 h-105  rounded-4xl overflow-hidden relative">
      <div className="bg-fink-500 w-full h-80 object-cover opeci  ">
        <img
          src={img}
          alt=""
            // className="w-full h-full object-cover  "
         
        />
      </div>

      <div className="absolute bottom-0 bg-opacity-50 w-full p-8 ">
        <p className="text-white  font-bold text-1xl text-shadow-black text-shadow-lg/30 ">
         {text}
        </p>
        <button style={{ backgroundColor: color }} className=" text-white font-bold py-2 px-4 mt-10  rounded">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
