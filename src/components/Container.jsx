import PropTypes from 'prop-types'

const Container = (props) => {
  return (
    <div
      className={`container md:p-8 mx-auto ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  )
}

Container.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}

export default Container