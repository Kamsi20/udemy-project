import { Link } from "react-router-dom"

import   Gencard  from "./common/Gencard"
import Data from "../data/Data"



const DisplayCourse = () => {
  console.log(Data)
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 p-10">
      {
        Data.map((course) => (
          
            
           <Gencard key={course.courseId} course={course}  />
            
         


          

        ))
      }

    </div>
  )
}

export default DisplayCourse
