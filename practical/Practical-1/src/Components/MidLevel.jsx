import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const MidLevel = () => {
  return (
    <>
      <div className="mid">
        <div className="tag">
          <FaTwitter />
          <FaYoutube />
          <FaFacebookF />
          <FaInstagram />
        </div>

        <div className="btn">
          <button>Subscribe</button>
          <button>Message</button>
        </div>
      </div>
    </>
  );
};

export default MidLevel;
