import { WiStars } from "react-icons/wi";
import { TiMessages } from "react-icons/ti";
import { IoTrophyOutline } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa";
import { ButtonWidth } from "../common/Button";


const Man = () => {
  return (
    <div>
      <div className="bg-gray-900 m-5 rounded-3xl  p-10 flex justify-between items-center text-white h-150">

      {/* content div */}
      <div className="flex flex-col gap-10">
        <div className="w-full mt-20 mx-10">
          <h1 className="text-2xl font-semibold">Reimagine your career in the AI era</h1>
          <p className="mt-10 text-xl">Future-proof your skills with Personal Plan. Get access to a variety of fresh content from real-world experts.</p> </div>

        <div className="grid grid-cols-2">
          <div className="mt-2 flex "><WiStars className="bg-purple-300 text-black rounded-full justify-center font-light mr-2" size={30} /> Learn AI and more</div>
          <div className="mt-2 flex "><TiMessages className="bg-yellow-200 text-black rounded-full justify-center font-light mr-2" size={30} />Practice with AI coaching</div>
          <div className="mt-2 flex "><IoTrophyOutline className="bg-green-200 text-black rounded-full justify-center font-light mr-2" size={30} /> Prep for a certification</div>
          <div className="mt-2 flex "><FaRegLightbulb className="bg-blue-200 text-black rounded-full justify-center font-light mr-2" size={30} />Advance your career</div>
        </div>

        <div >
          <ButtonWidth  text={"Learn more "} />
          <p>Starting at 7,500/month</p>
        </div>

      </div>


      {/* image div */}
      <div className="p-20">
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
