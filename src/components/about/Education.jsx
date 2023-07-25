import { educations } from '../../constant'
import SectionTitle from '../SectionTitle'
import List from './education/List'

const Education = () => {
  return (
    <div className='mt-8 flex items-center flex-col-reverse gap-8 md:flex-row md:gap-16'>
        <div className='space-y-4 md:w-4/6'>
          <SectionTitle>Education</SectionTitle>
          <List educations={educations} />
        </div>  
    </div>
  )
}

export default Education