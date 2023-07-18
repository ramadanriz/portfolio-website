import PropTypes from 'prop-types'

const SectionTitle = (props) => {
  return (
    <h1 className='text-4xl font-bold'>
        {props.children}
    </h1>
  )
}

SectionTitle.propTypes = {
    children: PropTypes.node
}

export default SectionTitle