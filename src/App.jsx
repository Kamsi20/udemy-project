import Certified from './components/ui/Certified'
import Hero from './components/ui/Hero'
import Learn from './components/ui/Learn '
import Man from './components/ui/Man'
import Navbar from './components/ui/Navbar'

const App = () => {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main>
        <Hero/>
        <Learn/>
        <Man />
        <Certified/>
      </main>
    </div>
  )
}

export default App
