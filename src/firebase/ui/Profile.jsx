import React, { useContext } from 'react'
import { AuthContext } from '../context/FormControlContext'

const Profile = () => {
  const { user, handleLogout, loading } = useContext(AuthContext)

  const displayName = user?.displayName || "";
  const nameFirstChar = displayName.at(0)?.toUpperCase() || "";
  const nameSecondChar = displayName.at(-1)?.toUpperCase() || "";
  const fullnameChar = `${nameFirstChar}${nameSecondChar}`;

  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='flex gap-3 items-center p-10 max-w-sm mx-auto shadow-md shadow-blue-500 rounded-md'>
        <div className='w-15 h-15 flex justify-center items-center rounded-full bg-blue-600'>
          <h1 className='font-bold text-2xl text-white'>{fullnameChar}</h1>
        </div>
        <div>
         

          {loading && loading}
          <h1 className='font-bold'>{user?.displayName}</h1>
          <p className='text-sm text-gray-600'>{user?.email}</p>
          <button onClick={handleLogout} className='bg-red-500 text-white w-full rounded-sm text-xs py-1 mt-2 cursor-pointer'>Logout</button>
        </div>



      </div>
    </div>
  )
}

export default Profile
