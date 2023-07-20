import { useState, useEffect } from 'react'
import { FiGithub } from 'react-icons/fi'
import { AiOutlineStar } from 'react-icons/ai'
import { PiGitForkLight } from 'react-icons/pi'

const Card = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch('https://gh-pinned-repos.egoist.dev/?username=ramadanriz')
      const jsonData = await response.json()
      setData(jsonData)
    } catch (error) {
      console.log('Error fetching data:', error)
    }
  }  

  return (
    <div className='grid grid-cols-1 gap-6 mt-6 md:grid-cols-2'>
      {data.map((item, index) => {
        return (
          <article className="bg-base-100 border border-base-content rounded-xl p-4 sm:p-6" key={index}>
            <div className="flex items-start">
              <div>

                <div className="sm:flex sm:items-center sm:gap-2">
                  <div className="flex items-center gap-1">
                    <FiGithub />
                    <a href={item.link} className="text-xs font-medium hover:underline">{item.repo}</a>
                  </div>
                </div>

                <p className="mt-1 text-sm">{item.description}</p>

                <strong className="mt-4 rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
                  {item.language}
                </strong>
                
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Card