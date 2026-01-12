import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { HiOutlineDotsVertical } from "react-icons/hi";

const TopLevel = () => {

   let name = "balesh varshney"


  return (
    <>
      <div className="Top">
        <div className="ar">
          <GoArrowLeft />
          <HiOutlineDotsVertical />
        </div>
        <div className="imgs">
          <div className="images">
            <img
              src="https://images.unsplash.com/photo-1693994866608-1159b9e28eb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHdoYXRzYXBwJTIwZHB8ZW58MHx8MHx8fDA%3D"
              alt="user"
            />
          </div>
          <div className="details">
            <h1>{name}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopLevel;
