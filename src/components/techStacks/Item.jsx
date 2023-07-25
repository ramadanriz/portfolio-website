import PropTypes from 'prop-types'

const Item = ({ icon, name }) => {
  return (
    <div className="card border bg-base-200 border-base-300 rounded-md shadow-sm">
        <figure className="px-10 pt-10 text-6xl">
            {icon}
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title text-sm md:text-lg">{name}</h2>    
        </div>
    </div>
  )
}

Item.propTypes = {
    icon: PropTypes.object,
    name: PropTypes.string
}

export default Item