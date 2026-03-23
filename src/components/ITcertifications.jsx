import React from 'react'

import ig from "/public/4.png"
import it from "/public/5.png"
import iv from "/public/6.png"
import iq from "/public/7.png"
import aa from "/public/30.png"
import ab from "/public/31.png"
import ac from "/public/32.png"
import ad from "/public/33.png"
import ae from "/public/34.png"
import af from "/public/35.png"
import ag from "/public/36.png"
import ah from "/public/37.png"
import Data from '../data/Data'
import Gencard from './common/Gencard'

const ITcertifications = () => {
  return (
    <div className='lg:w-[1300px] mx-auto mt-25'>
      <div className='flex gap-9 text-sm font-light m-4 justify-center items-center'>
        <p className='font-bold'>IT  & Software</p>

      </div>
      <hr className='border-gray-400 ' />
      <div className=' mt-5'>
        <h1 className='text-3xl font-semibold '> IT Certifications Courses</h1>
        <h2 className='text-xl font-semibold mt-9'>Courses to get you started</h2>
        <p className='font-light mt-3'>Explore courses from experienced, real-world experts.</p>
      </div>
      <div>
        <div className=' mx-130 p-5 mt-5 font-bold'><p>Most popular</p></div>
        <div className='flex border-1 border-gray-700 p-2 gap-7 px-7  '>
          {
            Data.slice(3, 7).map((course) => (
              <Gencard key={course.courseId} course={course} />
            ))
          }
        </div>
      </div>
      <div></div>
    </div>
  )

}

export default ITcertifications

export const Development = () => {
  return (
    <div className='lg:w-[1300px] mx-auto mt-25'>
      <div className='flex gap-9 text-sm font-light m-4 justify-center items-center'>
        <p className='font-bold'>Development</p>

      </div>
      <hr className='border-gray-400 ' />
      <div className=' mt-5'>
        <h1 className='text-3xl font-semibold '> Development Courses</h1>
        <h2 className='text-xl font-semibold mt-9'>Courses to get you started</h2>
        <p className='font-light mt-3'>Explore courses from experienced, real-world experts.</p>
      </div>
      <div>
        <div className='p-5 mt-5 font-bold'><p>Most popular</p></div>
        <div className='flex border-1 border-gray-700 p-2 gap-1  '>
          <Gencard text='100 Days of Code:The Complete Pythin Pro Bootcamp' texta='Dr Angela Yu,Developer and Lead Instructor' textb='4.7' textc='N13,900' textd='Best seller' bg={aa} />
          <Gencard text='AI Engineer Core Track:LLM Engineerinf, RAG, QLoRA, Agents' texta='Ligency, Ed Donner' textb='4.7' textc='N10,900' bg={ab} />
          <Gencard text='AI Engineer Agentic Track: The complete Agent & MCP Course' texta='Ligency, Ed Donner' textb='4.7' textc='N10,900' textd='Best seller' bg={ac} />
          <Gencard text='The Complete Full-Stack Web Development Bootcamp' texta='Dr Angela Yu,Developer and Lead Instructor' textb='4.7' textc='N21,900' textd='Best seller' bg={ad} />
        </div>
      </div>
      <div></div>
    </div>

  )
}




export const Otherit = () => {
  return (
    <div className='lg:w-[1300px] mx-auto mt-25'>
      <div className='flex gap-9 text-sm font-light m-4 justify-center items-center'>
        <p className='font-bold'>IT & Software</p>

      </div>
      <hr className='border-gray-400 ' />
      <div className=' mt-5'>
        <h1 className='text-3xl font-semibold '> Other IT & Software Courses</h1>
        <h2 className='text-xl font-semibold mt-9'>Courses to get you started</h2>
        <p className='font-light mt-3'>Explore courses from experienced, real-world experts.</p>
      </div>
      <div>
        <div className='p-5 mt-5 font-bold'><p>Most popular</p></div>
        <div className='flex border-1 border-gray-700 p-2 gap-1  '>
          <Gencard text='Complete Data Science, Machine Learning,DL,NLP Bootcamp' texta='Krish Naik  KRASHAI Technologies Privacy Limited' textb='4.5' textc='N10,900' textd='Best seller' bg={ae} />
          <Gencard text='n8n- AI Agents, AI Automation & AI Voice Agents  (No-code!)' texta='Damian Danelcyzk AdaptifyAI OU, Krystain...' textb='4.7' textc='N10,900' bg={af} />
          <Gencard text='Decoding DevOps- From Basics to Advanced Projects with AI' texta='Irman Teli' textb='4.6' textc='N19,900' textd='Best seller' bg={ag} />
          <Gencard text='MLOps Zero To Hero' texta='Abhishek Veermalla' textb='4.7' textc='N10,900' textd='Best seller' bg={ah} />
        </div>
      </div>
      <div></div>
    </div>

  )
}

