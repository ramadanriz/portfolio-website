import { aboutContents } from '../../constant'
import SectionTitle from '../SectionTitle'
import heroImg from '../../assets/real-face.jpg'
import Avatar from '../Avatar'

const AboutSection = () => {
  return (
    <div className='flex items-center flex-col-reverse gap-8 md:flex-row md:gap-16 mt-2'>
      <div className='space-y-4 md:w-4/6'>
      <SectionTitle>About Me</SectionTitle>
        {aboutContents.map((content, index) => (
          <p
            className='text-justify dark:text-gray-200 text-light-fg-secondary'
            key={index}
          >
            {content}
          </p>
        ))}
      </div>
      
        <Avatar className="rounded-full">
            <img src={heroImg} alt="me" />
        </Avatar>
      
    </div>
  )
}

export default AboutSection