import React from 'react';
import axios from 'axios';
import '../App.css';


import { useEffect , useState } from 'react';
import Navbar from '../components/navbar';
import BASE_URL from '../baseurl';
import Header from '../components/header'

const Dashboard = () => {

const [userData, setUserData] = useState({
  id:'',
  email: '',
  first_name: '',
  last_name: '',
  profile_picture:'',
});








let userId = localStorage.getItem('session')
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


let pagefn = userData.first_name;
let pageln = userData.last_name;
let username = pagefn + ' ' + pageln;

  return (
    <div className='w-screen h-max overflow-y-scroll flex flex-col justify-center items-center bg-yellow-50 text-slate-900 overflow-x-hidden '>
      <Navbar image={userData.profile_picture} />
      
      <Header />
      

      <div className='h-screen w-screen flex justify-center '>
          <div className=' xl:w-1/6 w-0 h-screen xl:h-128 bg-white shadow-2xl '>

          </div>
          <div className='flex justify-center items-center text-center xl:w-4/5 w-screen xl:h-128 bg-white shadow-sm rounded-br-2xl '>
            <h1 className='text-5xl' data-aos="fade-down" data-aos-duration="1000">DASHBOARD HOME</h1>
          </div>
      </div>
    </div>
  );
};

export default Dashboard;