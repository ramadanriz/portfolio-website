import PropTypes from 'prop-types'

const Item = ({ url, title, period, role }) => {
  return (
    <li data-content="🎓" className="step step-accent">
        <div className="card bg-transparent">
            <div className="card-body text-left">
            <a href={url} className="card-title link link-hover">{title}</a>
            <p>{period}</p>
            <p>{role}</p>
            </div>
        </div>                  
    </li>
  )
}

Item.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  period: PropTypes.string,
  role: PropTypes.string,
}

export default Item