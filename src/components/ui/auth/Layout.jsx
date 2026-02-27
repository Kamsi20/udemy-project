import React from 'react'
import { Route, Routes } from 'react-router-dom';


const Layout = () => {
   const location = useLocation();

  return (
    <div>
       {/* Hide Navbar on login page */}
      {location.pathname !== "/login" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default Layout
