import './App.css'
import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Work from './components/Work'
import ApproachWork from './components/ApproachWork'

function App() {
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <Work/>
        <ApproachWork/>
      </main>
      <Footer/>
    </>
  )
}

export default App
