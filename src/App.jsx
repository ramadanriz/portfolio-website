import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import TechStacks from './pages/TechStacks'
import Contacts from './pages/Contacts'
import Container from './components/Container'

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/tech" element={ <TechStacks /> } />
        <Route path="/projects" element={ <Projects /> } />
        <Route path="/contacts" element={ <Contacts /> } />
      </Routes>
    </Container>
  )
}

export default App
