import React from 'react'

const Scroll = () => {
  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      distance: "60px",
      duration: 1200,
      easing: "ease-in-out",
      origin: "bottom",
      interval: 200,
      reset: false, // animation happens once
    });
  }, []);
  return (
    <div className='reveal'>

    </div>
  )
}

export default Scroll
