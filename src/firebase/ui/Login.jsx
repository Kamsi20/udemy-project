import React, { useContext } from 'react'
import { loginFormControls } from '../config/RegisterFormControls'
import { AuthContext } from '../context/FormControlContext'
import CommonForm from '../CommonForm'
import { Link, useNavigate } from 'react-router-dom'
import { handleFirebaseError } from '../handleFirebaseError'

const Login = () => {
  const { loginFormData, setLoginFormData, loginWithFirebase, setLoading, user } = useContext(AuthContext)

  const navigate = useNavigate();

  function handleLoginFormSubmit(event) {
    event.preventDefault();

    loginWithFirebase().then(result => {
      if (result) {
        setLoading(false)
        navigate("/");
      }
    }).catch((error) => {
      setLoading(false)
      handleFirebaseError(error)
    })
  }


  return (
    <div className='h-screen flex flex-col justify-center gap-10'>

      <div className='w-full max-w-sm mx-auto rounded-md shadow-md shadow-red-600/30'>
        <div className='px-10 py-10'>
          <h1 className='text-red-600 font-bold text-lg'>Welcome, Back</h1>

          <div className='mt-5'>
            <CommonForm
              formControls={loginFormControls}
              formData={loginFormData}
              setFormData={setLoginFormData}
              onSubmit={handleLoginFormSubmit}
              buttonText={"Login"}
            />
          </div>

        </div>
      </div>
      <div className='flex items-center w-full max-w-sm mx-auto'>
        <small>Don't have an account?</small>
        <Link to={'/register'} className='text-sm px-1 font-semibold text-red-600 hover:underline'>Register</Link>
      </div>
    </div>
  )
}

export default Login
