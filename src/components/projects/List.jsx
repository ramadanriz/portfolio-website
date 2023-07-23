import PropTypes from 'prop-types'
import Item from './Item'

const List = ({ projects }) => {
  return (
    <div className='grid grid-cols-1 gap-6 mt-6 md:grid-cols-2'>
      {projects.map((project, index) => {
        return (
          <Item key={index} {...project} />
        )
      })}
    </div>
  )
}

List.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object)
}

export default List