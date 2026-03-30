import React from 'react'
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='flex  bg-gray-900 text-white lg:gap-10 pt-9 lg:p-3 lg:pl-5 lg:py-5'>
      <div className='lg:w-[1200px] mx-auto flex  lg:justify-between lg:items-start lg:gap-1 gap-7'>
        <div >
          <h2 className='lg:text-xl  font-bold mb-4'>About</h2>
          <ul className='font-light'>
           <Link to={"/aboutus"}> <li>About us </li></Link>
           <Link to={"/contactus"}> <li>Contact us</li></Link>

          </ul>
        </div>
        <div >
          <h2 className='lg:text-xl font-bold mb-4'>Discover Kamsi</h2>
          <ul className='font-light'>
           <Link to={'/teachonkamsi'}> <li>Teach on Kamsi</li></Link>
           <Link to={"/helpandsupport"} > <li>Help and support</li></Link>
          </ul>
        </div>
       
        <div>
          <h2 className='lg:text-xl font-bold mb-4'>Legal and Accessability</h2>
          <ul className='font-light'>
           <Link to={"/accessabilitystatement"}> <li>Accessability statement</li></Link>
           <Link to={"/privacypolicy"}> <li>Privacy Policy</li></Link>
            <Link to={"/sitemap"}><li>Sitemap</li></Link>
            <Link to={"termsandconditions"}><li>Terms</li></Link>
          </ul>
        </div>
      </div>
      {/* <div className='lg:w-[1200px] mx-auto flex flex-row justify-between items-start border-t-2 border-gray-500 '>
        <div className='flex    '>
          <Link to={"/"} ><img src='loogof.png' alt='img' className='w-45  ' /></Link>
          <small> <p className='font-light flex mt-11'><AiOutlineCopyrightCircle /> 2026 Kamsi, lnc. </p></small>
        </div>
        <div>
          <small><p className='mt-11'>Cookie settings</p></small>
        </div>
        <div>
          <p className='font-light flex mt-11'><TbWorld />English</p>
        </div>
      </div> */}
    </div>
  )
}

export default Footer
