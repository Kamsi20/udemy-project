import React from 'react'
import { MdOutlinePeopleOutline } from "react-icons/md";

export const ComptiaCard = ({ bg, text = "", texta = "", textb = "", }) => {

  const style = {
    background: `url(${bg})`,
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
     backgroundSize: "70px", 
   
    

  }

  return (
    <div className='  border-gray-300 border-1 w-90 h-35' >

      <div style={style}className='m-5'>
        
        <div className=' '>
          <p className='font-semibold pb-2 w-50'>{text}</p>
          <p className='font-light pb-2 flex text-sm gap-2'><MdOutlinePeopleOutline className='text-lg mt-1' />{texta}</p>
        <small>  <p className='font-extralight pb-2 text-xs w-65'>{textb}</p></small>
        </div>
      </div>
    </div>
  )
}

export default ComptiaCard
