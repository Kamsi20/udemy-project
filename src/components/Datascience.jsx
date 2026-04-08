import React from 'react'
import { GoQuestion } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import { ButtonWidthPurp, ButtonWidthPurpl, ButtonWidthPurple, ButtonWidthPurples } from './common/Button'
import Gencard from './common/Gencard'
import ind from "/public/8.png"
import indi from "/public/9.png"
import india from "/public/28.png"
import indiz from "/public/29.png"
import { Link } from 'react-router-dom';
import Data from '../data/Data';

const Datascience = () => {
  return (
    <div className='lg:w-[1300px] mx-auto mt-20'>
      <div className='bg-gray-100 p-15'>
        <h1 className='text-5xl font-bold  '>Data Science Courses</h1>
        <p className='pt-10 lg:pr-85'>Data science courses teach an interdisciplinary field focused on extracting knowledge and insights from data. Learn data manipulation, statistical analysis, and machine learning to unlock insights and enhance decision-making and predictive abilities applicable to various fields.</p>

        <div className='flex lg:flex-row flex-col gap-5 mt-5'>
          <p className='font-light text-sm pr-3 lg:border-r-1 border-gray-400'>
            Number of learners  <br /> 
            <p className='font-bold text-lg'> 8,354,883</p>
          </p>
          <p className='font-light text-sm pr-3 lg:border-r-1 border-gray-400'>
            Number of courses <br />
            <p  className='font-bold text-lg'> 782</p>
          </p>
          <p className=' font-light text-sm pr-3 lg:border-r-1 border-gray-400'>
            Number of hands-on practice <br />
            <p  className='flex font-bold text-lg '>4,856 <GoQuestion className='mt-2 ml-2' /></p>
          </p>
          <p className='font-light text-sm'>
            Average course rating <br />
            <p  className='flex font-bold text-lg'>4.5 <FaStar className='mt-2 ml-2 text-yellow-700' /></p>
          </p>
        </div>

        <div className='flex lg:flex-row flex-col gap-2 mt-10'>
          <p className='text-sm  font-semibold mt-1'>Related</p>
         <Link to={"/development"}> <button className='border-1 border-gray-400 rounded-md px-3 py-1 font-bold  bg-white text-sm hover:bg-gray-200'>Development</button></Link>
         <Link to={"/itcertifications"}> <button  className='border-1 border-gray-400 rounded-md px-3 py-1 font-bold  bg-white text-sm hover:bg-gray-200'>IT &Software</button></Link>
         <Link to={"/datascience"}> <button className='border-1 border-gray-400 rounded-md px-3 py-1 font-bold  bg-white text-sm hover:bg-gray-200'>Data Science</button></Link>
         <Link to={"/otherit"}> <button className='border-1 border-gray-400 rounded-md px-3  py-1 font-bold  bg-white text-sm hover:bg-gray-200'> IT & Software</button></Link>
        </div>
      </div>
      <div className='p-5 pt-15'>
        <div className=' flex lg:flex-row flex-col justify-between  border-1 border-gray-400 p-8 rounded-md'>
          <div>
            <h2 className='text-xl font-semibold lg:w-100'>Looking to advance your skills in Generative AI (GenAI)? We've got you.</h2> <br />
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

           <div className='hidden md:block'> <ButtonWidthPurples text={"Add all to cart"} onclick={()=> alert('Added to Cart!')}/></div>
           <div className='md:hidden ml-5'><ButtonWidthPurp text={"Add all to cart"} onclick={() => alert('Added to Cart!')}/></div>
          </div>
          <div className='flex lg:flex-row flex-col float-right gap-6 p-4 mt-10'>
            {
            Data.slice( 6,8).map((course) => (
              <Gencard key={course.courseId} course={course} />
            ))
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Datascience






export const LearnAI =() =>{
  return (
    <div>
       <div className='lg:w-[1300px] mx-auto mt-20'>
      <div className='bg-gray-100 p-15'>
        <h1 className='lg:text-5xl font-bold text-2xl  '>Artificial Intelligence (AI) Courses</h1>
        <p className='pt-10 lg:pr-85 lg:justify-center'>AI courses teach machine simulation of human intelligence processes. Exploring AI is crucial for building smart systems and applications and is important for developers, researchers, and anyone interested in cutting-edge technology.</p>

        <div className='flex lg:flex-row flex-col gap-5 mt-5'>
          <p className='font-light text-sm pr-3 lg:border-r-1 border-gray-400'>
            Number of learners  <br /> 
            <p className='font-bold text-lg'> 5,954,883</p>
          </p>
          <p className='font-light text-sm pr-3 lg:border-r-1 border-gray-400'>
            Number of courses <br />
            <p  className='font-bold text-lg'> 2,782</p>
          </p>
          <p className=' font-light text-sm pr-3 lg:border-r-1 border-gray-400'>
            Number of hands-on practice <br />
            <p  className='flex font-bold text-lg '>4,856 <GoQuestion className='mt-2 ml-2' /></p>
          </p>
          <p className='font-light text-sm'>
            Average course rating <br />
            <p  className='flex font-bold text-lg'>4.5 <FaStar className='mt-2 ml-2 text-yellow-700' /></p>
          </p>
        </div>

        <div className='flex  lg:flex-row flex-col  gap-2 mt-10'>
          <p className='text-sm  font-semibold mt-1'>Related</p>
          <button className='border-1 border-gray-400 rounded-md px-3 py-1 w-50 font-bold  bg-white text-sm'>Development</button>
          <button className='border-1 border-gray-400 rounded-md px-3 py-1 w-50 font-bold  bg-white text-sm hover:bg-gray-200'>IT &Software</button>
          <button className='border-1 border-gray-400 rounded-md px-3 py-1 font-bold w-50 bg-white text-sm'>Data Science</button>
          <button className='border-1 border-gray-400 rounded-md px-3  py-1 font-bold w-50 bg-white text-sm'>Other IT & Software</button>
        </div>
      </div>
      <div className='p-5 pt-15'>
        <div className=' flex lg:flex-row flex-col justify-between  border-1 border-gray-400 p-8 rounded-md'>
          <div>
            <h2 className='text-xl font-semibold lg:w-100'>Looking to advance your skills in Generative AI (GenAI)? We've got you.</h2> <br />
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

           <div className="hidden md:block"> <ButtonWidthPurples text={"Add all to cart"} onclick={()=> alert('Added to Cart!')}/></div>
           <div className='md:hidden ml-5'><ButtonWidthPurpl text={"Add all to cart"} onclick={() => alert('Added to Cart!')}/></div>
          </div>
          <div className='flex lg:flex-row flex-col float-right gap-6 p-4 mt-10'>
           {
            Data.slice(8, 10).map((course) => (
              <Gencard key={course.courseId} course={course} />
            ))
          }
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

