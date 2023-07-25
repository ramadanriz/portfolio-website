import SectionTitle from '../components/SectionTitle'
import { techStacks } from '../constant'
import List from '../components/techStacks/List'

const Skills = () => {
  return (
    <div className='mt-2'>
      <SectionTitle>Tech Stacks</SectionTitle>
      <p>A list of my favorite tools and technologies that I use on a regular basis.</p>
      <List techStacks={techStacks} />
    </div>
  )
}

export default Skills