import heroImg from '../assets/avatar.png'

const Avatar = () => {
  return (
    <div className="avatar">
        <div className='rounded-full w-64 h-64 md:h-auto'>
          <img src={heroImg} alt="me" />
        </div>
      </div>
  )
}

export default Avatar