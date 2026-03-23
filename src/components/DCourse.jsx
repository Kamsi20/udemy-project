import React from 'react'

const DCourse = () => {
  return (
    <div>
       {
        Data.map((course) => (
          <Gencard key={course.courseId} course={course} />
        ))
      }
    </div>
  )
}

export default DCourse
