import React from 'react'
import { ButtonWidthPurples } from './common/Button'
import { Link } from 'react-router-dom'
import india from "/public/web.png"
import indiaa from "/public/web2.png"
import Gencard from './common/Gencard'
import { IoCheckmark } from "react-icons/io5";

const Generativeai = () => {
  return (
    <div className=' lg:w-[1300px] mx-auto m-5 pt-25' >
      <div className=''>
        <h1 className='text-2xl font-semibold mb-3 ml-10 '>Generative AI (Gen AI) Courses</h1>
        <p className='mb-15 ml-10'>Generative AI (GenAI) relates to  <Link className='text-purple-700 font-bold ' to={"https://www.udemy.com/courses/business/"}>IT & Software, Businesses</Link></p>

      </div>
      <div className=' flex justify-between  border-1 border-gray-400 p-8 rounded-md'>
        <div>
          <h2 className='text-xl font-semibold w-100'>Looking to advance your skills in Generative AI (GenAI)? We've got you.</h2> <br />
          <p className='font-semilight text-lg pr-10'>Get everything you need to reach your goals in one convenient bundle.</p><br />
          <ul className='font-light text-lg'>

            <li className='mb-3 flex'>  <IoCheckmark className='float-start  mt-1 mr-1' />Top-rated courses</li>
            <li className='mb-3'>  <IoCheckmark className='float-start  mt-1 mr-1' />Popular with learners just like you</li>
            <li className='mb-3'> <IoCheckmark className='float-start  mt-1 mr-1' />Guidance from real-world experts</li>
          </ul>
          <div className='flex m-3'>
            <p className='text-lg font-semibold mr-6'>Total: N19,800 </p>
            <button className='bg-green-200 p-2 rounded-md text-sm font-semibold'>Special Bundle Price</button> <br />
          </div>

          <ButtonWidthPurples text={"Add all to cart"} />
        </div>
        <div className='flex float-right gap-6 p-4'>
          <Gencard text='Complete web development course' texta='Hitesh Cloudhary' textb="4.6" textc='N10,900' bg={india} />
          <  Gencard text='Complete web development course' texta='Hitesh Cloudhary Piyush Garg' textb="4.6" textc='N10,900' bg={indiaa} />
        </div>
      </div>
    </div>
  )
}

export default Generativeai
