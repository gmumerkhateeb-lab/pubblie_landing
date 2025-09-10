import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Cards from './Components/Cards.jsx'
import Button from './Components/Button.jsx'
import Works from './Components/Works.jsx'
import Footer from './Components/Footer.jsx'
import Form from './Components/Form.jsx'
import Faqs from './Components/Faqs.jsx'
import Videocard from './Components/Videocard.jsx'
import Marquee from './Components/Marquee.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className=''>
      <Navbar />
      <Hero />
      <Cards />
      <Works/>
      <Videocard />
      <Marquee />
      <Faqs />
      <Form />
      <Footer />
       </div> 
    </>
  )
}

export default App
