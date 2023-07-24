import { educations } from '../../constant'
import SectionTitle from '../SectionTitle'

const Education = () => {
  return (
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
  )
}

export default Education