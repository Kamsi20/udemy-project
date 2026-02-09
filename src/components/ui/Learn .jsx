import Card from "../common/Card"
import heroImage from "/public/cuvii-9y42kiiLy9s-unsplash.jpg"
import heroImage1 from "/public/bg-hero.jpg"
import heroImage2 from "/public/imagee.png"

const Learn  = () => {
  return (
    <div className='grid grid-cols-4 h-100 p-10 gap-5 '>
      <div className='col-span-1'>
        <h1 className="mt-50">Learn essential career and life skills</h1>
        <p>Udemy helps you build in-demand skills fast and advance your career in a changing job market</p>
      </div>
      <div className='col-span-3'>
        <div className="flex justify-center items-center gap-5">
            <Card bg={heroImage}/>
            <Card bg={heroImage1}/>
            <Card bg={heroImage2}/>
        </div>
      </div>
      
    </div>
  )
}

export default Learn 
