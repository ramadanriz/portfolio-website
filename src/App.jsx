import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from './pages/Home'
import About from './pages/About'
import Github from './pages/Github'

function App() {
  return (
    <>
      <Navbar />
      <main className='relative py-6 px-8 mx-auto mt-16 md:px-16 md:mt-14 lg:container lg:px-32 xl:px-72'>
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
