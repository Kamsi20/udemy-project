import React, { useContext } from 'react'
import CommonForm from '../CommonForm'
import { registerFormControls } from '../config/RegisterFormControls'
import { AuthContext } from '../context/FormControlContext'
import { updateProfile } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { handleFirebaseError } from '../handleFirebaseError'

const Register = () => {

  const { registerFormData, setRegisterFormData, registerWithFirebase, setLoading } = useContext(AuthContext)


  const navigate = useNavigate()

  function handleRegisterFormSubmit(event) {
    event.preventDefault()

    registerWithFirebase()
      .then(result => {
        if (result.user) {
          updateProfile(result.user, {
            displayName: registerFormData.name
          }).then(() => {
            navigate("/login");
            setLoading(false);
          })
        }
      }).catch((error) => {
        setLoading(false);
        handleFirebaseError(error);
      })

    setRegisterFormData({
      name: '',
      email: '',
      password: ''
    })
  }

  return (
    <div className='flex flex-col h-screen gap-10 justify-center'>
      <div className='w-full max-w-sm mx-auto rounded-md shadow-md shadow-red-600/30'>
        <div className='px-10 py-10'>
          <h3 className='text-lg font-bold mb-5'>Create an account <span className='italic font-extrabold text-red-600'>With Us</span></h3>

          <div>
            <CommonForm
              formControls={registerFormControls}
              formData={registerFormData}
              setFormData={setRegisterFormData}
              onSubmit={handleRegisterFormSubmit}
              buttonText={"Save"}
            />
          </div>


        </div>
      </div>

      <div className='flex items-center w-full max-w-sm mx-auto'>
        <small>I have an account?</small>
        <Link to={'/login'} className='text-sm px-1 font-semibold text-red-600 hover:underline'>Login</Link>
      </div>

    </div>
  )
}

export default Register
