import React, { useState } from 'react'
import { Button, ButtonOutline, ButtonWidthPurples } from '../../common/Button'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import login from "/public/loginimg.png"
import { Link } from 'react-router-dom';



const Signup = () => {

  const [text, setText] =useState("")
     const handleSubmit =(e) => {
    e.preventDefault();
  
    if (text.trim() ==="") {
      alert ("You must fill out form")
    }else{
      alert ("Login succesfull!")
    }
  }


  return (
    <div>

      <div className='lg:w-[1300px] mx-auto'>
        <div  className='pt-25 pl-25'>
          <Link to={"/"}><Button text={"Back to home"} /></Link>
          
        </div>
        <div className=' flex justify-between  m-25  '>

          <div className='w-100  '>
            <div className='font-semibold text-4xl mb-10'>
              <h1 >Login to continue your learning journey</h1>
            </div>
            <div className=''>
              <form onSubmit={handleSubmit}>
                <input  onChange={(e)=>setText(e.target.value)} value={text} type="text" placeholder='Full name' className='border-1 border-gray-600 hover:border-purple-700 rounded-md w-110 h-15 font-light p-3 text-gray-80 mb-5' />
                <input type="email" placeholder='Email' className='border-1 border-gray-600 hover:border-purple-700 rounded-md w-110 h-15 font-light p-3 text-gray-80 mb-5' />
                <div className='flex items-start '>
                 <input type="checkbox"  />
                 <p className='font-light text-sm ml-3 mb-5'>Send me special offers, personalized recommendations, and learning tips.</p>
                </div>
                 <div className=''><ButtonWidthPurples text={"Sign up"} /></div>
              </form>
             
            </div>
            <div className='mt-10  '>
              <p className='font-light mb-10 ml-35'>Other log in options </p>

              <div className='flex gap-5 ml-30'>
                <ButtonOutline text={<FcGoogle size={30} />} />
                <ButtonOutline text={<FaFacebook size={30} />} />
                <ButtonOutline text={<FaApple size={30} />} />
              </div>
            </div>
            
          </div>

          <div>
            <img src={login} alt='img' className='rounded-3xl' />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Signup
