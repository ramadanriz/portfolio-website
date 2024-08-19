import { Typewriter } from 'react-simple-typewriter'

const TypewritedDesc = () => {
    return (
        <h2 className='text-xl font-semibold bg-clip-text bg-gradient-to-r md:text-2xl'>
          <Typewriter
            words={[
              'Junior Web Developer',
              'Bachelor of Computer Science '
            ]}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
      )
}

export default TypewritedDesc