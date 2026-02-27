import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'
import SliderContent from './SliderContent';

import heroImage from "/public/bg-hero.jpg"
import heroImage2 from "/public/bg-hero2.png"

export default () => {
  return (

    
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      navigation
      modules={[Navigation]}

    >
      <SwiperSlide>
        <SliderContent topic={"Master tomorrow's skills today"} image={heroImage} text={"Power up your AI, career, and life skills with the most up-to-date, expert-led learning."} />
      </SwiperSlide>
      <SwiperSlide><SliderContent topic={"Confidently build your career"} image={heroImage2} text={"Take your next step with the skills of today(and tomorrow). Courses from 9,900 ends Feb 20. "}/></SwiperSlide>
      {/* <SwiperSlide><SliderContent /></SwiperSlide> */}

    </Swiper>
  );
};
