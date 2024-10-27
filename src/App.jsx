import './App.css'
import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Work from './components/Work'
import ApproachWork from './components/ApproachWork'
import Praise from './components/Praise'
import MobileApp from './components/MobileApp'
import Trust from './components/Trust'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <Work/>
        <ApproachWork/>
        <Praise/>
        <MobileApp/>
        <Trust/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default App
