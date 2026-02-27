import React from 'react'
import { MdOutlinePeopleOutline } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa6";
import ComptiaCard from './common/ComptiaCard';
import asw from "/public/21.png"
import assw from "/public/22.png"
import awss from "/public/23.png"


const PMI = () => {
  return (
    <div  className='lg:w-[1300px] mx-auto mt-20'>
      <div className='bg-gray-100 p-10 '>
        <div className='flex '>
          <p className='text-purple-900 font-bold flex pr-4'><a href={"https://www.udemy.com/browse/certification/"} />Certification preparation  <small><FaGreaterThan className='text-gray-400 font-light mt-1 text-sm pl-2'/></small></p>
          <p className='font-bold '>Project Management Institute (PMI) Certifications</p>
        </div>
        <h1 className='text-5xl font-bold pt-8'>Project Management Institute (PMI) Certifications Courses</h1>
        < div className=' flex font-light gap-3 text-sm py-4'>
          <p className=' border-r-1 border-gray-400 flex gap-2 pr-3'><MdOutlinePeopleOutline className='text-lg'/> 4,751,564 Learners </p>
          <p>Prapare for your certifications with these courses.</p>
          <p><a href={"https://www.udemy.com/browse/certification/comptia-certifications/"} />Learn more</p>
        </div >
        <p className='font-light  w-200'>
          The Project Management Institute provides globally recognized project management certifications, verifying skills and knowledge of project managers. The CAPM certification provides foundational level knowledge to help professionals gain entry into project management.
        </p>
      </div>
      <div className='py-5 px-10'>
        <div className=' mt-5'>
          <p className='text-2xl font-semibold pb-2'>In Demand Certifications</p>
          <p className='font-light pb-9'>Dive into Top Certifications that learners on Udemy are preparing for</p>
        </div>
        <div className='flex gap-5'>
        <ComptiaCard text='Ptoject Management Professional (PMP)' texta='2,978,929 learners ' bg={asw} />
        <ComptiaCard  text='Certified Associate in Project Management... ' texta='598,900 learners' bg={assw}/>
        <ComptiaCard  text='PMI Agile Certified Practitioner (PMI-ACP)' texta='398,000 learners' bg={awss}/>
        <ComptiaCard  text='Program Management Professional (PgMP)' texta='197,000 learners' bg={assw}/>
        </div>
      </div>

      <div className=' py-5 px-10'>
        <div className='mt-5'>
          <p className='text-2xl font-semibold pb-2'>Browse Project Management Institute (PMI) Certifications by Skill</p>
          <p className='font-light pb-9'>Get Certified for in-demand skills through our catalog of certification preparation courses</p>
        </div>
        <div className='border-gray-300 border-1 w-300  p-5'>
          <p className='pt-3 font-semibold'>Project Management Certification</p>
          <p className='flex text-sm font-light pt-2'><MdOutlinePeopleOutline className='text-lg font-light mt-1' /> 4,445,430 learners</p>
          <p className='text-xs font-light w-150 pt-2'>Plan, execute and oversee projects effectively with Kamsi's Project Management Certification. Master lifecycle management, resourse allocation, risk management, and communication to meet project objectives and constrai...</p>
        </div>
      </div>
    </div>
  )
}

export default PMI
