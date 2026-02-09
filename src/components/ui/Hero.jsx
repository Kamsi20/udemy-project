import { Button, ButtonOutline } from "../common/Button"
import heroImage from "/public/bg-hero.jpg"

const Hero = () => {
  return (
    <div className='h-80 bg-purple-800 overflow-hidden relative'>
      <img src={heroImage} alt="loading"/>
      <div className="w-100 absolute left-10 top-10 bg-white p-5 rounded-sm">
        <h1 className="font-semibold text-3xl">Master tomorrow's skills today</h1>
        <p className="my-3 text-sm leading-6">Power up your AI, career, and life skills with the most up-to-date, expert-led learning.</p>
        <div className="flex gap-3">
            <Button text={"Get Personal Plan"}/>
            <ButtonOutline text={"Learn AI"}/>
        </div>
      </div>
    </div>
  )
}

export default Hero
