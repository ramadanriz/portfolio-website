import { aboutContents, educations, companies } from '../../constant'
import SectionTitle from '../SectionTitle'
import heroImg from '../../assets/real-face.jpg'
import Avatar from '../Avatar'

const AboutSection = () => {
  return (
    <>
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
        
        <Avatar className="w-48 h-48 rounded-full">
          <img src={heroImg} alt="me" />
        </Avatar>
      </div>

      <div className='mt-8 flex items-center flex-col-reverse gap-8 md:flex-row md:gap-16'>
        <div className='space-y-4 md:w-4/6'>
          <SectionTitle>Education</SectionTitle>
          <ul className="steps steps-vertical">
            {educations.map((education, index) => {
              return (
              <li data-content="🎓" className="step step-accent" key={index}>
                <div className="card bg-transparent">
                  <div className="card-body text-left">
                    <a href={education.url} className="card-title link link-hover">{education.title}</a>
                    <p>{education.period}</p>
                    <p>{education.role}</p>
                  </div>
                </div>                  
              </li>
              )
            })}
          </ul>
        </div>  
      </div>

      <div className='mt-8 flex items-center flex-col-reverse gap-8 md:flex-row md:gap-16'>
        <div className='space-y-4'>
          <SectionTitle>Work Experience</SectionTitle>
          <ul className="steps steps-vertical">
            {companies.map((company, index) => {
              return (
              <li data-content="💼" className="step step-accent" key={index}>
                <div className="card bg-transparent">
                  <div className="card-body text-left">
                    <a href={company.url} className="card-title link link-hover">{company.title}</a>
                    <p>{company.role}</p>
                    <p>{company.period}</p>
                    <ul className='list-disc'>
                      {company.skills.map((skill, index) => {
                        return (
                          <li key={index}>{skill}</li>
                        )
                      })}
                    </ul>
                  </div>
                </div>                  
              </li>
              )
            })}
          </ul>
        </div>  
      </div>
    </>
  )
}

export default AboutSection