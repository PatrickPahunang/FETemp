import React from 'react';
import axios from 'axios';
import '../App.css';


import { useEffect , useState } from 'react';
import Navbar from '../components/navbar';
import samplesvg from '../assets/webstore.svg'
import samplesvg2 from '../assets/webstore2.svg'
import BASE_URL from '../baseurl';



const Dashprofile = () => {

const [userData, setUserData] = useState({
  id:'',
  email: '',
  first_name: '',
  last_name: '',
  profile_picture:'',
});




let userId = localStorage.getItem('user')
userId = userId.replace(/aAsdaK2lsladAad2das1AoxciIZiPZPozizyYZTGAbasdhGAgsne/g, '');
userId = userId.replace(/P1pap2p45aod9f8AzZJNnxcdas1AoxciaAsdaK2lsladIZiPZPozizyYZTGAbasdhGAgsne/g, '');


useEffect(() => {
  const fetchUserData = async () => {
    
    
    try {
      const response = await axios.get(BASE_URL + '/myapp/get_user/api/' + userId , {mode:'cors'}  );
      setUserData(prevUserData => ({
        ...prevUserData,
        id: response.data.id,
        email: response.data.email,
        first_name: response.data.first_name,
        last_name: response.data.last_name,
        profile_picture:response.data.profile_picture,
      }));
      
      
      
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
    
    
  };
  
  fetchUserData();
  
}, [userId]);

let username = userData.first_name + ' ' + userData.last_name;

  return (
    <div className='w-screen h-max overflow-y-scroll flex flex-col justify-center items-center bg-yellow-50 text-slate-900 overflow-x-hidden '>
      <Navbar username={username} image={userData.profile_picture} id={userData.id} />
      <div className='w-screen flex xl:20 h-40 bg-gray-300 xl:px-0 pl-20' id='dashboard content'>
        <div className='w-screen flex justify-center items-center xl:ml-60'>
          <img src={samplesvg2} alt='samplesvg' className='xl:h-40 h-20'/>
        </div>
        <div className='w-screen flex justify-end items-center xl:mr-40'>
          <img src={samplesvg} alt='samplesvg' className='xl:h-40 h-20'/>
        </div>
      </div>

      <div className='h-screen w-screen flex justify-center '>
          <div className=' xl:w-1/6 w-0 h-screen xl:h-128 bg-white shadow-2xl '>

          </div>
          <div className='flex justify-center items-center text-center xl:w-4/5 w-screen xl:h-128 bg-white shadow-sm rounded-br-2xl '>
            <h1 className='text-5xl' data-aos="fade-down" data-aos-duration="1000">DASHBOARD PROFILE</h1>
          </div>
      </div>
    </div>
  );
};

export default Dashprofile;