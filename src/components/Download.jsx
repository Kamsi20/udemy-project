import React, { use, useState } from 'react'
import SliderContent from './ui/SliderContent'

const Download = () => {
  const [text, setText] = useState("")
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") {
      alert("You must fill out form")
    } else {
      alert("Form submitted succesfully!")
    }

    

  }


  return (
    <div className='lg:w-[1300px] mx-auto mt-20'>
      <div >
        <img src='/public/27.png' />
      </div>
      <div className='flex gap-20 my-10 px-15'>
        <div>
          <p className='font-bold text-lg mb-7'>Develop the workplace skills to keep pace with change. Focus on AI fluency and practice skills in the flow of work. Scale leadership, agency, and AI ethics, and prepare your teams for whatever comes after AI. Get the report to learn more.</p>
          <p className='text-lg mb-7'>
            We are at a tipping point that will define ‌the future of work: AI has evolved from being a promising experiment to a company-wide imperative for every function, business line, and geography. But most are treating AI like a tool set to be deployed, rather than a transformation that will redefine how their organization operates and evolves. Those who succeed won’t be the ones who pick the “right” model; they’ll be the ones who rebuild how people learn, decide, and lead. In this year’s Global Learning & Skills Trends Report, we argue the case for key trends we see as essential for every organization to come out ahead.
          </p>
          <p >
            <p className='font-bold text-lg mb-7'>Top learning and skills trends for 2026:</p>
            <ol >
              <li>1: AI fluency: Treat it as a company-wide operating system, not just a technical skillset.</li>
              <li>2: Immersive learning: Embed learning directly into daily workflows for faster, stickier skills development.</li>
              <li>3: Leadership, ethics, and agency: Scale human capabilities with the same commitment as technical AI skills.</li>
              <li>4: Adaptive skills: Build complementary skills that prepare people for AI and for whatever comes after.</li>
            </ol>
          </p>
        </div>
        <div className='bg-gray-200 w-[450px] rounded-2xl  py-10'>
          <form className='px-10' onSubmit={handleSubmit}>
            <h1 className='text-3xl font-bold '>Unlock the trends and skills data</h1>
            <input onChange={(e) => setText(e.target.value)}  value={text} type='text' id='text' placeholder='First Name*' className='text-bold border-1 border-black w-90 h-14 rounded-md bg-white my-5 p-4' required />
            <input type='text' id='text' placeholder='Last Name*' className='text-bold border-1 border-black w-90 h-14 rounded-md bg-white p-4' required />
            <input type='email' id='email' placeholder='Work Email*' className='text-bold border-1 border-black w-90 h-14 rounded-md bg-white my-5 p-4' required />
            <input type='text' id='text' placeholder='Company Name*' className='text-bold border-1 border-black w-90 h-14 rounded-md bg-white p-4' required />
            <input type='text' id='text' placeholder='Job Title*' className='text-bold border-1 border-black w-90 h-14 rounded-md bg-white my-5 p-4' required />
            <small><p className=''>Send me special offers, event updates, and learning tips.<input type="checkbox" /></p></small>
            <button type='submit' className='w-90 h-13 bg-black border-black border-1 text-white rounded-md hover:bg-white hover:text-black font-bold mb-5 mt-10'> Submit</button>
            <small><p>By signing up, you agree to our Terms of Use and Privacy Policy.</p></small>
          </form>
        </div>
      </div>
      <div className='w-190 px-15'>
        <h1 className='text-4xl font-semibold mb-7'>AI fluency: Developing a new operating system</h1>
        <p className='text-xl'>Most organizations still talk about “AI skills” as if it is simply a matter of training people on tools, code, or data analysis. But the core challenge is not teaching people how to use the technology. Instead, it’s rewiring the enterprise to play, experiment, and find ways to incorporate AI into workflows. Then you will have the fluency to build not only a new culture but a new operating model and the new systems, learning content, and behaviors to continuously learn from AI, adapt with it, and lead through it.</p>
        <p className='text-2xl font-bold my-7'>Key ideas and data points:</p>
        <ul className='text-xl'>
          <li >AI fluency is not a binary state of on or off; it’s a journey.</li>
          <li className='my-4'> There are complementary skills needed beyond the technical skills to use AI tools fluidly.</li>
          <li > AI upskilling on the Kamsi platform is showing explosive growth, with +10 enrollments in AI courses per minute.</li>
        </ul>

        <p className='my-8 text-xl'>Download the full report to learn which skills employees are learning most on Kamsi Business. Discover what leading organizations are doing to develop AI fluency, and find out how Kamsi customers have successfully upskilled for AI at their organizations.</p>
      </div>
    </div>
  )
}

export default Download
