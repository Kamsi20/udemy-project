import React from 'react'
import heroImage from "/public/bg-hero.jpg"
import heroImage2 from "/public/bg-hero2.png"
import { Button, ButtonOutline } from "../common/Button"

const SliderContent = ({topic, image, text}) => {
  return (
    <div className='lg:w-[1300px] mx-auto h-100  overflow-hidden relative'>
      <img src={image} alt="loading" />


      <div className="w-100 absolute left-10 top-10 bg-white p-5 rounded-sm">
        <h1 className="font-semibold text-3xl">{topic}</h1>
        <p className="my-3 text-sm leading-6">{text}</p>
        <div className="flex gap-3">
          <Button text={"Get Personal Plan"} />
          <ButtonOutline text={"Learn AI"} />
        </div>
      </div>
      
    </div>
  )
}

export default SliderContent
