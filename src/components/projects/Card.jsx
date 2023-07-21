import { useState, useEffect } from 'react'
import { FiGithub } from 'react-icons/fi'
import { GoLinkExternal } from 'react-icons/go'

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
          <div className="card border bg-base-200 border-base-300 rounded-md shadow-sm" key={index}>
            <div className="card-body">
              <div className='flex justify-between'>
                <a href={item.link} className='card-title link link-hover text-sm' target='_blank' rel="noreferrer"><FiGithub /> {item.repo}</a>
                <a href={item.website} className='card-title link link-hover text-sm' target='_blank' rel="noreferrer"><GoLinkExternal /></a>
              </div>
              <div className={`badge badge-neutral`}>{item.language}</div>
              <p>{item.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Card