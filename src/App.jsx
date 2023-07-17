import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from './pages/Home'
import About from './pages/About'
import Github from './pages/Github'

function App() {
  return (
    <>
      <Navbar />
      <main className='container md:px-20 lg:px-40 mx-auto'>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/github" element={ <Github /> } />
        </Routes>
      </main>
    </>
  )
}

export default App
