
import { GoArrowLeft } from "react-icons/go";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Card = (props) => {

  return (
    <>
      <div className="Parent">
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
                    <h1>{props.datas}</h1>
                    <p>{props.Role}</p>
                  </div>
                </div>
              </div>
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
      </div>
    </>
  );
};

export default Card;
