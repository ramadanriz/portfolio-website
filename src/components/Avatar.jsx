import heroImg from '../assets/avatar-circle.png'

const Avatar = () => {
  return (
    <div className="avatar">
        <div className='w-64 h-64 md:h-auto'>
          <img src={heroImg} alt="me" />
        </div>
      </div>
  )
}

export default Avatar