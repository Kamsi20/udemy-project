import React, { useEffect, useState } from 'react'
import { ButtonWidthPurple } from './common/Button'
import Data from '../data/Data'
import Gencard from './common/Gencard'
import { FaStarHalfAlt, FaTag } from "react-icons/fa";
import { BsPatchCheck } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const dataSlice = Data.slice(0, 2)


const CartContent = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(dataSlice)
  }, [])

  const formatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN"
  })
  //  console.log([...Data])

  return (
    <div>
      <div className='lg:w-[1300px] mx-auto m-30 '>
        <h1 className='font-bold text-4xl mx-20'>Shopping Cart</h1>
        <div className='flex'>
          <div className='w-190  gap-5 mt-10  py-5 px-10 mr-10'>


            {/* {
              Data.slice(0, 2).map((course) => (
                <Gencard key={course.courseId} course={course} />
              ))
            } */}
            <div>
              {
                data.map((course, index) => {
                  return <div key={index} className='flex gap-5 mb-3 border-t-1 w-180 border-gray-500 pt-3'>
                    <Link to={"/generativeai"}><div><img src={course.courseImage} alt="course" className='w-40 rounded-xl' /></div></Link>
                    <div className='flex flex-col'>
                      <p> {course.courseName}</p>
                      <p className='my-2'>{course.createdBy}</p>
                      <p className='absolute right-130 flex gap-2'>  {formatter.format(course.coursePrice)} <small><FaTag className='text-purple-600 mt-1.5' /></small></p>
                      <div className='flex gap-4'>
                        <span className="flex items-center gap-1 text-xs bg-purple-600 text-white px-2 py-1 rounded w-20">
                          <BsPatchCheck />
                          <p>Premium</p>
                        </span>
                        <div className='flex gap-1.5'>
                          <p>{course.rate} </p>
                          <p className='flex mt-1.5 text-orange-700 text-xs'><FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt /></p>
                        </div>
                      </div>
                    </div>

                  </div>
                })
              }
            </div>
          

          </div>
          <div className='w-80'>
            <p className='text-xl font-bold mb-3'>Total: {formatter.format(24000)}</p>

           <Link to={'/paymentpage'}> <button className="w-full bg-purple-600 text-white py-2 mt-4 rounded">
              Proceed to Payment
            </button></Link>
            <small className='mx-20'>You wont be charged yet</small>
            <form className='border-t-1 my-5 ' >
              <p className='m-5 '>Promotions</p>
              <input type="text" placeholder='Enter Coupon' className='border-1 px-2 py-1  rounded-md mr-1' />
              <button className="w-20 bg-purple-600 text-white py-1 mt-4 rounded">
                Apply
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartContent
