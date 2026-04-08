import React from 'react'
import { MdOutlinePeopleOutline } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa6";
import ComptiaCard from './common/ComptiaCard';
import asw from "/public/21.png"
import assw from "/public/22.png"
import awss from "/public/23.png"
import { Link } from 'react-router-dom';


const PMI = () => {
  return (
    <div  className='lg:w-[1300px] mx-auto mt-20'>
      <div className='bg-gray-100 p-10 '>
        <div className='flex lg:flex-row flex-col '>
          <p className='text-purple-900 font-bold flex pr-4'>Certification preparation  <small><FaGreaterThan className='text-gray-400 font-light mt-1 text-sm pl-2'/></small></p>
          <p className='font-bold '>Project Management Institute (PMI) Certifications</p>
        </div>
        <h1 className='lg:text-5xl text-3xl mb-7 font-bold pt-8'>Project Management Institute (PMI) Certifications Courses</h1>
        < div className=' flex font-light gap-3 text-sm py-4'>
          <p className=' border-r-1 border-gray-400 flex gap-2 pr-3'><MdOutlinePeopleOutline className='text-lg'/> 4,751,564 Learners </p>
          <p>Prapare for your certifications with these courses.</p>
         
        </div >
        <p className='font-light  lg:w-200'>
          The Project Management Institute provides globally recognized project management certifications, verifying skills and knowledge of project managers. The CAPM certification provides foundational level knowledge to help professionals gain entry into project management.
        </p>
      </div>
      <div className='py-5 px-10'>
        <div className=' mt-5'>
          <p className='text-2xl font-semibold pb-2'>In Demand Certifications</p>
          <p className='font-light pb-9'>Dive into Top Certifications that learners on Udemy are preparing for</p>
        </div>
        <div className='flex lg:flex-row flex-col gap-5'>
        <Link to={'/awssolutions'}><ComptiaCard text='Ptoject Management Professional (PMP)' texta='2,978,929 learners ' bg={asw} /></Link>
       <Link to={'/comptiasecurity'}> <ComptiaCard  text='Certified Associate in Project Management... ' texta='598,900 learners' bg={assw}/></Link>
       <Link to={'/comptiacourse'}> <ComptiaCard  text='PMI Agile Certified Practitioner (PMI-ACP)' texta='398,000 learners' bg={awss}/></Link>
       <Link to={'/comptiasecurity'}> <ComptiaCard  text='Program Management Professional (PgMP)' texta='197,000 learners' bg={assw}/></Link>
        </div>
      </div>

      <div className=' py-5 px-10'>
        <div className='mt-5'>
          <p className='text-2xl font-semibold pb-2'>Browse Project Management Institute (PMI) Certifications by Skill</p>
          <p className='font-light pb-9'>Get Certified for in-demand skills through our catalog of certification preparation courses</p>
        </div>
        <div className='border-gray-300 border-1 lg:w-300  p-5'>
          <p className='pt-3 font-semibold'>Project Management Certification</p>
          <p className='flex text-sm font-light pt-2'><MdOutlinePeopleOutline className='text-lg font-light mt-1' /> 4,445,430 learners</p>
          <p className='text-xs font-light lg:w-150 pt-2'>Plan, execute and oversee projects effectively with Kamsi's Project Management Certification. Master lifecycle management, resourse allocation, risk management, and communication to meet project objectives and constrai...</p>
        </div>
      </div>
    </div>
  )
}

export default PMI
