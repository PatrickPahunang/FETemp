import samplesvg from '../assets/webstore.svg'
import samplesvg2 from '../assets/webstore2.svg'

const Header = () => {


    return (
    <div className='w-screen flex xl:10 h-24 bg-gray-300 xl:px-0 pl-20 shadow-2xl'>
        <div className='w-screen flex justify-center items-center xl:ml-60'>
          <img src={samplesvg2} alt='samplesvg' className='xl:h-32 h-20'/>
        </div>
        <div className='w-screen flex justify-end items-center xl:mr-40'>
          <img src={samplesvg} alt='samplesvg' className='xl:h-32 h-20'/>
        </div>
      </div>
)}

export default Header;