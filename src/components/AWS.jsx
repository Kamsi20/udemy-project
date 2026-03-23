import React from 'react'
import { MdOutlinePeopleOutline } from "react-icons/md";
import { FaGreaterThan, FaUsers } from "react-icons/fa6";
import ComptiaCard from './common/ComptiaCard';
import asw from "/public/18.png"
import assw from "/public/19.png"
import awss from "/public/20.png"
import { Link } from 'react-router-dom';
import { IoCheckmark } from 'react-icons/io5';
import { ButtonWidthPurples } from './common/Button';
import Data from '../data/Data';
import Gencard from './common/Gencard';
// import sec from "/public/18.png"


const AWS = () => {
  return (
    <div  className='lg:w-[1300px] mx-auto my-20'>
      <div className='bg-gray-100 p-10 '>
        <div className='flex '>
          <p className='text-purple-900 font-bold flex pr-4'><a href={"https://www.udemy.com/browse/certification/"} />Certification preparation  <small><FaGreaterThan className='text-gray-400 font-light mt-1 text-sm pl-2'/></small></p>
          <p className='font-bold '>Amazon Web Services (AWS) Certifications</p>
        </div>
        <h1 className='text-4xl font-bold pt-8'>Amazon Web Services (AWS) Certifications Courses</h1>
        < div className=' flex font-light gap-3 text-sm py-4'>
          <p className=' border-r-1 border-gray-400 flex gap-2 pr-3'><MdOutlinePeopleOutline className='text-lg'/> 11,751,564 Learners </p>
          <p>Prapare for your certifications with these courses.</p>
          <p><a href={"https://www.udemy.com/browse/certification/comptia-certifications/"} />Learn more</p>
        </div >
        <p className='font-light  w-200'>
          Amazon Web Services (AWS) training and certification certifies professionals in various Amazon Web Services cloud products and solutions, ranging from cloud practitioner to machine learning specialist. AWS has a wide spectrum of certifications catering to a variety of cloud-related skill levels extending from beginners to advanced professionals.
        </p>
      </div>
      <div className='py-5 px-10'>
        <div className=' mt-5'>
          <p className='text-2xl font-semibold pb-2'>In Demand Certifications</p>
          <p className='font-light pb-9'>Dive into Top Certifications that learners on Kamsi are preparing for</p>
        </div>
        <div className='flex gap-5'>
       <Link to={'/awssolutions'}> <ComptiaCard text='AWS Certificate Solutions Achitect- Associate' texta='3,378,929 learners ' bg={asw} /></Link>
        <ComptiaCard  text='AWS Certified Cloud Practitioner ' texta='2,798,900 learners' bg={assw}/>
        <ComptiaCard  text='AWS Certified Developer' texta='1,538,000 learners' bg={awss}/>
        <ComptiaCard  text='AWS Certified Solution Architect' texta='597,000 learners' bg={assw}/>
        </div>
      </div>

      <div className=' py-5 px-10'>
        <div className='mt-5'>
          <p className='text-2xl font-semibold pb-2'>Browse Amazon Web Services (AWS) Certifications by Skill</p>
          <p className='font-light pb-9'>Get Certified for in-demand skills through our catalog of certification preparation courses</p>
        </div>
        <div className='flex gap-3  '>
          <ComptiaCard text='Cloud Certification' texta='18,453,908 learners' textb='Gain a solid foundation in cloud concepts, architecture, and services with a cloud certificatio...'/>
          <ComptiaCard text='Cybersecurity Certification' texta='6,938,383 lesrners' textb="Prove your cybersecurity expertize with Kamsi's Cybersecurity Certiification. Learn threat analysis,..."/>
          <ComptiaCard text='Networking Certification' texta='5,998,983 learners' textb="Design and manage network systems with Kamsi's Networking  Certification. Top courses cover..." />
          <ComptiaCard text='Coding Certification' texta='4,632,435 learners' textb="Validate programming skills with Kamsi's certification. Study languages like Python..."/>
        </div>
      </div>
    </div>
  )
}

export default AWS


export const AWSsolutions =() => {
  return(
    <div className=' lg:w-[1300px] mx-auto m-5 pt-25' >
      <div className='flex gap-10 ml-7'>
        <img src="/public/18.png" alt="" className='h-50' />
        <div>
          <h1 className='text-2xl font-semibold mb-3 ml-1 '>AWS Certified Solutions Architect – Associate Courses</h1>
          <p className='mb-5 ml-1 flex'><FaUsers className='mt-1 mr-2' /> 3,334,499 Learners</p>
          <p className='w-240'>Earners of this certification have a comprehensive understanding of AWS services and technologies. They demonstrated the ability to build secure and robust solutions using architectural design principles based on customer requirements. Badge owners are able to strategically design well-architected distributed systems that are scalable, resilient, efficient, and fault-tolerant.</p>
        </div>

      </div>
      <div className=' flex flex-row  border-1 border-gray-400 p-8 rounded-md mt-8'>
        <div className='mb-20'>
          <h2 className='text-xl font-semibold w-100'>Looking to earn a AWS Certified Solutions Architect - Associate certification? We’ve got you covered.</h2> <br />
          <p className='font-semilight text-lg pr-10'>Get everything you need to reach your goals in one convenient bundle.</p><br />
          <ul className='font-light text-lg'>

            <li className='mb-3 flex'>  <IoCheckmark className='float-start  mt-1 mr-1' />Top-rated course  catered to exam requirements</li>
            <li className='mb-3'>  <IoCheckmark className='float-start  mt-1 mr-1' />Collection of practice tests that mimic the exam
            </li>
            <li className='mb-3'> <IoCheckmark className='float-start  mt-1 mr-1' />Expert guidance from a world-class instructor</li>
          </ul>
          <div className='flex m-3'>
            <p className='text-lg font-semibold mr-6'>Total: N29,800 </p>
            <button className='bg-green-200 p-2 rounded-md text-sm font-semibold'>Special Bundle Price</button> <br />
          </div>

          <ButtonWidthPurples text={"Add all to cart"} onclick={() => alert('Added to Cart!')} />
        </div>
        <div className='flex float-right gap-6 p-4'>
          {
            Data.slice(3,5).map((course) => (
              <Gencard key={course.courseId} course={course} />
            ))
          }
        </div>
      </div>
    </div>
  )
}