import { techStacks } from '../../constant'

const Card = () => {
    return (
        <div className='grid grid-cols-2 gap-6 mt-6 md:grid-cols-4'>
        {techStacks.map((techStack, index) => {
        return (
          <div className="card border bg-base-200 border-base-300 rounded-md shadow-sm" key={index}>
            <figure className="px-10 pt-10 text-6xl">
              {techStack.icon}
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-sm md:text-lg">{techStack.name}</h2>    
            </div>
          </div>
        )
      })}
      </div>
    )
}

export default Card