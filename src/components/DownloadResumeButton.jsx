import { BsFillFileEarmarkArrowDownFill } from 'react-icons/bs'

const DownloadResumeButton = () => {
  return (
    <a href="https://drive.google.com/file/d/1xi_zNnAC5N1Qle6w5EdK_ZdB-KZP5CXy/view?usp=sharing" className='btn flex items-center py-2 px-4 mx-auto text-sm font-medium rounded-lg border transition duration-300 md:py-2.5 md:px-5 md:mx-0 focus:ring-4 focus:outline-none w-fit ' target='_blank' rel="noreferrer">
        <BsFillFileEarmarkArrowDownFill /> Download Resume
    </a>
  )
}

export default DownloadResumeButton