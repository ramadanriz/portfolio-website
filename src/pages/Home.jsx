import TypewritedDesc from '../components/TypewritedDesc'
import DownloadResumeButton from '../components/DownloadResumeButton'
import Avatar from '../components/Avatar'
import heroImg from '../assets/avatar-circle.png'

const Home = () => {
  return (
    <div className='flex flex-col-reverse gap-4 items-center md:flex-row md:gap-8 md:justify-around min-h-[65vh] md:min-h-[80vh]'>
      <div className="space-y-2 text-center md:text-left">
        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Rizky Ramadhani</h1>
        <TypewritedDesc />
        <p className="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl">Hi everyone <span className="waving-hand">👋🏼</span>, welcome to my portfolio website.</p>
        <DownloadResumeButton />
      </div>

      <Avatar>
        <img src={heroImg} alt="me" />
      </Avatar>
    </div>    
  )
}

export default Home