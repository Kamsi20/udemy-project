import React, { useEffect } from 'react'
import { MdOutlinePeopleOutline } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa6";
import ComptiaCard from './common/ComptiaCard';
import tia from "/public/15.png"
import sec from "/public/16.png"
import net from "/public/17.png"
import ScrollReveal from "scrollreveal";
import { FaUsers } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoCheckmark } from 'react-icons/io5';
import { ButtonWidthPurpl, ButtonWidthPurples } from './common/Button';
import Gencard from './common/Gencard';
import Data from '../data/Data'


const CompTia = () => {
  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      distance: "60px",
      duration: 1200,
      easing: "ease-in-out",
      origin: "bottom",
      interval: 200,
      reset: false, // animation happens once
    });
  }, []);


  return (
    <div className='lg:w-[1300px] mx-auto reveal mt-20 mb-20'>
      <div className='bg-gray-100 lg:px-10 px-9 py-10 '>
        <div className='flex '>
          <p className='text-purple-900 font-bold flex lg:pr-4'>Certification preparation  <small><FaGreaterThan className='text-gray-400 font-light mt-1 text-sm pl-2' /></small></p>
          <p className='font-bold text-sm'>CompTia Certifications</p>
        </div>
        <h1 className='lg:text-4xl text-3xl font-bold pt-10'>CompTia Certification Courses</h1>
        < div className=' flex font-light gap-3 text-sm py-4'>
          <p className=' border-r-1 border-gray-400 flex gap-2 lg:pr-3'><MdOutlinePeopleOutline className='text-lg' /> 4,751,564 Learners </p>
          <p>Prapare for your certifications with these courses.</p>
        
        </div >
        <p className='font-light mt-10 lg:w-200'>
          CompTIA (Computing Technology Industry Association) is a recognized provider of IT certifications, offering a wide range of certifications suitable for various levels of expertise. CompTIA certifications such as A+ and ITF+ are widely respected across the IT industry and provide a solid foundation for those pursuing various IT career paths.
        </p>
      </div>
      <div className='py-5 px-10'>
        <div className=' mt-5'>
          <p className='text-2xl font-semibold pb-2'>In Demand Certifications</p>
          <p className='font-light pb-9'>Dive into Top Certifications that learners on Udemy are preparing for</p>
        </div>
        <div className='flex lg:flex-row flex-col gap-5'>
          <Link to={'/comptiacourse'}><ComptiaCard text='CompTIA A+ Course Cerfification' texta='1,378,929 learners ' bg={tia} /></Link>
          <Link to={'/comptiasecurity'}><ComptiaCard text='CompTIA Security+ Certification ' texta='1,298,900 learners' bg={sec} /></Link>
          <Link to={'/comptiacourse'}><ComptiaCard text='CompTIA Network+ Certification' texta='938,000 learners' bg={net} /></Link>
          <Link to={'/comptiasecurity'}><ComptiaCard text='Comptia CySA + ce Certifiation' texta='297,000 learners' bg={net} /></Link>
        </div>
      </div>

      <div className=' py-5 px-10'>
        <div className='mt-5'>
          <p className='text-2xl font-semibold pb-2'>Browse CompTIA Certifications by Skill</p>
          <p className='font-light pb-9'>Get Certified for in-demand skills through our catalog of certification preparation courses</p>
        </div>
        <div className='flex lg:flex-row flex-col gap-3  '>
          <ComptiaCard text='Cloud Certification' texta='18,453,908 learners' textb='Gain a solid foundation in cloud concepts, architecture, and services with a cloud certificatio...' />
          <ComptiaCard text='Cybersecurity Certification' texta='6,938,383 lesrners' textb="Prove your cybersecurity expertize with Kamsi's Cybersecurity Certiification. Learn threat analysis,..." />
          <ComptiaCard text='Networking Certification' texta='5,998,983 learners' textb="Design and manage network systems with Kamsi's Networking  Certification. Top courses cover..." />
          <ComptiaCard text='Project Management Certification' texta='4,632,435 learners' textb="Plan, execute, and oversee project effective on Kamsi's Project Management Certification" />
        </div>
      </div>
    </div>
  )
}

export default CompTia



