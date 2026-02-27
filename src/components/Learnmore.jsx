import React from 'react'
import { ButtonWidthPurp, ButtonWidthPurpl, ButtonWidthPurples, Buttons } from './common/Button'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { BsPatchCheck } from "react-icons/bs";
import { FaTag } from "react-icons/fa6";
import { IoCheckmark } from "react-icons/io5";



const Learnmore = () => {
  return (
    <div className=' lg:w-[1300px] mx-auto  mt-20'>
      <div className='flex bg-gray-100'>
        <div className='w-180 py-20 pl-15 pr-25'>
          <div className='flex gap-3 pb-3'>
            <p className='text-purple-600 font-bold text-lg'> Personal Plan </p>
            <button className='bg-green-100 rounded-md px-2 py-1 text-sm font-semibold flex gap-2 '><FaTag className='mt-1' /> 20% off for the first 1 year(s)</button>

          </div>
          <p className='text-3xl font-semibold pb-10 '>Save 20% on your first year</p>
          <p className='font-light text-lg pb-7'>Go further at work and in life with access to a collection of top-rated courses in tech, business, and more.</p>
          <ButtonWidthPurp text={"Save now"} />
          <p className='py-2 text-sm font-light '>20% off first year of Personal Plan yearly access. Discount offer only valid on Feb 9 – 15, 2026. Existing Personal Plan subscribers do not qualify. Country restrictions apply. Subscription auto-renews at then-current regular yearly pricing after first year unless canceled.</p>
        </div>
        <img src="10.png" alt='img ' className='w-150 float-right items-end' />
      </div>
      <div className='flex gap-40 p-20 text-5xl font-bold'>
        <div>
          <p>26,000+</p>
          <p className='font-light text-sm px-5 py-3'>on-demand courses</p>
        </div>
        <div>
          <p>20,000+</p>
          <p className='font-light text-sm px-5 py-3'>practice exercises</p>
        </div>
        <div>
          <p className='flex'>4.5 <FaStar className='text-amber-500 text-2xl mt-4 ml-3' /></p>
          <p className='font-light text-sm px py-3'> average course rating</p>
        </div>
        <div>
          <p>9,000+</p>
          <p className='font-light text-sm px-5 py-3'>top instructors</p>
        </div>
      </div>
      <div >
        <img src="img.png" />
      </div>
      <div className='flex mt-20 gap-20'>
        <div>
          <img src='11.png' className='w-250' />
        </div>
        <div className='w-200 mt-40 pr-40' >
          <p>Current</p>
          <p className='text-4xl font-bold '>Cutting-edge skills to keep you sharp</p>
          <p className='font-light'>Learn confidently with up-to-date courses covering in-demand topics like development, data science, IT certification, web design, digital marketing, leadership, communication, and more.</p>
        </div>
      </div>

      <div className='flex mt-20 gap-20'>
        <div className='w-200 my-20 p-20' >
          <p>Flexible</p>
          <p className='text-4xl font-bold '>Freedom to explore and discover</p>
          <p className='font-light'>Test drive a new subject, switch between courses, or pick and choose the lessons that best fit your needs. Personal Plan gives you the power to control what and how you learn.</p>
        </div>
        <div>
          <img src='12.png' className='w-250' />
        </div>
      </div>

      <div className='flex mt-20 gap-20'>
        <div>
          <img src='13.png' className='w-250' />
        </div>
        <div className='w-200 mt-40 pr-40' >
          <p>Effective</p>
          <p className='text-4xl font-bold '>Learning designed to help you start doing</p>
          <p className='font-light'>Gain practical knowledge through coding exercises, practice tests and quizzes, plus in-course note taking and Q&A. Once you finish a course, strut your new skills with a certificate of completion.</p>
        </div>
      </div>



      <div className='py-20 p-5'>
        <div className=' w-180'>
          <p className='text-5xl font-semibold '>Get a peek at the collection</p>
          <p className='pt-5  font-light text-lg'>With thousands of our best-rated courses from top Kamsi instructors, Personal Plan is your subscription to success. Explore some of the included content below.</p>
        </div>
        <ul className='flex pt-10 gap-7 pb-2'>
          <li className='font-bold'>Web Development</li>
          <li className='font-semibold'>Data science</li>
          <li className='font-semibold'>IT Certifications</li>
          <li className='font-semibold'>Graphic Design & Illustration</li>
          <li className='font-semibold'>Digital Marketing</li>
          <li className='font-semibold'>Leadership</li>
          <li className='font-semibold'>Communication</li>
        </ul>
        <hr className='pb-5  border-gray-400' />

        <div className='flex pb-5'>
          <div >
            <img src='14.png' alt='img' className='h-160 w-180' />
          </div>
          <div className='grid grid-cols-2' >
            <div className='w-full   h-40   p-10 '>
              <p className='text-lg font-semibold pb-1'>The Complete full-Stack Web Development Bootcamp</p>
              <p className='text-sm font-light pb-1'>Dr Angela Yu, Developer and Lead Instructor</p>
              <p className='text-sm font-light pb-1'>1,553,100 students</p>
              <div className='text-amber-600 flex pb-1 '> <small className='flex items-center gap-1'> 4.7<FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /> <p className='text-black'>(464,994)</p></small></div>
              <Buttons
                text={

                  <span className="flex items-center ">
                    <BsPatchCheck className="text-white font-semibold" />
                    Premium
                  </span>

                }
              />
            </div>
            <div className='w-90  h-40 p-10 '>
              <p className='text-lg font-semibold pb-1'>The Complete Javascript course 2025: From Zero to Expert!</p>
              <p className='text-sm font-light pb-1'>Jonas Schmedtmann</p>
              <p className='text-sm font-light pb-1'>1,073,100 students</p>
              <div className='text-amber-600 flex pb-1 '> <small className='flex items-center gap-1'> 4.7<FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /> <p className='text-black'>(230,794)</p></small></div>
              <Buttons
                text={

                  <span className="flex items-center ">
                    <BsPatchCheck className="text-white font-semibold" />
                    Premium
                  </span>

                }
              />
            </div>
            <div className='w-90  h-40 p-10 '>
              <p className='text-lg font-semibold pb-1'>Angular- The Complete Guide</p>
              <p className='text-sm font-light pb-1'>Maximilian Schwarzmuller</p>
              <p className='text-sm font-light pb-1'>853,100 students</p>
              <div className='text-amber-600 flex pb-1 '> <small className='flex items-center gap-1'> 4.7<FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /> <p className='text-black'>(221,394)</p></small></div>
              <Buttons
                text={

                  <span className="flex items-center ">
                    <BsPatchCheck className="text-white font-semibold" />
                    Premium
                  </span>

                }
              />
            </div>
            <div className='w-90  h-40 p-10 '>
              <p className='text-lg font-semibold pb-1'>The Ultimate React Course 2025: React, Next.js Redux & More</p>
              <p className='text-sm font-light pb-1'>Jonas Schmedtmann</p>
              <p className='text-sm font-light pb-1'>163,100 students</p>
              <div className='text-amber-600 flex pb-1 '> <small className='flex items-center gap-1'> 4.7<FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /> <p className='text-black'>(32,994)</p></small></div>
              <Buttons
                text={

                  <span className="flex items-center ">
                    <BsPatchCheck className="text-white font-semibold" />
                    Premium
                  </span>

                }
              />
            </div>
            <div className='w-80  h-40   p-10 '>
              <p className='text-lg font-semibold pb-1'> Complete Web Development Course</p>
              <p className='text-sm font-light pb-1'>Hitesh Cloudhary</p>
              <p className='text-sm font-light pb-1'>70,100 students</p>
              <div className='text-amber-600 flex pb-1 '> <small className='flex items-center gap-1'> 4.6<FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /> <p className='text-black'>(23,994)</p></small></div>
              <Buttons
                text={

                  <span className="flex items-center ">
                    <BsPatchCheck className="text-white font-semibold" />
                    Premium
                  </span>

                }
              />
            </div>
            <div className='w-90  h-40 p-10 '>
              <p className='text-lg font-semibold pb-1'> Docker & Kubernetes: The Practical Guide</p>
              <p className='text-sm font-light pb-1'>Academind by Maxiwilian Schwarzmuller, Maxiwilian Schwarzmuller</p>
              <p className='text-sm font-light pb-1'>255,100 students</p>
              <div className='text-amber-600 flex pb-1 '> <small className='flex items-center gap-1'> 4.6<FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /> <p className='text-black'>(45  ,994)</p></small></div>
              <Buttons
                text={

                  <span className="flex items-center ">
                    <BsPatchCheck className="text-white font-semibold" />
                    Premium
                  </span>

                }
              />
            </div>
            <hr className='mt-15  border-gray-300' />
            <hr className='mt-15  border-gray-300' />

            <p className='text-xl font-semibold px-10 '>Start exploring the collection today.</p>
            <p className='px-10' onClick={()=>alert("Welcome to your course!")}><ButtonWidthPurp text={"Start Subscription"} /></p>

          </div>
        </div>
      </div>
      <div className='bg-gray-200  h-170'>
        <p className='px-100 py-10 text-3xl font-semibold '>Choose a plan that works for you</p>
        <div className='flex gap-10'>

          <div className='w-85 h-120 border-2 bg-white rounded-lg border-purple-800 ml-60  mb-20'>
            <p className='bg-purple-800 text-white pl-30 py-1'>  <IoCheckmark className='float-start  mt-1 mr-1 bg-white text-purple-700 rounded-full' />Best Value</p>
            <p className='pt-7 px-25 text-xl font-semibold'>Personal Plan</p>
            <small><p className=' font-light py-3 pl-20'>Streamline your career goals</p></small>
            <button className='bg-green-100 rounded-md px-2 py-1 text-sm font-semibold flex gap-2 ml-15'><FaTag className='mt-1' /> 20% off for the first 1 year(s)</button>
            <p className='font-light px-12 py-3'>starting at <del>N7,500</del> N6,000 / month</p>
            <small className='font-light px-12 '>Billed monthly or annually. Cancel anytime.</small>

            <ul className='font-light text-sm px-10 py-3'>
              <IoCheckmark className='float-start  mt-1 mr-5' /><li className='mb-3  px-5'>26,000+ professional and personal development courses</li>
              <li className='mb-3'>  <IoCheckmark className='float-start  mt-1 mr-5' />4.5/5 average rating</li>
              <li className='mb-3'>  <IoCheckmark className='float-start  mt-1 mr-5' />20,000+ practice exercises</li>
              <li className='mb-3'>  <IoCheckmark className='float-start  mt-1 mr-5' />9,000+ top instuctors</li>
            </ul>
            <div className='mx-10 'onClick={()=>alert("Congratulations on your Subscribtion!")}><ButtonWidthPurpl text={"Start Subscription"} /></div>
          </div>
          <div className='h-110 w-85 bg-white mt-9 rounded-lg '>
            <p className='text-2xl font-semibold px-10 py-5'>Buy individual courses</p>
            <small className='px-30 '>Learn anything</small>
            <p className='px-22   '>N10,900 - N129,900</p>
            <small className='font-light px-27'>One time purchase</small>

          <ul  className='mb-3  px-10 text-sm font-light pt-10 ' >
             <IoCheckmark className='float-start  mt-1 mr-5 ' /> <li className='pb-5 px-5'>250,000+ professional and personal development courses</li>
             <li >  <IoCheckmark className='float-start  mt-1 mr-5' />Pay as you go</li>
          </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Learnmore
