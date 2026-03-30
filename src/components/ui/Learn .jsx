
import { useEffect, useState } from "react"
import Card from "../common/Card"
import heroImage from "/public/24.png"
import heroImage1 from "/public/25.png"
import heroImage2 from "/public/26.png"
import { Link } from "react-router-dom"
import ScrollReveal from "scrollreveal";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'

const Learn = () => {

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

  //  const [width, setWidth] = useState(window.innerWidth);

  //   useEffect(() => {
  //     const width = window.innerWidth
  //     console.log(width)
  //     if (width) setMobile(true)
  //   }, [])
  return (
    <div className='lg:w-[1300px] mx-auto grid lg:grid-cols-4 h-120 gap-5 p-10 lg:gap-5 mt-10 reveal'>
      <div className='col-span-1 w-100'>
        <h1 className="lg:mt-30 mt-10 lg:w-40   font-semibold text-2xl">Learn essential career and life skills</h1>
        <p className="font-light my-4">Kamsi helps you build in-demand skills fast and advance your career in a changing job market</p>
      </div>
      <div className='col-span-3'>
        <div className="flex justify-center items-center gap-5 ">
          <div className="block md:hidden ">
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
              <SwiperSlide >
                <Link to={"generativeai"}> <Card text="Generative AI" bg={heroImage} /></Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to={"itcertifications"} ><Card text="IT certifications" bg={heroImage1} /></Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to={"dataScience"} ><Card text="Data Science" bg={heroImage2} /></Link>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="hidden md:grid grid-cols-3 gap-5 ">
            <Card text="Generative AI" bg={heroImage} />
            <Card text="IT certifications" bg={heroImage1} />
            <Card text="Data Science" bg={heroImage2} />
          </div>

        </div>
      </div>

    </div>
  )
}

export default Learn 
