import { useState , useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import BASE_URL from '../baseurl';
import '../App.css' ;
import { NavLink } from 'react-router-dom';
import axios from 'axios'

library.add(faHouse,faUser,faGear,faXmark,faBars);


const logout = () => {
    localStorage.removeItem('canLogin');
    localStorage.removeItem('session');
    window.location.href = '/login';
  }


const Navbar = ({ image }) => {
  
  const [userData, setUserData] = useState({
    id:'',
    email: '',
    first_name: '',
    last_name: '',
    profile_picture:'',
  });
  

const [isActive, setIsActive] = useState(false);
const handleClick = () => {
  setIsActive(!isActive);
};

useEffect(() => {
  const fetchUserData = async () => {
    

    
    try {
      let userId = localStorage.getItem('session')
      userId = userId.replace(/aAsdaK2lsladAad2das1AoxciIZiPZPozizyYZTGAbasdhGAgsne/g, '');
      userId = userId.replace(/P1pap2p45aod9f8AzZJNnxcdas1AoxciaAsdaK2lsladIZiPZPozizyYZTGAbasdhGAgsne/g, '');
      const response = await axios.get(BASE_URL + '/myapp/get_user/api/' + userId , {mode:'cors'}  );
      setUserData(prevUserData => ({
        ...prevUserData,
        id: response.data.id,
        first_name: response.data.first_name,
        last_name: response.data.last_name,
        profile_picture:response.data.profile_picture,
      }));
      console.log(response)
      
      
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
    
    
  };
  
  fetchUserData();
  
  
},[isActive]);

let username = userData.first_name + ' ' + userData.last_name;

  
return (
  <div className={'absolute h-14 transition-all duration-500 ease-out bg-slate-900 shadow-2xl  xl:bg-transparent xl:top-15  top-10 left-0 xl:left-7 rounded-r-xl ' +  (isActive ? 'w-[335px]' : 'w-16')}  >
    <button onClick={handleClick} className='absolute xl:hidden block right-4 top-3 '>{isActive ? <FontAwesomeIcon icon={faXmark} className='text-yellow-50 h-8'/> : <FontAwesomeIcon icon={faBars} className='text-yellow-50 h-8'/>}</button>
      <div className={'text-white absolute inset-10  w-72 bg-slate-900 xl:flex xl:-mt-6 mt-0 h-max px-10 xl:rounded-3xl rounded-r-3xl shadow-2xl transition-all duration-500 ease-out ' + (isActive ? 'left-0' : '-left-80 xl:left-0 ')}>
        <div className='flex flex-col justify-start items-center h-full pb-32 pt-10' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
          <div className='mb-10 flex justify-center flex-col items-center'>
              <div className='text-3xl mb-8 font-bold'> Company XYZ</div>

              <div className='bg-white rounded-full h-32 w-32 object-cover flex justify-center items-center mb-1'>
                {image ? (
                  <div>
                    <img src={BASE_URL+image} alt="Display" className='object-cover  rounded-full h-32 w-32' />
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

              <NavLink to='/dashboard' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                <div className=''>
                  <div className="squircle flex flex-start justify-center items-center rounded-2xl my-1  border-2 hover:border-2 border-yellow-50 cursor-pointer hover:bg-yellow-50 hover:text-slate-900 transition duration-500 " >
                    <FontAwesomeIcon icon={faHouse} className='text-slate-900  transition duration-400  bg-yellow-50  border-2 border-yellow-50 mr-5' /> <span className='mr-5'>Home</span>
                  </div>
                </div>
              </NavLink>
              <NavLink to='/dashboardprofile' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="550">
              <div className=''>
                  <div className="squircle flex flex-start justify-center items-center rounded-2xl my-1  border-2 hover:border-2 border-yellow-50 cursor-pointer hover:bg-yellow-50 hover:text-slate-900 transition duration-500 " >
                    <FontAwesomeIcon icon={faUser} className='text-slate-900  transition duration-400  bg-yellow-50  border-2 border-yellow-50 mr-5' /> <span className='mr-5'>Profile</span>
                  </div>
              </div>
              </NavLink>
              <NavLink to='/dashboardsettings' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
              <div className=''>
                  <div className="squircle flex flex-start justify-center items-center rounded-2xl my-1  border-2 hover:border-2 border-yellow-50 cursor-pointer hover:bg-yellow-50 hover:text-slate-900 transition duration-500 " >
                    <FontAwesomeIcon icon={faGear} className='text-slate-900  transition duration-400 bg-yellow-50  border-2 border-yellow-50 mr-5' /> <span className='mr-3'>Setting</span>
                  </div>
              </div>
              </NavLink>
          <button onClick={logout} className=' mt-10 py-2 w-24 bg-red-500 text-white text-sm border-1 border-white transition duration-500 hover:bg-red-900 rounded-md shadow-2xl' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600" >Logout</button>
      </div>
  </div>
</div>
)

};

export default Navbar;