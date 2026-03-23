import React from "react"
import { Link } from "react-router-dom"
import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import { BsPatchCheck } from "react-icons/bs"

const Gencard = ({ course }) => {
  if (!course) return null;
  const formatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN"
  })

  return (
    <Link to={`/course/${course.courseId}`}>

      <div className="w-[280px]  hover:shadow-lg transition rounded-lg overflow-hidden ">

        {/* IMAGE */}
        <img
          src={course.courseImage}
          alt={course.courseName}
          className="w-full h-[160px] object-cover"
        />

        {/* CONTENT */}
        <div className="p-3">

          {/* COURSE NAME */}
          <h3 className="font-semibold text-sm line-clamp-2">
            {course.courseName}
          </h3>

          {/* INSTRUCTOR */}
          <p className="text-xs text-gray-500 mt-1">
            {course.createdBy}
          </p>

          {/* RATING */}
          <div className="flex items-center gap-1 text-sm mt-1">

            <span className="text-amber-600 font-semibold">
              {course.rate}
            </span>

            <div className="flex text-amber-500 text-xs">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>

            <span className="text-gray-500 text-xs">
              ({course.courseSold})
            </span>

          </div>

          {/* PRICE */}
          <p className="font-bold mt-2">
            {formatter.format(course.coursePrice)}
          </p>

          {/* BADGES */}
          <div className="flex gap-2 mt-2">

            <span className="flex items-center gap-1 text-xs bg-purple-600 text-white px-2 py-1 rounded">
              <BsPatchCheck />
              Premium
            </span>

            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
              Bestseller
            </span>

          </div>

        </div>

      </div>

    </Link>
  )
}

export default Gencard