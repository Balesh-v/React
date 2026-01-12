

import MidLevel from "./MidLevel";
import TopLevel from "./TopLevel";

const Card = () => {
  return (
    <>
       <div className='Parent'>
         <TopLevel/>
         <MidLevel/>
       </div>
    </>
  )
}

export default Card
