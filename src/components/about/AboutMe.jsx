import { aboutContents } from '../../constant'
import heroImg from '../../assets/real-face.jpg'
import Avatar from '../Avatar'
import SectionTitle from '../SectionTitle'

const AboutMe = () => {
  return (
    <div className="hero mt-2">
      <div className="hero-content md:gap-20 p-0 flex-col md:flex-row-reverse lg:items-center">
        <Avatar className="w-[190px] h-[190px] rounded-full">
          <img src={heroImg} alt="me" />
        </Avatar>
        <div className="space-y-2 text-center md:text-left">
          <SectionTitle>About Me</SectionTitle>
          {aboutContents.map((content, index) => (
            <p className='text-justify text-light-fg-secondary' key={index}>
              {content}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutMe