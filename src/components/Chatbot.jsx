// import React from 'react'
import { GoogleGenAI } from "@google/genai";
import { useState } from "react";

const ai = new GoogleGenAI({apiKey: "AIzaSyC20dh8nuTHGKtyBxhg-r3TqwRtFM3X2O8" })


const Chatbot = () => {

  const [question, setQuestion] =useState("")
  const [answer, setAnswer] =useState("")
  const [loading, setLoading] =useState(false)
  const [show ,setShow] =useState(false)


  const handleChange =(e) =>{
    setQuestion(e.target.value)
  }

  const handleSubmit =async(e) => {
    e.preventDefault()
   try {
     if(question==="") return("you must ask a question")
      setLoading(true);

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: question,
      });

      setAnswer(response.text)
      setLoading(false);
   }catch(error){
    console.log(error)
   }

      
  }





  return (
    
    <div className=' flex gap-5 mt-20 bg-gray-900 text-white mb-5'>
      <div className='w-[300px] h-screen  border-r-gray-300 border-r-9'></div>
      <div>
        <div className=' flex-col w-[930px] h-100 overflow-auto'>
          <p>{loading &&<h2 className='animate-pulse'>Thinking...</h2>}</p>
          <p className='text-justify'>{answer.replaceAll("###", "") .replaceAll("---", "") .replaceAll("**" , "")}</p>
        </div>

        <div className='mt-10 ml-20'>
          <form onSubmit={handleSubmit} className='flex gap-3'>
            <input onChange={handleChange} className='w-120 h-10 border-1 rounded-2xl p-5' placeholder="Ask Anything"/>
            <button type='submit' className='w-20 h-10 bg-blue-600 hover:bg-blue-400 border-1 rounded-2xl'>Ask AI</button>
            <button type='button' onClick={()=>setAnswer("")} className='w-20 h-10 bg-red-600 hover:bg-red-400 border-1 rounded-2xl'>Clear</button>
          </form>
        </div>
      </div>

    </div>


  )
}

export default Chatbot
