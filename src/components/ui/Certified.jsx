import React, { useEffect } from 'react'
import { Button, ButtonGray, ButtonOutline } from '../common/Button'
import img1 from '/public/1.png'
import img2 from '/public/2.png'
import img3 from '/public/3.png'
import Card from '../common/Card'
import { FaArrowRight } from "react-icons/fa"
import CardR from '../common/CardR'
import { Link } from 'react-router-dom'
import ScrollReveal from "scrollreveal";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'

const Certified = () => {

  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      distance: "60px",
      duration: 3000,
      easing: "ease-in-out",
      origin: "bottom",
      interval: 200,
      reset: false, // animation happens once
    });
  }, []);

  return (


    <div className='lg:w-[1200px] mx-auto grid lg:grid-cols-5  lg:h-100 gap-5 bg-gray-900 text-white m-5 rounded-2xl lg:py-20 py-10 px-15 mt-10  reveal'>
      <div className='col-span-2'>
        <p className='text-3xl font-semibold'>Get certified and get ahead in your career</p>
        <p className='mt-3 font-light mr-20 w-70 '> Prep for certifications with comprehensive courses, practice tests, and special offers on exam vouchers.</p>
        <div className='absolute mt-6 '  ><ButtonGray text={"Explore certifications and vouchers"} />
          <div className="relative ml-6 mt-2.5 float-right  font-extralight text-sm"><FaArrowRight size={10} /></div>
        </div>
      </div>

      <div className='w-full h-60 overflow-hidden col-span-3 relative lg:mt-1 mt-15'>
        <div className='hidden md:grid grid-cols-3 gap-5'>
          <Link to={"compTia"} ><div > <CardR text='CompTIA ' texta='Cloud, Networking, Cybersecurity' bg={img1} /></div></Link>
          <Link to={"aws"} > <div ><CardR text='AWS' texta='Cloud, AI, Coding, Networking' bg={img2} /></div></Link>
          <Link to={"pmi"} ><div ><CardR text='PMI ' texta='Project and Program Management' bg={img3} /></div></Link>
        </div>

        <div className="block md:hidden">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 3,
                allowTouchMove: false,
              },
            }}

            loop={true}
            autoplay={{
              delay: 3000,
            }}
            navigation
            modules={[Navigation, Autoplay]}
          >
            <SwiperSlide>
              <Link to={"compTia"} ><div > <CardR text='CompTIA ' texta='Cloud, Networking, Cybersecurity' bg={img1} /></div></Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"aws"} > <div ><CardR text='AWS' texta='Cloud, AI, Coding, Networking' bg={img2} /></div></Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"pmi"} ><div ><CardR text='PMI ' texta='Project and Program Management' bg={img3} /></div></Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>




    </div>






  )
}

export default Certified




