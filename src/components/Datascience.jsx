import React from 'react'
import { GoQuestion } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import { ButtonWidthPurples } from './common/Button'
import Gencard from './common/Gencard'
import ind from "/public/8.png"
import indi from "/public/9.png"

const Datascience = () => {
  return (
    <div className='lg:w-[1300px] mx-auto mt-20'>
      <div className='bg-gray-100 p-15'>
        <h1 className='text-5xl font-bold  '>Data Science Courses</h1>
        <p className='pt-10 pr-85'>Data science courses teach an interdisciplinary field focused on extracting knowledge and insights from data. Learn data manipulation, statistical analysis, and machine learning to unlock insights and enhance decision-making and predictive abilities applicable to various fields.</p>

        <div className='flex gap-5 mt-5'>
          <p className='font-light text-sm pr-3 border-r-1 border-gray-400'>
            Number of learners  <br /> 
            <p className='font-bold text-lg'> 8,354,883</p>
          </p>
          <p className='font-light text-sm pr-3 border-r-1 border-gray-400'>
            Number of courses <br />
            <p  className='font-bold text-lg'> 782</p>
          </p>
          <p className=' font-light text-sm pr-3 border-r-1 border-gray-400'>
            Number of hands-on practice <br />
            <p  className='flex font-bold text-lg '>4,856 <GoQuestion className='mt-2 ml-2' /></p>
          </p>
          <p className='font-light text-sm'>
            Average course rating <br />
            <p  className='flex font-bold text-lg'>4.5 <FaStar className='mt-2 ml-2 text-yellow-700' /></p>
          </p>
        </div>

        <div className='flex gap-2 mt-10'>
          <p className='text-sm  font-semibold mt-1'>Related</p>
          <button className='border-1 border-gray-400 rounded-md px-3 py- font-bold  bg-white text-sm'>Development</button>
          <button className='border-1 border-gray-400 rounded-md px-3 py-1 font-bold  bg-white text-sm'>IT &Software</button>
          <button className='border-1 border-gray-400 rounded-md px-3 py-1 font-bold  bg-white text-sm'>Data Science</button>
          <button className='border-1 border-gray-400 rounded-md px-3  py-1 font-bold  bg-white text-sm'>Other IT & Software</button>
        </div>
      </div>
      <div className='p-5 pt-15'>
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
              <p className='text-lg font-semibold mr-6'>Total: N21,800 </p>
              {/* <button className='bg-green-200 p-2 rounded-md text-sm font-semibold'>Special Bundle Price</button> <br /> */}
            </div>

            <ButtonWidthPurples text={"Add all to cart"} />
          </div>
          <div className='flex float-right gap-6 p-4'>
            <Gencard text='Data Analytics, Data Science, & Machine Learning- All in 1' texta='Analytix AI' textb="4.8" textc='N10,900' bg={ind} />
            <  Gencard text='Mastering Data Magic: Power BI + Tableau + SQL, Analytics' texta='ZK Tutorials' textb="4.6" textc='N10,900' bg={indi} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Datascience
