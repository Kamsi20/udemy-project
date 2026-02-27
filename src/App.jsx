
import AWS from './components/AWS'
import CompTia from './components/CompTia'
import Datascience from './components/Datascience'
import Generativeai from './components/Generativeai'
import ITcertifications from './components/ITcertifications'
import Learnmore from './components/Learnmore'
import Home from './components/page/Home'
import PMI from './components/PMI'
import Login from './components/ui/auth/Login'
import Signup from './components/ui/auth/Signup'
import Footer from './components/ui/Footer'
import Navbar from './components/ui/Navbar'
import { Routes, Route,  useLocation } from 'react-router-dom'
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Download from './components/Download'
import Chatbot from './components/Chatbot'
import Layout from './components/ui/auth/Layout'

const App = () => {
const location = useLocation();
  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      distance: "60px",
      duration: 1200,
      easing: "ease-in-out",
      origin: "bottom",
      interval: 200,
      reset: false, // animation happens once
    });
  }, []);



  return (
    <div className='overflow-x-hidden'>
      <header>
         {location.pathname !== "/login" && <Navbar />}
        {/* <Navbar /> */}
      </header>
      <main className='overflow-x-hidden reveal'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />

        </Routes>

        <Routes>
          <Route path='/generativeai' element={<Generativeai />} />
          <Route path='/itcertifications' element={<ITcertifications />} />
          <Route path='/datascience' element={<Datascience />} />
          <Route path='/learnmore' element={<Learnmore />} />
          <Route path='/compTia' element={<CompTia />} />
          <Route path='/aws' element={<AWS />} />
          <Route path='/pmi' element={<PMI />} />
          <Route path='/download' element={<Download />} />
          <Route path='/chatbot' element={<Chatbot />} />
          <Route path='/layout' element={<Layout />} />


        </Routes>

        {/* <Chatbot /> */}

      </main>
      
      
      <footer>
        <Footer />
      </footer>


    </div>
  )
}

export default App
