import { FaCcMastercard, FaSearch, FaTag } from 'react-icons/fa'
import { IoCartOutline } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";

import { Button, ButtonOutline, ButtonWidthPurple, ButtonWidthPurples } from '../common/Button';
import Login from './auth/Login';
import aa from "/public/39.webp"
import { AuthContext } from '../../context/FormControlContext';
import Profile from '../util/Profile';

import { CiCreditCard1 } from "react-icons/ci";
import { CiBank } from "react-icons/ci";
import { toast } from "react-toastify";


import React, { useContext, useState } from 'react'

import { FcGoogle } from "react-icons/fc";

import { FaApple } from "react-icons/fa";
import login from "/public/loginimg.png"
import { Link, useNavigate } from 'react-router-dom';
import { TiArrowBack } from "react-icons/ti";




const Navbar = () => {
    const { user, handleLogout } = useContext(AuthContext)
    console.log(user)

    return (
        <div className='shadow-lg fixed top-0 left-0 w-full h-[80px] bg-white z-50 shadow-md'>


            <nav className=' x flex gap-5 justify-between items-center p-3'>
                <div className='flex w-7/8 mx-auto  items-center gap-5'>
                    <Link to={"/"} > <img src="logo.png" className='w-45'/></Link>
                   <Link to={"/learnmore"}> <small>Explore</small></Link>
                    <div className='w-full flex items-center gap-2 p-2 border-1 border-gray-600 rounded-full outline-none hover:opacity-85'>
                        <div><FaSearch size={12} color='gray' /></div>
                        <form className='w-full '>
                            <input type='search' placeholder='Search for anything' className='outline-none w-full' />
                        </form>
                    </div>
                </div>
                <div className='flex items-center ml-15 gap-8 w-full'>
                    <ul className='flex gap-5'>
                        {/* <li className='hover:text-purple-900'>Plans & Pricing</li> */}

                       <Link to={"/aboutus"}> <li>About Us</li></Link> 
                       <Link to={"/contactus"}> <li>Contact Us</li></Link> 
                        <Link to={"/teachonkamsi"}><li className='hover:text-purple-900'>Teach on Kamsi</li></Link>
                    </ul>
                    <Link to={"/cartcontent"}>  <div><IoCartOutline size={22} /></div></Link>
                    <ButtonOutline text={<TfiWorld size={15} />} />
                    {
                        user ? <Profile /> : <div className='flex items-center gap-2'>
                            <Link to={"/signup"}><Button text={"Sign up"} /></Link>
                            <Link to={"/login"} ><ButtonOutline text="Log in " /></Link>
                        </div>
                    }
                    {
                        user ? <Button text={"Log out"} onclick={handleLogout} /> : ""
                    }
                </div>
            </nav>

        </div>
    )
}

export default Navbar




export const TeachOnKamsi = () => {


    return (
        <div className='lg:w-[1300px] mx-auto'>
            <div
                className="h-120 bg-cover bg-center"
                style={{ backgroundImage: `url(${aa})` }}
            >
                <div className=' bg-gray-140  h-50 w-95  ml-10 p-5  mt-20 pt-30'>
                    <p className='font-semibold text-6xl'>Come teach with us</p>
                    <p className='font-light mb-5 text-xl mt-3'>Become an instructor and change lives — including your own</p>
                    <Link to={"/loginteacher"}> <button className=' bg-purple-700  h-12 rounded-2xl w-85'>Get started</button></Link>
                </div>
            </div>
            <div>
                <p className='text-4xl font-semibold mx-100 my-20'>So many reasons to start</p>
                <div className='flex mb-0'>
                    <div className='w-90 mx-15 flex flex-col   items-center mb-30'>
                        <img src='43.png' className='w-30 ' />
                        <p className='font-semibold text-xl '>Teach your way</p>
                        <p className='font-light '>Publish the course you want, in the way you want, and always have control of your own content.</p>
                    </div>
                    <div className='w-90 mx-15 flex flex-col   items-center mb-30'>
                        <img src='44.png' className='w-30 ' />
                        <p className='font-semibold text-xl '>Inspire learners</p>
                        <p className='font-light '>Teach what you know and help learners explore their interests, gain new skills, and advance their careers.</p>
                    </div>
                    <div className='w-90 mx-15 flex flex-col   items-center mb-30'>
                        <img src='45.png' className='w-30 ' />
                        <p className='font-semibold text-xl '>Get rewarded</p>
                        <p className='font-light '>Expand your professional network, build your expertise, and earn money on each paid enrollment.</p>
                    </div>

                </div>
                <div>
                    <img src='46.png' />
                </div>
            </div>
        </div>
    )
}


