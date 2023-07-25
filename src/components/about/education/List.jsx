import PropTypes from 'prop-types'
import Item from './Item'

const List = ({ educations }) => {
  return (
    <ul className="steps steps-vertical">
      {educations.map((education, index) => (
        <Item key={index} {...education} />
      ))}
    </ul>
  )
}

List.propTypes = {
  educations: PropTypes.arrayOf(PropTypes.object)
}

export default List