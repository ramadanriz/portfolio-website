import PropTypes from 'prop-types'

const Item = ({ name, username, link }) => {
  return (
    <li>
        {name} : <a href={link} className='font-semibold link link-hover'>{username}</a>
    </li>
  )
}

Item.propTypes = {
    name: PropTypes.string,
    username: PropTypes.string,
    link: PropTypes.string
}

export default Item