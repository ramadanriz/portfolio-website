import Container from '../components/Container'
import heroImg from '../assets/avatar.png'

const Home = () => {
  return (
    <div className='flex flex-col-reverse gap-4 items-center md:flex-row md:gap-8 md:justify-around min-h-[65vh] md:min-h-[80vh]'>
      <div className="space-y-2 text-center md:text-left">
        <h1 className="text-4xl font-bold md:text-5xl">Rizky Ramadhani</h1>
        <p className="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl">Hi everyone <span className="waving-hand">👋🏼</span>, welcome to my portfolio website.</p>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Speak to Sales
            </a> 
      </div>

      <div className="avatar">
        <div className="rounded-full">
          <img src={heroImg} alt="me" />
        </div>
      </div>
    </div>    
  )
}

export default Home