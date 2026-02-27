import React, { useState } from 'react'
import { Button, ButtonOutline, ButtonWidthPurples } from '../../common/Button'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaSearch } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import login from "/public/loginimg.png"
import { Link } from 'react-router-dom';
import { TiArrowBack } from "react-icons/ti";
import { IoCartOutline } from 'react-icons/io5';
import { TfiWorld } from 'react-icons/tfi';

const Login = () => {
  const [text, setText] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") {
      alert("You must fill out form")
    } else {
      alert("Welcome back!")
    }
  }
  const profileData = {
    fullName: "Okafor Kamsi",
    dob: "February 8, 2005",
    gender: "Male",
    nationality: "Nigerian",
    address: "Lagos state,Nigeria ",
    phone: "+234 7067693860",
    email: "okaforkamsimic@gmail.com"
  };

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className='lg:w-[1200px] mx-auto'>
      <div>
        <header>
          <div className='shadow-lg fixed top-0 left-0 w-full h-[80px] bg-white z-50 shadow-md'>
            <nav className=' lg:w-[1300px] mx-auto flex gap-5 justify-between items-center p-3'>
              <div className='flex w-7/8 mx-auto  items-center gap-5'>
                <Link to={"/"} ><img src='public\logo.png' alt='img' className='w-45 ' /></Link>
                <small>Explore</small>
                <div className='w-full flex items-center gap-2 p-2 border-1 border-gray-600 rounded-full outline-none hover:opacity-85'>
                  <div><FaSearch size={12} color='gray' /></div>
                  <form className='w-full '>
                    <input type='search' placeholder='Search for anything' className='outline-none w-full' />
                  </form>
                </div>
              </div>
              <div className='flex items-center gap-5 w-full'>
                <ul className='flex gap-5'>
                  <li className='hover:text-purple-900'><a href={"https://www.udemy.com/pricing/"} className='text-sm'>Plans & Pricing</a></li>
                  <li className='hover:text-purple-900'><a href={"https://business.udemy.com/request-demo-mx/"} className='text-sm'>Kamsi Business</a></li>
                  <li className='hover:text-purple-900'><a href={"https://www.udemy.com/teaching/?ref=teach_header"} className='text-sm'>Teach on Kamsi</a></li>
                </ul>
                <div className='flex items-center gap-2'>
                  <div><IoCartOutline size={22} /></div>
                  <div className=''>
                    <header className="">
                      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                          
                          <div className="flex-shrink-0">
                            
                          </div>

                         
                          <div className="relative">
                            <button
                              onClick={() => setIsProfileOpen(!isProfileOpen)}
                              className="flex items-center focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full"
                              aria-expanded={isProfileOpen}
                              aria-haspopup="true"
                            >
                             
                              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-200 border-2 border-white/20">
                                K
                              </div>
                            </button>

                         
                            {isProfileOpen && (
                              <>
                              
                                <div
                                  className="fixed inset-0 z-10"
                                  onClick={() => setIsProfileOpen(false)}
                                />

                                <div className="absolute right-0 z-20 mt-2 w-80 origin-top-right rounded-xl bg-gray-800 shadow-2xl ring-1 ring-black/30 focus:outline-none animate-in fade-in zoom-in-95 duration-150">
                                  <div className="p-5">
                                  
                                    <div className="flex items-center gap-4 pb-4 border-b border-gray-700">
                                      <div className="h-14 w-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                                        K
                                      </div>
                                      <div>
                                        <h3 className="text-lg font-semibold text-white">
                                          {profileData.fullName}
                                        </h3>
                                        <p className="text-sm text-gray-400">
                                          {profileData.email}
                                        </p>
                                      </div>
                                    </div>

                                  
                                    <div className="mt-5 space-y-4">
                                      <div>
                                        <dt className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                          Full Name
                                        </dt>
                                        <dd className="mt-1 text-gray-200">
                                          {profileData.fullName}
                                        </dd>
                                      </div>

                                      <div>
                                        <dt className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                          Date of Birth
                                        </dt>
                                        <dd className="mt-1 text-gray-200">{profileData.dob}</dd>
                                      </div>

                                      <div>
                                        <dt className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                          Gender
                                        </dt>
                                        <dd className="mt-1 text-gray-200">
                                          {profileData.gender}
                                        </dd>
                                      </div>

                                      <div>
                                        <dt className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                          Nationality
                                        </dt>
                                        <dd className="mt-1 text-gray-200">
                                          {profileData.nationality}
                                        </dd>
                                      </div>

                                      <div>
                                        <dt className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                          Address
                                        </dt>
                                        <dd className="mt-1 text-gray-200">
                                          {profileData.address}
                                        </dd>
                                      </div>

                                      <div>
                                        <dt className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                          Phone Number
                                        </dt>
                                        <dd className="mt-1 text-gray-200">
                                          {profileData.phone}
                                        </dd>
                                      </div>
                                    </div>
                                  </div>

                                
                                  <div className="border-t border-gray-700 px-5 py-3">
                                    <button className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-500 transition-colors">
                                      Edit Profile
                                    </button>
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </header>

                  </div>
                  {/* <Link to={"login"} ><ButtonOutline text="Log in " /></Link> */}
                  {/* <Link to={"signup"}><Button text={"Sign up"} /></Link> */}
                  <ButtonOutline text={<TfiWorld size={15} />} />
                </div>
              </div>
            </nav>
          </div>
        </header>
      </div>
      <div className='pt-25 pl-25'>
        <Link to={"/"}><Button text={<TiArrowBack />} /></Link>


      </div>
      <div className=' flex justify-between  m-25  '>

        <div className='w-100  '>
          <div className='font-semibold text-4xl mb-10'>
            <h1 >Login to continue your learning journey</h1>
          </div>
          <div className=''>
            <form onSubmit={handleSubmit}>
              <input onChange={(e) => setText(e.target.value)} value={text} type="email" placeholder='Email' className='border-1 border-gray-600 hover:border-purple-700 rounded-md w-110 h-15 font-light p-3 text-gray-80 mb-5' />
              <div className=''><ButtonWidthPurples text={"Login"} /></div>
            </form>
            {/* <div className='ml-5'><ButtonWidthPurples text={"Login"} /></div> */}
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
  )
}

export default Login
