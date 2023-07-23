import { useState, useEffect } from 'react'
import axios from 'axios'
import { baseUrl } from '../constant'
import SectionTitle from "../components/SectionTitle"
import List from '../components/projects/List'

const Projects = () => {
  const [project, setProject] = useState()

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setProject(response.data)
    })
  }, [])

  if (!project) return null

  return (
    <div className='mt-2'>
      <SectionTitle>Projects</SectionTitle>
      <p>List of my top featured projects repositories. 🔖</p>
      <p>Feel free to pay a visit and don&apost forget to leave me a star! ⭐</p>
      <List projects={project} /> 
    </div>
  )
}

export default Projects