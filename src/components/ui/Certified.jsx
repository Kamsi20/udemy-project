import React from 'react'
import { Button } from '../common/Button'
import Card from '../common/Card'
import img1 from '/public/1.png'
import img2 from '/public/2.png'
import img3 from '/public/3.png'

const Certified = () => {
  return (
    <div className='grid grid-cols-4 h-100 p-10 gap-5 bg-gray-900 text-white p-10 m-5 rounded-2xl'>
      <div className='col-span-2'>
      <p className='text-3xl font-bold'>Get certified and get ahead in your career</p>
      <p className='text-xl '> Prep for certifications with comprehensive courses, practice tests, and special offers on exam vouchers.</p>
      <Button className="bg-gray-800" text={"Explore certifications and vouchers"} />
      </div>

    <div className='col-span-2 relative'>
      <div className='flex justify-center items-center gap-5'>
        <div className='text-white bg-black'><Card text='CompTIA' bg={img1} /></div>
        <div className='text-black '><Card  text='AWS' bg={img2}/></div>
        <div className='text-black '><Card text='PMI' bg={img3}/></div>
      </div>
    </div>
      
    </div>
  )
}

export default Certified
