import { techStacks } from '../../constant'

const Card = () => {
    return (
        <div className='grid grid-cols-2 gap-6 mt-6 md:grid-cols-4'>
        {techStacks.map((techStack, index) => {
        return (
          <div className="flex relative flex-col items-center bg-base-100 p-4 space-y-2 rounded-lg border border-base-content shadow" key={index}>
            
              <div className='text-6xl'>
                {techStack.icon}
              
            </div>
            <h1 className="font-medium tracking-tight text-center md:text-lg">
              {techStack.name}
            </h1>
          </div>
        )
      })}
      </div>
    )
}

export default Card