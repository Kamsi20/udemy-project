import React from 'react'
import { MdOutlinePeopleOutline } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa6";
import ComptiaCard from './common/ComptiaCard';
import asw from "/public/18.png"
import assw from "/public/19.png"
import awss from "/public/20.png"


const AWS = () => {
  return (
    <div  className='lg:w-[1300px] mx-auto mt-20'>
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
        <ComptiaCard text='AWS Certificate Solutions Achitect- Associate' texta='3,378,929 learners ' bg={asw} />
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
