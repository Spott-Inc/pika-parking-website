
import { About } from './components/about/about'
import { Cards } from './components/cards/cards'
import { Concept } from './components/concept/concept'
import { Footer } from './components/footer/footer'
import { Header } from './components/header/header'
import { Hero } from './components/hero/hero'

import './index.css'

function App() {
 

  return (
    <>
      <Header/>
      <Hero/>
      <Cards/>
      <Concept/>
      <About/>
      <Footer/>
    </>
  )
}

export default App