export const LoginTeacher = () => {

    const initialState = {
        fullName: "",
        email: "",
        password: "",
    }
    const { loginWithFirebase, setLoading } = useContext(AuthContext)
    const [formData, setFormData] = useState(initialState)


    const navigate = useNavigate();

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        loginWithFirebase(formData.email, formData.password)
            .then(result => {
                if (result.user) {
                    toast.success("Login successful 🎉", { position: 'top-left' });
                    setLoading(false)
                    navigate("/");
                }
            }).catch((error) => {
                setLoading(false)
                handleFirebaseError(error)
            })



        console.log(formData)
        setFormData({
            fullName: "",
            email: "",
            password: "",
        })

    }
    return (
        <div className='lg:w-[1200px] mx-auto mt-30'>
            <div className=' flex justify-between  m-25  '>

                <div className='w-100  '>
                    <div >
                        <h1 className='font-semibold text-4xl mb-5'>Become a Kamsi Instructor</h1>
                        <p className='font-light mb-5'>Discover a supportive community of online instructors. Get instant access to all course creation resources.</p>
                    </div>
                    <div className=''>
                        <form onSubmit={handleSubmit}>
                            <input onChange={handleChange} value={formData.fullName} name='fullName' type="text" placeholder='Full Name' className='border-1 border-gray-600 hover:border-purple-700 rounded-md w-110 h-15 font-light p-3 text-gray-80 mb-5' />
                            <input onChange={handleChange} value={formData.email} name='email' type="email" placeholder='Email' className='border-1 border-gray-600 hover:border-purple-700 rounded-md w-110 h-15 font-light p-3 text-gray-80 mb-5' />
                            <input onChange={handleChange} value={formData.password} name='password' type="password" placeholder='Password' className='border-1 border-gray-600 hover:border-purple-700 rounded-md w-110 h-15 font-light p-3 text-gray-80 mb-5' />
                            <div className=''><ButtonWidthPurples text={"Login"} /></div>
                        </form>
                        {/* <div className='ml-5'><ButtonWidthPurples text={"Login"} /></div> */}
                    </div>
                    <div className='mt-10  '>
                        <p className='font-light mb-10 ml-35'>Other log in options </p>

                        <div className='flex gap-5 ml-30'>
                            {/* <ButtonOutline text={<FcGoogle size={30} />} />
                            <ButtonOutline text={<FaFacebook size={30} />} />
                            <ButtonOutline text={<FaApple size={30} />} /> */}
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








export const PaymentPage = () => {
    const handleClick = () => {
        toast.success("Payment successful 🎉", {
            position: "top-center",
            autoClose: 3000
        });
    };


    return (
        <div className='my-25 lg:w-[1300px] mx-auto'>
            <h1 className='text-3xl font-semibold ml-50 mb-5'>Make Payment</h1>
            <div className='  border-1 border-gray-400 w-240 rounded-3xl mx-35 h-130 px-10 py-1 '>
                <div className='w-40 ml-80'> <img src='/public/logo.png' /></div>
                <div className='flex'>
                    <div className=' w-120 border-r-1 pr-15 '>
                        <div className='border-1 w-50 h-12 rounded-xl px-3 py-1 bg-purple-200 '>
                            <p className='flex '> <CiCreditCard1 className='text-3xl pr-2 border-r-1 ' />
                                <p className='pl-2 text-sm py-1.5'>Credit or Debit  Card</p>
                            </p>
                        </div>
                        <form className='mt-5' onClick={handleClick}>
                            <p>Cardholder's Name</p>
                            <input type="text" name="name" id="text" className='w-90 h-13 border-1 rounded-2xl bg-purple-50 p-5 mb-4' placeholder='Kamsi Okafor' />
                            <p>Card Number</p>
                            <div className=' flex w-90 h-13 border-1 rounded-2xl bg-purple-50  '>
                                <img src='/public/mastercard-logo-logok-15-removebg-preview.png' />
                                <input type="number" name="number" id="number" placeholder='0000-3432-2332-4221' className='pl-3 w-full' />
                            </div>
                            <div className='flex gap-1 mt-4'>
                                <div><p>Expiry</p>
                                    <input type="text" name="name" id="text" className='w-45 h-13 border-1 rounded-2xl bg-purple-50 p-5' placeholder='00 / 01' /></div>
                                <div> <p>cvc</p>
                                    <input type="text" name="name" id="text" className='w-45 h-13 border-1 rounded-2xl bg-purple-50 p-5' placeholder='000' /></div>
                            </div>
                            <div className='border-1 w-40 h-12 rounded-xl  py-1 bg-purple-200 mt-5'>
                                <p onClick={handleClick} className='flex pl-5'>
                                    <p className='pl-2 text-sm py-1.5'>Pay Now  </p>
                                    <FaTag className='text-2xl pr-2 text-purple-600 ml-5 mt-1 ' />
                                </p>
                            </div>
                        </form>
                    </div>
                    <div className='w-120 ml-20'>
                        <div className='border-1 w-50 h-12 rounded-xl  py-1 bg-purple-200 '>
                            <p className='flex '> <CiBank className='text-3xl pr-2 border-r-1 ' />
                                <p className='pl-2 text-sm py-1.5'>Bank Transfer</p>
                            </p>
                        </div>
                        <form className='mt-5'>
                            <p> Bank Name</p>
                            <p type="text" name="name" id="text" className='w-90 h-13 border-1 rounded-2xl bg-purple-50 px-7 py-3 mb-4 ' placeholder='Kamsi Okafor' > Access Bank</p>
                            <p>Account Number</p>
                            <div className='  w-90 h-13 border-1 rounded-2xl bg-purple-50  mb-4'>
                                <p type="number" name="number" id="number" placeholder='0000-3432-2332-4221' className='px-7 py-3  '>1864994315</p>
                            </div>

                            <div>
                                <p>Account Name</p>
                                <p className='w-90 h-13 border-1 rounded-2xl bg-purple-50  px-7 py-3 '  > Kamsi Learning Platfrom</p>
                            </div>
                            <div className='border-1 w-40 h-12 rounded-xl px-3 py-1 bg-purple-200 mt-5'>
                                <p className='flex '>
                                    <button type='button' onClick={handleClick} className='pl-2 text-sm py-1.5' >Pay Now  </button>
                                    <FaTag className='text-2xl pr-2 text-purple-600 ml-5  mt-1 ' />
                                </p>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

