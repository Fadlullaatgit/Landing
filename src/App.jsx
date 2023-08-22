import React from 'react'
import Header from './Components/Header/Header'
import Welcome from './Components/Pages/Welcome/Welcome'
import Footer from './Components/Footer/Footer'
import Partner from './Components/Pages/Partner/Partner'
import Service from './Components/Pages/Services/Service'
import About from './Components/Pages/About/About'
import NewsLetter from './Components/NewsLetter/Newsletter'

function App() {
  return (
      <>
      
      <Header/>
      <Welcome/>
      <Partner/>
      <About/>
      <Service/>
      <Footer/>
      </>
    )
}

export default App