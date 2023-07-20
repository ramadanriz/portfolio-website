import PropTypes from 'prop-types'

const Avatar = (props) => {
  return (
    <div className="avatar">
        <div className={`w-64 h-64 md:h-auto ${ props.className ? props.className : "" }`}>
          {props.children}
        </div>
      </div>
  )
}

Avatar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default Avatar