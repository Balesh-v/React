import { GoArrowLeft } from "react-icons/go";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaTwitter } from "react-icons/fa";
import "./App.css"

const App = () => {
  return (
    <>
       <div className='Parent'>
          <div className='Top'>
            <GoArrowLeft />
            <div className="imgs">
               <div className="images">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr7jOLF5S7OAYcHjCxbxUgSNtD-9FQ0-wRkuzTdCuR8quKueYxVGiXs4M&s" alt="user"/>
               </div>
               <div className="details">
                <h1>Your Name</h1>
               </div>
            </div>
            <HiOutlineDotsVertical />
          </div>

          <div className="mid">
            <div>
              <FaTwitter />
            </div>
          </div>
       </div>
    </>
  )
}

export default App
