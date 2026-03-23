
import AWS, { AWSsolutions } from './components/AWS'
import CompTia, { ComptiaCourse, Comptiasecurity } from './components/CompTia'
import Datascience, { LearnAI } from './components/Datascience'
import Generativeai from './components/Generativeai'
import ITcertifications, { Development, Otherit } from './components/ITcertifications'
import Learnmore from './components/Learnmore'
import Home from './components/page/Home'
import PMI from './components/PMI'
import Login from './components/ui/auth/Login'
import Signup from './components/ui/auth/Signup'
import Footer from './components/ui/Footer'
import Navbar, {  LoginTeacher, PaymentPage, TeachOnKamsi } from './components/ui/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Download from './components/Download'
import Chatbot from './components/Chatbot'
import Layout from './components/ui/auth/Layout'

import SingleCourse from './components/SingleCourse'
import DisplayCourse from './components/Displaycourse'
import { AboutUs, AccessabilityStatement, ContactUs, HelpAndSupport, PrivacyPolicy, SiteMap, TermsAndConditions } from './components/NavbarDetails'
import PrivateRoute from './components/PrivateRoute'
import { AuthContext } from './context/FormControlContext'
import Profile from './components/util/Profile'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartContent from './components/CartContent'

const App = () => {
  const location = useLocation();
  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      distance: "60px",
      duration: 1200,
      easing: "ease-in-out",
      origin: "bottom",
      interval: 200,
      reset: false, 
    });
  }, []);



  return (
    <div className='overflow-x-hidden'>
      <header>
        {location.pathname !== "/login" && <Navbar />}
        
      </header>
      <main className='overflow-x-hidden reveal'>
        < ToastContainer/>
        <Routes>
          <Route path='/' element={<Home />} />
         
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />

          <Route path='/login' element={<PrivateRoute><SingleCourse /></PrivateRoute> } />

          


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
          <Route path='/learnAI' element={<LearnAI />} />
          <Route path='/development' element={<Development />} />
          <Route path='/otherit' element={<Otherit />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/helpandsupport' element={<HelpAndSupport />} />
          <Route path='/accessabilitystatement' element={<AccessabilityStatement />} />
          <Route path='/privacypolicy' element={<PrivacyPolicy />} />
          <Route path='/sitemap' element={<SiteMap />} />
          <Route path='/termsandconditions' element={<TermsAndConditions />} />
          <Route path='/teachonkamsi' element={<TeachOnKamsi />} />
          <Route path='/loginteacher' element={<LoginTeacher/>} />
          <Route path='/comptiacourse' element={<ComptiaCourse />} />
          <Route path='/comptiasecurity' element={<Comptiasecurity />} />
          <Route path='/awssolutions' element={<AWSsolutions />} />
          {/* <Route path='/addtocart' element={<AddToCart />} /> */}
          <Route path='/cartcontent' element={<CartContent />} />
          <Route path='/paymentpage' element={<PaymentPage />} />

          <Route path='/profile' element={<Profile />} /> 

          <Route path='/course/:id' element={<SingleCourse/>} />
          <Route path='/courses' element={<DisplayCourse />} />

        </Routes>
      </main>
    <footer>
      <Footer />
    </footer>
    </div>
  )
}

export default App
