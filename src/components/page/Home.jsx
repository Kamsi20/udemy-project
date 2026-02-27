import Hero from "../ui/Hero"
import Learn from '../ui/Learn '
import Man from '../ui/Man'
import Books from '../ui/Books'
import Certified from '../ui/Certified'
import Generativeai from "../Generativeai"
import { Link } from "react-router-dom"
import Chatbot from "../Chatbot"
import Chatbotbtn from "../ui/Chatbotbtn"

const Home = () => {
  return (
    <div>
      <Hero />
      <Learn />
      <Link to={"learnmore"} ><Man /></Link>
      <Certified />
      <Books />
      <Chatbotbtn />
    </div>
  )
}

export default Home
