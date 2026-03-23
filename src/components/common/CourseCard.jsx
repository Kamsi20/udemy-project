import React from 'react'
import course from '../../data/Data'
import { Link } from 'react-router-dom'

const CourseCard = ({course}) => {
  return (
    <div key={course.courseId} className='w-full h-50 bg-blue-400'>
      <div className='flex flex-col justify-between'>
        <h1>{course.courseName}</h1>

        <Link className='text-3xl' to={`/course/${course.courseId}`}> View details</Link>
      </div>
    </div>
  )
}

export default CourseCard

