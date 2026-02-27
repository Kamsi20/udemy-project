
import { useEffect } from "react"
import Card from "../common/Card"
import heroImage from "/public/24.png"
import heroImage1 from "/public/25.png"
import heroImage2 from "/public/26.png"
import { Link } from "react-router-dom"
import ScrollReveal from "scrollreveal";

const Learn  = () => {
 useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      distance: "60px",
      duration: 3000,
      easing: "ease-in-out",
      origin: "bottom",
      interval: 200,
      reset: false, // animation happens once
    });
  }, []);
  return (
    <div className='lg:w-[1300px] mx-auto grid grid-cols-4 h-100 p-10 gap-5 reveal'>
      <div className='col-span-1'>
        <h1 className="mt-30 font-semibold text-2xl">Learn essential career and life skills</h1>
        <p className="font-light">Kamsi helps you build in-demand skills fast and advance your career in a changing job market</p>
      </div>
      <div className='col-span-3'>
        <div className="flex justify-center items-center gap-5 ">
           <Link to={"generativeai"}> <Card text="Generative AI" bg={heroImage }/></Link>
            <Link to={"itcertifications"} ><Card text="IT certifications" bg={heroImage1}/></Link>
            <Link to={"dataScience"} ><Card text="Data Science" bg={heroImage2}/></Link>
        </div>
      </div>
      
    </div>
  )
}

export default Learn 
