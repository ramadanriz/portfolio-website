import TypewritedDesc from '../components/TypewritedDesc'
import DownloadResumeButton from '../components/DownloadResumeButton'
import Avatar from '../components/Avatar'

const Home = () => {
  return (
    <>
      <div className="space-y-2 text-center md:text-left">
        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Rizky Ramadhani</h1>
        <TypewritedDesc />
        <p className="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl">Hi everyone <span className="waving-hand">👋🏼</span>, welcome to my portfolio website.</p>
        <DownloadResumeButton />
      </div>

      <Avatar />
    </>    
  )
}

export default Home