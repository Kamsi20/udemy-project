import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Data from '../data/Data'
import Gencard from './common/Gencard'
import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import PrivateRoute from './PrivateRoute'
import { AuthContext } from '../context/FormControlContext'
import { Button, ButtonOutline, ButtonWidthPurples } from './common/Button'
import { ToastContainer } from 'react-toastify'


const SingleCourse = () => {

  const notify = () => toast("Wow so easy!");

  const { user, handleLogout } = useContext(AuthContext)

  const { id } = useParams()

  const course = Data.find((course) => course.courseId === id)

  if (!course) {
    return <h1>Course not found</h1>
  }

  return (
    <div className='  lg:w-[1300px] mx-auto mt-25'>

      {
        user ? <div>
          <div className="mt-25">



            <div className="relative h-80 bg-black text-white p-10">

              <h1 className="text-3xl font-bold mt-5">{course.courseName}</h1>
              <p className="max-w-2xl my-5">{course.courseDesc}</p>
              <div className='flex gap-10 max-w-2xl mt-15'>
                <p className=""> Created by {course.createdBy} </p>
                <p className=' flex text-purple-300'>{course.rate}  <div className="flex text-amber-500 text-xs mt-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div></p>
              </div>

              <div className="absolute right-10 top-10 w-[320px]">

                <div className="sticky top-24 hidden md:block bg-white text-black shadow-md border p-5 rounded-3xl">

                  <img
                    src={course.courseImage}
                    alt={course.courseName}
                    className="w-full h-40 object-cover rounded"
                  />

                  <h2 className="text font-bold mt-4">
                    {course.courseName}
                  </h2>
                  <h3 className='font- mx-25'>₦{course.coursePrice}</h3>
                 <Link to={"/cartcontent"}> <button className="w-full bg-purple-600 text-white py-2 mt-4 rounded">
                    Add to cart
                  </button></Link>

                 <Link to={"/paymentpage"} > <button className="w-full border py-2 mt-2 rounded">
                    Buy now
                  </button></Link>

                  <p className="text-sm text-gray-500 text-center mt-3">
                    30-Day Money-Back Guarantee
                  </p>

                </div>

              </div>

            </div>
          </div>

          <div className="lg:w-220">


            <div className="border-1 border-gray-300 p-6 mt-10">
              <h2 className="text-xl font-semibold mb-4">
                What you'll learn
              </h2>

              <div className="grid grid-cols-2 gap-4">
                {course.whatYouWillLearn.map((item, index) => (
                  <p key={index}>✔ {item}</p>
                ))}
              </div>
            </div>



            <div className="border-1 border-gray-300  p-6 mt-10">
              <h2 className="text-xl font-semibold mb-4">
                Requirements
              </h2>

              {course.requirements.map((req, index) => (
                <p key={index}>• {req}</p>
              ))}
            </div>

            <div className="border-1 border-gray-300  p-6 mt-10">
              <h2 className="text-xl font-semibold mb-4">
                This Course Includes
              </h2>

              {course.thisCourseIncludes.map((thi, index) => (
                <p key={index}>• {thi}</p>
              ))}
            </div>




            <div className="border-1 border-gray-500 p-6 mt-10">
              <h2 className="text-xl font-semibold mb-4">
                Course Content
              </h2>

              {course.courseContent.map((content, index) => (
                <div key={index} className="border-1 border-gray-300   p-3">
                  <h3 className="font-semibold bg-gray-300 h-full py-3 px-7 rounded-2xl">{content.sectionTitle}</h3>

                  {content.lectures?.map((lecture, i) => (
                    <p key={i} className="text-gray-600 ml-4">
                      • {lecture}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div className="border-1 border-gray-300  p-6 mt-10 mb-5">
              <h2 className="text-xl font-semibold mb-4 ">
                Who this course is for
              </h2>

              {course.whoCanTakeTheCourse.map((person, index) => (
                <p key={index}> <br/>  • {person}</p>
              ))}
            </div>

          </div>

        </div> : <div>
          <button className='w-100 h-50 bg-purpe-300 rounded-3xl ml-90' onClick={notify}><p className='text-lg font-bold mb-10'>you must Login!</p> <Link to={"/login"} ><ButtonWidthPurples text={"To login page"}/></Link></button>
          <ToastContainer />
        </div>
      }


    </div>

  )
}

export default SingleCourse