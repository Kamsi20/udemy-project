import React, { useContext, useState } from 'react'
import { Button, ButtonOutline, ButtonWidthPurples } from '../../common/Button'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaSearch } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import login from "/public/loginimg.png"
import { Link, useNavigate } from 'react-router-dom';
import { TiArrowBack } from "react-icons/ti";
import { IoCartOutline } from 'react-icons/io5';
import { TfiWorld } from 'react-icons/tfi';
import { AuthContext } from '../../../context/FormControlContext';
import { toast } from "react-toastify";


const initialState = {
  fullName: "",
  email: "",
  password: "",
}

const Login = () => {


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
                  <Link to={"/aboutus"}> <li>About Us</li></Link>
                  <Link to={"/contactus"}> <li>Contact Us</li></Link>
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



                        </div>
                      </div>
                    </header>

                  </div>
                  {/* <Link to={"login"} ><ButtonOutline text="Log in " /></Link> */}
                  <Link to={"/signup"}><Button text={"Sign up"} /></Link>
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
              <input onChange={handleChange} value={formData.fullName} name='fullName' type="text" placeholder='Full Name' className='border-1 border-gray-600 hover:border-purple-700 rounded-md w-110 h-15 font-light p-3 text-gray-80 mb-5' />
              <input onChange={handleChange} value={formData.email} name='email' type="email" placeholder='Email' className='border-1 border-gray-600 hover:border-purple-700 rounded-md w-110 h-15 font-light p-3 text-gray-80 mb-5' />
              <input onChange={handleChange} value={formData.password} name='password' type="password" placeholder='Password' className='border-1 border-gray-600 hover:border-purple-700 rounded-md w-110 h-15 font-light p-3 text-gray-80 mb-5' />
              <div className=''><ButtonWidthPurples text={"Login"} /></div>
            </form>
            {/* <div className='ml-5'><ButtonWidthPurples text={"Login"} /></div> */}
          </div>
          <div className='mt-10  '>
            <p className='font-light mb-10 ml-35'>Other log in options </p>

            {/* <div className='flex gap-5 ml-30'>
              <ButtonOutline text={<FcGoogle size={30} />} />
              <ButtonOutline text={<FaFacebook size={30} />} />
              <ButtonOutline text={<FaApple size={30} />} />
            </div> */}
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
