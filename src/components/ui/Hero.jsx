import { Button, ButtonOutline } from "../common/Button"
import Slider from "./Slider"
import heroImage from "/public/bg-hero.jpg"
import heroImage2 from "/public/bg-hero2.png"
import ScrollReveal from "scrollreveal"
import { useEffect } from "react";

const Hero = () => {
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
    <div className="mt-20 reveal">
      <Slider/>
    </div>
    
  )
}

export default Hero
