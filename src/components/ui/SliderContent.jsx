import React from 'react'
import heroImage from "/public/bg-hero.jpg"
import heroImage2 from "/public/bg-hero2.png"
import { Button, ButtonOutline } from "../common/Button"
import { Link } from 'react-router-dom'

const SliderContent = ({topic, image, text}) => {
  return (
    <div className='lg:w-[1300px] w- mx-auto   overflow-hidden relative'>
      <img src={image} alt="loading" className='w-120 lg:w-1300 lg:h-120 h-60'/>


      <div className="lg:w-100 w-55  h-60  absolute left-10 top-10 bg-white lg:p-5 p-1 rounded-sm">
        <h1 className="font-bold lg:text-3xl">{topic}</h1>
        <p className="lg:my-3 my-1.5 text-sm leading-6">{text}</p>
        <div className="flex gap-3">
         <Link to={"Learnmore"}> <Button text={"Get Personal Plan"} /></Link>
         <Link to={"LearnAI"}> <ButtonOutline text={"Learn AI"} /></Link>
        </div>
      </div>
      
    </div>
  )
}

export default SliderContent
