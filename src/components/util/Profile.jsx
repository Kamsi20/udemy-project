import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/FormControlContext';

const Profile = () => {
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
  const { user, handleLogout, loading } = useContext(AuthContext)

  const displayName = user?.displayName || "";
  const nameFirstChar = displayName.at(0)?.toUpperCase() || "";
  const nameSecondChar = displayName.at(-1)?.toUpperCase() || "";
  const fullnameChar = `${nameFirstChar}${nameSecondChar}`;

  return (
    <div>
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
      {/* <div className='h-screen flex justify-center items-center'>
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
      </div> */}
    </div>
  )
}

export default Profile

