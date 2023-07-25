import { companies } from '../../constant'
import SectionTitle from '../SectionTitle'
import List from './work/List'

const Work = () => {
  return (
    <div className='mt-8 flex items-center flex-col-reverse gap-8 md:flex-row md:gap-16'>
        <div className='space-y-4'>
          <SectionTitle>Work Experience</SectionTitle>
          <List companies={companies} />
        </div>  
    </div>
  )
}

export default Work