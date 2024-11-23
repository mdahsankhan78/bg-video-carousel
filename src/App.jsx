// import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Components/Header'
import { Hero } from './Components/Hero/Hero'

function App() {

  return (
    <>
     <Router>

      <Header />
     </Router>
     <div className='relative md:-top-24 inset-0 z-0 h-screen'>

      <Hero />
     </div>
    </>
  )
}

export default App
