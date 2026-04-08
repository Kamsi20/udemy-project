import React, { useContext, useState } from 'react'
import { Button, ButtonOutline, Buttons, Buttonss, ButtonWidth, ButtonWidthPurpl, ButtonWidthPurple, ButtonWidthPurples } from '../../common/Button'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import login from "/public/loginimg.png"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/FormControlContext';
import {handleFirebaseError} from '../../util/handleFirebaseError';


const initialState = {
  username: "",
  email: "",
  password: "",
}

const Signup = () => {
  const { registerWithFirebase, setLoading } = useContext(AuthContext)
  const [formData, setFormData] = useState(initialState)

  const navigate = useNavigate()

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault();
    registerWithFirebase(formData.email, formData.password)
      .then(result => {
        if (result.user) {
          updateProfile(result.user, {
            displayName: initialState.username
          }).then(() => {
            navigate("/login");
            setLoading(false);
          })
        }
      }).catch((error) => {
        setLoading(false);
        handleFirebaseError(error);
      })
    setFormData(initialState)
  }


  return (
    <div>

      <div className='lg:w-[1300px] mx-auto'>
        <div className='pt-25 pl-25'>
          <Link to={"/"}><Button text={"Back to home"} /></Link>

        </div>
        <div className=' flex  justify-between  lg:m-25 m-10  '>

          <div className='lg:w-100  '>
            <div className='font-semibold lg:text-4xl text-3xl mb-10'>
              <h1 >Signup to continue your learning journey</h1>
            </div>
            <div className=''>
              <form onSubmit={handleSubmit}>
                <input type="text" value={formData.username} onChange={handleChange} name="username" placeholder="FullName" className='border-1 border-gray-600 hover:border-purple-700 rounded-md lg:w-110 w-90 h-15 font-light p-3 text-gray-80 mb-5' />
                <br />
                <input type="text" value={formData.email} onChange={handleChange} name="email" placeholder="Email" className='border-1 border-gray-600 hover:border-purple-700 rounded-md lg:w-110 w-90 h-15 font-light p-3 text-gray-80 mb-5' />
                <br />


                <input type="text" value={formData.password} onChange={handleChange} name="password" placeholder="Password" className='border-1 border-gray-600 hover:border-purple-700 rounded-md lg:w-110 w-90 h-15 font-light p-3 text-gray-80 mb-5' />

               <div className='hidden md:block'> <ButtonWidthPurples text={"Signup"} type='submit' /></div>
               <div className='md:hidden w-90'> <Buttonss text={"Signup"} type='submit' /></div>
              </form>

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

          <div className='mt-25'>
            <img src={login} alt='img' className='rounded-3xl hidden md:block' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Signup
