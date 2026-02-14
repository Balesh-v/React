import React from "react";

const Nav = () => {
  return (
    <div className="flex justify-between items-center h-16 mt-5 px-10">
      <div className="bg-black text-white px-10 py-2 rounded-full tracking-[5px]">
        <h3>TARGET AUDIENCE</h3>
      </div>
      <div className="bg-gray-300 text-black px-10 py-2 rounded-full tracking-[5px]">
        <h3>DIGITAL BANKING PLATEFORM</h3>
      </div>
    </div>
  );
};

export default Nav;
