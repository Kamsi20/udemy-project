import React from 'react'
import { Buttons, ButtonBlue } from './Button'
import { BsPatchCheck } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

export const Gencard = ({ bg, text = "comptia", texta = "", textb = "", textc = "", textd = "" }) => {


  const style = {
    background: `url(${bg})`,
    // backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

  }

  return (
    <div className='  h-110 w-auto  text-black  '>
      <div className='w-80 h-50  p-3   ' style={style}>
        <div className='mt-50 font-semibold ' > {text} <br /><div className='font-extralight text-sm '><small>{texta}</small> <div className='text-amber-600 flex'> {textb}<small className='flex items-center'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /></small></div>
          <div className='text-lg font-semibold pb-3'>{textc}</div>
          <small>
            <div className='flex gap-3'>
            <Buttons 
              text={

                <span className="flex items-center ">
                  <BsPatchCheck className="text-white font-semibold" />
                  Premium
                </span>

              }
            />

            <div >
              <ButtonBlue 
                text={"Best seller"}
              />
            </div>
          </div>
          </small>
        </div></div>

      </div>
    </div>
  )
}

export default Gencard
