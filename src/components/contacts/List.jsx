import PropTypes from 'prop-types'
import Item from './Item'

const List = ({ contacts }) => {
  return (
      <ul className="mt-6 max-w-md space-y-1 list-disc list-inside">
        {contacts.map((contact, index) => (
            <Item key={index} {...contact} />
        ))}
    </ul>
  )
}

List.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
}

export default List