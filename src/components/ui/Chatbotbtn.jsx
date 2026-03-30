import React from 'react'
import { Link } from 'react-router-dom'

const Chatbotbtn = () => {
  return (
    <div className="lg:w-[1300px] mx-auto reveal">
      <Link to={"chatbot"} ><div><button className=' lg:absolute left-1 bottom-560 rounded-full lg:w-20 w-15 lg:h-20 h-15 lg:text-lg bg-purple-800 text-white  lg:m-5 lg:p-3 p-1 ' onClick={() => setShow (true)}>ASK ME</button></div></Link>
    </div>
  )
}

export default Chatbotbtn
