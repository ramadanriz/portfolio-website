import TypewritedDesc from '../components/home/TypewritedDesc'
import DownloadResumeButton from '../components/home/DownloadResumeButton'
import Avatar from '../components/Avatar'
import heroImg from '../assets/avatar-circle.png'

const Home = () => {
  return (
    <div className="hero min-h-[65vh] md:min-h-[80vh]">
      <div className="hero-content p-0 flex-col lg:flex-row-reverse">
        <Avatar>
          <img src={heroImg} alt="me" />
        </Avatar>
        <div className="space-y-2 text-center md:text-left">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Rizky Ramadhani</h1>
          <TypewritedDesc />
          <p className="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl">Hi everyone <span className="waving-hand">👋🏼</span>, welcome to my portfolio website.</p>
          <DownloadResumeButton />
        </div>
      </div>
    </div>
  )
}

export default Home