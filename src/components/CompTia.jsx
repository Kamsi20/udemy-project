import React, { useEffect } from 'react'
import { MdOutlinePeopleOutline } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa6";
import ComptiaCard from './common/ComptiaCard';
import tia from "/public/15.png"
import sec from "/public/16.png"
import net from "/public/17.png"
import ScrollReveal from "scrollreveal";


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
    <div  className='lg:w-[1300px] mx-auto reveal mt-20'>
      <div className='bg-gray-100 p-10 '>
        <div className='flex '>
          <p className='text-purple-900 font-bold flex pr-4'><a href={"https://www.udemy.com/browse/certification/"} />Certification preparation  <small><FaGreaterThan className='text-gray-400 font-light mt-1 text-sm pl-2'/></small></p>
          <p className='font-bold text-sm'>CompTia Certifications</p>
        </div>
        <h1 className='text-4xl font-bold pt-8'>CompTia Certification Courses</h1>
        < div className=' flex font-light gap-3 text-sm py-4'>
          <p className=' border-r-1 border-gray-400 flex gap-2 pr-3'><MdOutlinePeopleOutline className='text-lg'/> 4,751,564 Learners </p>
          <p>Prapare for your certifications with these courses.</p>
          <p><a href={"https://www.udemy.com/browse/certification/comptia-certifications/"} />Learn more</p>
        </div >
        <p className='font-light  w-200'>
          CompTIA (Computing Technology Industry Association) is a recognized provider of IT certifications, offering a wide range of certifications suitable for various levels of expertise. CompTIA certifications such as A+ and ITF+ are widely respected across the IT industry and provide a solid foundation for those pursuing various IT career paths.
        </p>
      </div>
      <div className='py-5 px-10'>
        <div className=' mt-5'>
          <p className='text-2xl font-semibold pb-2'>In Demand Certifications</p>
          <p className='font-light pb-9'>Dive into Top Certifications that learners on Udemy are preparing for</p>
        </div>
        <div className='flex gap-5'>
        <ComptiaCard text='CompTIA A+ Cerfification' texta='1,378,929 learners ' bg={tia} />
        <ComptiaCard  text='CompTIA Security+ Certification ' texta='1,298,900 learners' bg={sec}/>
        <ComptiaCard  text='CompTIA Network+ Certification' texta='938,000 learners' bg={net}/>
        <ComptiaCard  text='Comptia CySA + ce Certifiation' texta='297,000 learners' bg={net}/>
        </div>
      </div>

      <div className=' py-5 px-10'>
        <div className='mt-5'>
          <p className='text-2xl font-semibold pb-2'>Browse CompTIA Certifications by Skill</p>
          <p className='font-light pb-9'>Get Certified for in-demand skills through our catalog of certification preparation courses</p>
        </div>
        <div className='flex gap-3  '>
          <ComptiaCard text='Cloud Certification' texta='18,453,908 learners' textb='Gain a solid foundation in cloud concepts, architecture, and services with a cloud certificatio...'/>
          <ComptiaCard text='Cybersecurity Certification' texta='6,938,383 lesrners' textb="Prove your cybersecurity expertize with Kamsi's Cybersecurity Certiification. Learn threat analysis,..."/>
          <ComptiaCard text='Networking Certification' texta='5,998,983 learners' textb="Design and manage network systems with Kamsi's Networking  Certification. Top courses cover..." />
          <ComptiaCard text='Project Management Certification' texta='4,632,435 learners' textb="Plan, execute, and oversee project effective on Kamsi's Project Management Certification"/>
        </div>
      </div>
    </div>
  )
}

export default CompTia













