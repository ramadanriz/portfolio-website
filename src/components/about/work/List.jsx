import PropTypes from 'prop-types'
import Item from './Item'

const List = ({ companies }) => {
  return (
    <ul className="steps steps-vertical">
        {companies.map((company, index) => (
            <Item key={index} {...company} />
        ))}
    </ul>
  )
}

List.propTypes = {
    companies: PropTypes.arrayOf(PropTypes.object)
}

export default List