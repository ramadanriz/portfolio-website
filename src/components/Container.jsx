import PropTypes from 'prop-types'
import Navbar from "./Navbar"

const Container = (props) => {
  return (
    <>
        <Navbar />
        <main className='relative py-6 px-8 mx-auto mt-16 md:px-16 md:mt-14 lg:container lg:px-32 xl:px-72'>
            {props.children}
        </main>
    </>
  )
}

Container.propTypes = {
  children: PropTypes.node
}

export default Container