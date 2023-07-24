import { companies } from '../../constant'
import SectionTitle from '../SectionTitle'

const Work = () => {
  return (
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
  )
}

export default Work