import PropTypes from 'prop-types'
import { FiGithub } from 'react-icons/fi'
import { GoLinkExternal } from 'react-icons/go'

const Item = ({ link, repo, website, language, description }) => {
  return (
    <div className="card border bg-base-200 border-base-300 rounded-md shadow-sm">
      <div className="card-body">
        <div className='flex justify-between'>
          <a href={link} className='card-title link link-hover text-sm' target='_blank' rel="noreferrer"><FiGithub /> {repo}</a>
          <a href={website} className='card-title link link-hover text-sm' target='_blank' rel="noreferrer"><GoLinkExternal /></a>
        </div>
        <div className={`badge badge-neutral`}>{language}</div>
        <p>{description}</p>
      </div>
    </div>
  )
}

Item.propTypes = {
  link: PropTypes.string,
  repo: PropTypes.string,
  website: PropTypes.string,
  language: PropTypes.string,
  description: PropTypes.string,
}

export default Item