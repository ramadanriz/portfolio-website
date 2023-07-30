import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import TechStacks from './pages/TechStacks'
import Container from './components/Container'

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/tech" element={ <TechStacks /> } />
        <Route path="/projects" element={ <Projects /> } />
      </Routes>
    </Container>
  )
}

export default App