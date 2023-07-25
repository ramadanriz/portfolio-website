import PropTypes from 'prop-types'

const Item = ({ url, title, role, period, skills }) => {
  return (
    <li data-content="💼" className="step step-accent">
        <div className="card bg-transparent">
            <div className="card-body text-left">
            <a href={url} className="card-title link link-hover">{title}</a>
            <p>{role}</p>
            <p>{period}</p>
            <ul className='list-disc'>
                {skills.map((skill, index) => {
                return (
                    <li key={index}>{skill}</li>
                )
                })}
            </ul>
            </div>
        </div>                  
    </li>
  )
}

Item.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    role: PropTypes.string,
    period: PropTypes.string,
    skills: PropTypes.array
}

export default Item