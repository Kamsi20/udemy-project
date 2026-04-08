import React, { useContext, useState } from 'react'
import { Button, ButtonOutline, Buttonss, ButtonWidthPurples } from '../../common/Button'
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


  const { user, handleLogout } = useContext(AuthContext)
  console.log(user)
  const [open, setOpen] = useState(false);

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
                <Link to={"/"} ><img src='public\logo.png' alt='img'  className="w-28 md:w-36"/></Link>
                <small className='hidden md:block'>Explore</small>
                <div className='hidden md:flex  items-center gap-2 p-2 border border-gray-400 rounded-full'>
                  <div><FaSearch size={12} color='gray' /></div>
                  <form className='w-full '>
                    <input type='search' placeholder='Search for anything' className='outline-none w-full' />
                  </form>
                </div>
              </div>
              <div className='hidden md:flex items-center gap-5 w-full'>
                <ul className='flex gap-5'>
                  <Link to={"/aboutus"}> <li>About Us</li></Link>
                  <Link to={"/contactus"}> <li>Contact Us</li></Link>
                  
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
               
                  <Link to={"/signup"}><Button text={"Sign up"} /></Link>
                  <ButtonOutline text={<TfiWorld size={15} />} />
                </div>
              </div>
              <button
                className="md:hidden text-2xl"
                onClick={() => setOpen(!open)}
              >
                ☰
              </button>
            </nav>
            {open && (
              <div className="md:hidden bg-white shadow-md flex flex-col items-center gap-4 py-4 w-60 ml-50 ">

                {/* Search */}
                <div className="flex items-center gap-2 p-2 border rounded-full">
                  <FaSearch size={12} />
                  <input
                    type="search"
                    placeholder="Search..."
                    className="outline-none w-full"
                  />
                </div >

                <div onClick={() => setOpen(!open)} className=' flex flex-col gap-2  ml-30'>

                  <Link to={"/learnmore"}>Explore</Link>
                  <Link to={"/aboutus"}>About Us</Link>
                  <Link to={"/contactus"}>Contact Us</Link>
                  <Link to={"/teachonkamsi"}>Teach</Link>

                  <Link to={"/cartcontent"}>
                    <IoCartOutline size={22} />
                  </Link>
                </div>

                {user ? (
                  <div className='ml-23'>
                    <Profile />
                    <button onClick={handleLogout}>Log out</button>
                  </div>
                ) : (
                  < div onClick={() => setOpen(!open)} className='mx-3'>
                    <Link to={"/signup"}>Sign up</Link>
                    <Link to={"/login"}>Log in</Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </header>
      </div>
      <div className='pt-25 pl-25'>
        <Link to={"/"}><Button text={<TiArrowBack />} /></Link>


      </div>
      <div className=' flex justify-between  lg:m-25 m-10 '>

        <div className='w-100  '>
          <div className='font-semibold lg:text-4xl text-3xl mb-10'>
            <h1 >Login to continue your learning journey</h1>
          </div>
          <div className=''>
            <form onSubmit={handleSubmit}>
              <input onChange={handleChange} value={formData.fullName} name='fullName' type="text" placeholder='Full Name' className='border-1 border-gray-600 hover:border-purple-700 rounded-md lg:w-110 w-90 h-15 font-light p-3 text-gray-80 mb-5' />
              <input onChange={handleChange} value={formData.email} name='email' type="email" placeholder='Email' className='border-1 border-gray-600 hover:border-purple-700 rounded-md lg:w-110 w-90 h-15 font-light p-3 text-gray-80 mb-5' />
              <input onChange={handleChange} value={formData.password} name='password' type="password" placeholder='Password' className='border-1 border-gray-600 hover:border-purple-700 rounded-md lg:w-110 w-90 h-15 font-light p-3 text-gray-80 mb-5' />
              <div className='hidden md:block'> <ButtonWidthPurples text={"Login"} type='submit' /></div>
              <div className='md:hidden w-90'> <Buttonss text={"Login"} type='submit' /></div>
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
          <img src={login} alt='img' className='rounded-3xl hidden md:block' />
        </div>
      </div>
    </div>
  )
}

export default Login
