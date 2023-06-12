import { useState , useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import BASE_URL from '../baseurl';


library.add(faHouse,faUser,faGear,faXmark,faBars);


const logout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  }



const Navbar = ({ username, image  }) => {

const [isActive, setIsActive] = useState(false);
const handleClick = () => {
  setIsActive(!isActive);
};

useEffect(() => {
  console.log(isActive);
}, [isActive]);



console.log(image);


  
return (
  <div className={'absolute h-14 block transition-all duration-500 ease-out bg-slate-900  xl:bg-transparent xl:top-20  top-10 left-0 xl:left-10 rounded-r-xl ' +  (isActive ? 'w-[335px]' : 'w-16')}  >
    <button onClick={handleClick} className='absolute xl:hidden block right-4 top-3 '>{isActive ? <FontAwesomeIcon icon={faXmark} className='text-yellow-50 h-8'/> : <FontAwesomeIcon icon={faBars} className='text-yellow-50 h-8'/>}</button>
      <div className={'text-white absolute w-72 bg-slate-900 xl:flex xl:-mt-6 mt-0 h-max px-10 xl:rounded-3xl rounded-r-3xl shadow-2xl transition-all duration-500 ease-out ' + (isActive ? 'left-0' : '-left-80 xl:left-0 ')}>
        <div className='flex flex-col justify-start items-center h-full pb-32 pt-10' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
          <div className='mb-10 flex justify-center flex-col items-center'>
              <div className='text-3xl mb-8 font-bold'> Company XYZ</div>

              <div className='bg-white rounded-full h-32 w-32 object-cover flex justify-center items-center mb-1'>
                {image ? (
                  <div>
                    <img src={BASE_URL+image} alt="Display" className='object-cover object-top rounded-full h-32 w-32' />
                  </div>
                ) : (
                  <div>
                    <FontAwesomeIcon icon={faUser} className='h-16 text-slate-900' />
                  </div>
                )}
              </div>



              <div className='text-sm'>Welcome back,</div>
              <div className=' text-2xl font-bold'>{username}</div>
          </div>

              <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                  <div className="squircle flex rounded-2xl my-1  border-2 hover:border-2 hover:translate-x-3 border-yellow-50 cursor-pointer hover:bg-yellow-50 hover:text-slate-900 transition duration-500" >
                    <FontAwesomeIcon icon={faHouse} className='text-slate-900  transition duration-400  bg-yellow-50  border-2 border-yellow-50' /> <div className='flex justify-start ml-4 items-center hover:text-slate-900  text-yellow-50  w-24'>Home</div>
                  </div>
              </div>

              <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="550">
                  <div className="squircle flex rounded-2xl my-1  border-2 hover:border-2 hover:translate-x-3 border-yellow-50 cursor-pointer hover:bg-yellow-50 hover:text-slate-900 transition duration-500" >
                    <FontAwesomeIcon icon={faUser} className='text-slate-900  transition duration-400  bg-yellow-50  border-2 border-yellow-50' /> <div className='flex justify-start ml-4 items-center hover:text-slate-900  text-yellow-50  w-24'>Profile</div>
                  </div>
              </div>

              <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
                  <div className="squircle flex rounded-2xl my-1  border-2 hover:border-2 hover:translate-x-3 border-yellow-50 cursor-pointer hover:bg-yellow-50 hover:text-slate-900 transition duration-500" >
                    <FontAwesomeIcon icon={faGear} className='text-slate-900  transition duration-400  bg-yellow-50  border-2 border-yellow-50' /> <div className='flex justify-start ml-4 items-center hover:text-slate-900   text-yellow-50 w-24'>Setting</div>
                  </div>
              </div>
          <button onClick={logout} className=' mt-10 py-2 w-24 bg-red-500 text-white text-sm border-1 border-white transition duration-500 hover:bg-red-900 rounded-md shadow-2xl' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600" >Logout</button>
      </div>
  </div>
</div>
)

};

export default Navbar;