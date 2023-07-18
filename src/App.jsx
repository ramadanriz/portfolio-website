import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from './pages/Home'
import About from './pages/About'
import Github from './pages/Github'

function App() {
  return (
    <>
      <Navbar />
      <div className='relative py-6 px-8 mx-auto mt-16 md:px-16 md:mt-14 lg:container lg:px-32 xl:px-72'>
        <main className='flex flex-col-reverse gap-4 items-center md:flex-row md:gap-8 md:justify-around min-h-[65vh] md:min-h-[80vh]'>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/github" element={ <Github /> } />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
