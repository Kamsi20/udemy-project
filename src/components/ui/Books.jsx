import React, { useEffect } from 'react'
import { ButtonOutline } from '../common/Button'
import sss from "/public/sss.png"
import ScrollReveal from "scrollreveal";
import { Link } from 'react-router-dom';

const Books = () => {

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
    <div className=" lg:w-[1300px] mx-auto  p-10   flex justify-between items-center  h-150 reveal">
      <div className="grid grid-cols-3 lg:gap-30 gap-55  mb-10">
        <div className='lg:w-80 w-55'>
          <p className='lg:text-3xl text-xl font-semibold '> Get the 2026 Global Learning & Skills Trends Report</p>
          <p className='text-md  font-extralight mt-5 mb-5'>If you or your organization are looking for help navigating change and AI transformation, you’ll find a roadmap for action in our popular annual report.</p>
          <Link to={"download"}><ButtonOutline text={"Download now"} /></Link>
        </div>
        <div className='lg:w-150 w-45 lg:mt-1 mt-15 '>
          <img src={sss} alt='ig' />
        </div>
      </div>
    </div>
  )
}

export default Books
