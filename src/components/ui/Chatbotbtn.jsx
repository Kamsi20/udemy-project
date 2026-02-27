import React from 'react'
import { Link } from 'react-router-dom'

const Chatbotbtn = () => {
  return (
    <div className="lg:w-[1300px] mx-auto reveal">
      <Link to={"chatbot"} ><div><button className=' absolute left-1 bottom-560 rounded-full w-20 h-20 bg-black text-white  m-5 p-3 ' onClick={() => setShow (true)}>ASK ME</button></div></Link>
    </div>
  )
}

export default Chatbotbtn
