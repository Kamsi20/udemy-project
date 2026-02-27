import React from 'react'
import Gencard from './common/Gencard'
import ig from "/public/4.png"
import it from "/public/5.png"
import iv from "/public/6.png"
import iq from "/public/7.png"

const ITcertifications = () => {
  return (
    <div className='lg:w-[1300px] mx-auto mt-25'>
      <div className='flex gap-9 text-sm font-light m-4 '>
        <p className='font-bold'>IT  & Software</p>
        <p>IT   Certifications</p>
        <p>Network & Security</p>
        <p>Hardware</p>
        <p>Operating Systems & Servers</p>
        <p>Other IT & Software</p>

      </div>
      <hr className='border-gray-400 ' />
      <div className=' mt-5'>
        <h1 className='text-3xl font-semibold '> IT Certifications Courses</h1>
        <h2 className='text-xl font-semibold mt-9'>Courses to get you started</h2>
        <p className='font-light mt-3'>Explore courses from experienced, real-world experts.</p>
      </div>
      <div>
        <div className='p-5 mt-5 font-bold'><p>Most popular</p></div>
        <div className='flex border-1 border-gray-700 p-2 gap-1  '>
          <Gencard text='Ultimate AWS Certificate Solutions Architect Associate 2026' texta='Stephane Maarek | AWS Certified Cloud...' textb='4.7' textc='N12,900' textd='Best seller' bg={ig} />
          <Gencard text='[NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02 20206' texta='Stephane Maarek | AWS Certified Cloud...' textb='4.7' textc='N13,900' bg={it} />
          <Gencard text='CompTIA Security+(SYO-701) Complete Course & Practice Exam' texta='Jason Dion. 2.8million+ Enrollments Worldwide, Di...' textb='4.7' textc='N12,900' textd='Best seller' bg={iv} />
          <Gencard text='CompTIA Network+ (N10-009)Full Course & Practice Exam' texta='Jason Dion. 2.8million+ Enrollments Worldwide, Di...' textb='4.7' textc='N21,900' textd='Best seller' bg={iq} />
        </div>
      </div>
      <div></div>
    </div>
  )

}

export default ITcertifications