export const ComptiaCourse = () => {
  return (
    <div className=' lg:w-[1300px] mx-auto m-5 pt-25' >
      <div className='flex lg:flex-row flex-col gap-10 ml-7 p-5'>
        <img src="/public/15.png" alt="" className='lg:h-50 lg:w-50 w-30' />
        <div>
          <h1 className='text-2xl font-semibold mb-3 ml-1 '>CompTIA A+ Certification Courses</h1>
          <p className='mb-5 ml-1 flex'><FaUsers className='mt-1 mr-2' /> 1,334,499 Learners</p>
          <p className='lg:w-240'>CompTIA A+ earners who certified between January 1993 and December 31, 2010, have an A+ considered good-for-life (GFL). It does not expire and does not have CE requirements. Earners of the CompTIA A+ certification have validated skills in hardware repair and configuration, PC and peripheral troubleshooting, Windows operating system administration, and user support.</p>
        </div>

      </div>
      <div className=' flex lg:flex-row flex-col  border-1 border-gray-400 p-8 rounded-md mt-8'>
        <div>
          <h2 className='text-xl font-semibold w-100'>Looking to earn a CompTIA A+ certification? We’ve got you covered.</h2> <br />
          <p className='font-semilight text-lg pr-10'>Get everything you need to reach your goals in one convenient bundle.</p><br />
          <ul className='font-light text-lg'>

            <li className='mb-3 flex'>  <IoCheckmark className='float-start  mt-1 mr-1' />Top-rated course  catered to exam requirements</li>
            <li className='mb-3'>  <IoCheckmark className='float-start  mt-1 mr-1' />Collection of practice tests that mimic the exam
            </li>
            <li className='mb-3'> <IoCheckmark className='float-start  mt-1 mr-1' />Expert guidance from a world-class instructor</li>
          </ul>
          <div className='flex m-3'>
            <p className='text-lg font-semibold mr-6'>Total: N21,800 </p>
            <button className='bg-green-200 p-2 rounded-md text-sm font-semibold'>Special Bundle Price</button> <br />
          </div>

          <div className='hidden md:block'><ButtonWidthPurples text={"Add all to cart"} onclick={() => alert('Added to Cart!')} /></div>
         <div className='md:hidden ml-5'> <ButtonWidthPurpl text={"Add all to cart"} onclick={() => alert('Added to Cart!')} /></div>
        </div>
        <div className='flex lg:flex-row flex-col float-right gap-6 p-4'>
          {
            Data.slice(10, 12).map((course) => (
              <Gencard key={course.courseId} course={course} />
            ))
          }
        </div>
      </div>
    </div>
  )
}


export const Comptiasecurity = () => {
  return (
    <div className=' lg:w-[1300px] mx-auto m-5 pt-25' >
      <div className='flex  lg:flex-row flex-col  gap-10 ml-7'>
        <img src="/public/16.png" alt="" className='lg:h-50 lg:w-50 w-30 ' />
        <div>
          <h1 className='text-2xl font-semibold mb-3 ml-1 '>CompTIA Security+ Certification Courses</h1>
          <p className='mb-5 ml-1 flex'><FaUsers className='mt-1 mr-2' /> 1,334,499 Learners</p>
          <p className='lg:w-240'>CompTIA Security+ earners who certified prior to January 1, 2011, have a Security+ considered good-for-life (GFL). It does not expire and does not have CE requirements. Earners of the CompTIA Security+ GFL understand network and data security principles that would help them build a general awareness of security threats and to understand basic principles of securing a network.</p>
        </div>

      </div>
      <div className=' flex  lg:flex-row flex-col   border-1 border-gray-400 p-8 rounded-md mt-8'>
        <div className='mb-20'>
          <h2 className='text-xl font-semibold w-100'>Looking to earn a CompTIA Security+ certification? We’ve got you covered.</h2> <br />
          <p className='font-semilight text-lg pr-10'>Get everything you need to reach your goals in one convenient bundle.</p><br />
          <ul className='font-light text-lg'>

            <li className='mb-3 flex'>  <IoCheckmark className='float-start  mt-1 mr-1' />Top-rated course  catered to exam requirements</li>
            <li className='mb-3'>  <IoCheckmark className='float-start  mt-1 mr-1' />Collection of practice tests that mimic the exam
            </li>
            <li className='mb-3'> <IoCheckmark className='float-start  mt-1 mr-1' />Expert guidance from a world-class instructor</li>
          </ul>
          <div className='flex m-3'>
            <p className='text-lg font-semibold mr-6'>Total: N20,800 </p>
            <button className='bg-green-200 p-2 rounded-md text-sm font-semibold'>Special Bundle Price</button> <br />
          </div>

         <div className='hidden md:block'> <ButtonWidthPurples text={"Add all to cart"} onclick={() => alert('Added to Cart!')} /></div>
         <div className='ml-5 md:hidden'> <ButtonWidthPurpl text={"Add all to cart"} onclick={() => alert('Added to Cart!')} /></div>
        </div>
        <div className='flex  lg:flex-row flex-col  float-right gap-6 p-4'>
          {
            Data.slice(4,6).map((course) => (
              <Gencard key={course.courseId} course={course} />
            ))
          }
        </div>
      </div>
    </div>
  )
}













