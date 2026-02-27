import React from 'react'
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='flex flex-col bg-gray-900 text-white gap-10 pt-9 p-3 pl-5 py-5'>
      <div className='lg:w-[1200px] mx-auto flex  justify-between items-start'>
        <div>
          <h2 className='text-xl font-bold mb-4'>About</h2>
          <ul className='font-light'>
            <li>About us </li>
            <li> Careers</li>
            <li>Contact us</li>
            <li>Blog</li>
            <li>investors</li>
          </ul>
        </div>
        <div >
          <h2 className='text-xl font-bold mb-4'>Discover Kamsi</h2>
          <ul className='font-light'>
            <li>Get the app </li>
            <li>Teach on Kamsi</li>
            <li>Plans and Pricing</li>
            <li>Affliate</li>
            <li>Help and support</li>
          </ul>
        </div>
        <div >
          <h2 className='text-xl font-bold mb-4'>Kamsi for business</h2>
          <ul className='font-light'>
            <li>Kamsi Business</li>
          </ul>
        </div>
        <div>
          <h2 className='text-xl font-bold mb-4'>Legal and Accessability</h2>
          <ul className='font-light'>
            <li>Accessability statement</li>
            <li>Privacy Policy</li>
            <li>Sitemap</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
      <div className='lg:w-[1200px] mx-auto flex flex-row justify-between items-start border-t-2 border-gray-500 '>
        <div className='flex    '>
          <Link to={"/"} ><img src='public\loogof.png' alt='img'className='w-45  ' /></Link>
         <small> <p className='font-light flex mt-11'><AiOutlineCopyrightCircle  /> 2026 Kamsi, lnc. </p></small>
          </div>
        <div>
          <small><p className='mt-11'>Cookie settings</p></small>
        </div>
        <div>
          <p className='font-light flex mt-11'><TbWorld />English</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
