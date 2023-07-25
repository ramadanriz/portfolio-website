import PropTypes from 'prop-types'
import Item from './Item'

const List = ({ techStacks }) => {
  return (
    <div className='grid grid-cols-2 gap-6 mt-6 md:grid-cols-4'>
        {techStacks.map((techStack, index) => (
            <Item key={index} {...techStack} />
        ))}
    </div>
  )
}

List.propTypes = {
    techStacks: PropTypes.arrayOf(PropTypes.object)
}

export default List