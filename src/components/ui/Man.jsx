import { WiStars } from "react-icons/wi";
import { TiMessages } from "react-icons/ti";
import { IoTrophyOutline } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa";
import { ButtonWidth } from "../common/Button";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";


const Man = () => {
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
    <div className="lg:w-[1300px] mx-auto reveal">
      
      <div className="bg-gray-900 m-5 rounded-3xl w-305 p-10 flex justify-between items-center text-white ">

        {/* content div */}
        <div className="flex flex-col w-200 ">
          <div className="w-full  ">
            <h1 className="text-3xl w-80 font-semibold">Reimagine your career in the AI era</h1>
            <p className=" font-extralight mt-3">Future-proof your skills with Personal Plan. Get access to a variety of fresh content from real-world experts.</p> </div>

          <small>
            <div className="grid grid-cols-2 font-light  mt-3">
              <div className="mt-5 flex "><WiStars className="bg-purple-300 text-black rounded-full justify-center font-light mr-2" size={21} /> Learn AI and more</div>
              <div className=" mt-5 flex "><IoTrophyOutline className="bg-green-200 text-black rounded-full justify-center font-light mr-2" size={21} /> Prep for a certification</div>
              <div className="mt-3 flex "><TiMessages className="bg-yellow-200 text-black rounded-full justify-center font-light mr-2" size={21} />Practice with AI coaching</div>
              <div className=" mt-3 flex "><FaRegLightbulb className="bg-blue-200 text-black rounded-full justify-center font-light mr-2" size={21} />Advance your career</div>
            </div>
          </small>

          <div className=" mt-5 ">
            <ButtonWidth text={"Learn more "} />
            <small><p className="mx-3 mt-1 font-light">Starting at 7,500/month</p></small>
          </div>

        </div>


        {/* image div */}
        <div className="p-5 w-250">
          <img src="imageee.png" alt="img" />
        </div>


      </div>
      <div className="mt-30">
        <img src="img.png" />
      </div>
    </div>

  )
}

export default Man
