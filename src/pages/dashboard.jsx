import React from 'react';
import axios from 'axios';
import '../App.css';

import dp from '../assets/dp.jpg'
import { useEffect , useState } from 'react';
import Navbar from '../components/navbar';







const Dashboard = () => {

const [userData, setUserData] = useState({
  id:'',
  email: '',
  first_name: '',
  last_name: '',
});

const pathname = window.location.pathname;
const parts = pathname.split('/');
const id = parts[2];
let userId = parseInt(id)


useEffect(() => {
  const fetchUserData = async () => {
    
    try {
      const response = await axios.get('http://127.0.0.1:8000/myapp/get_user/api/' + userId , {mode:'cors'}  );
      setUserData(prevUserData => ({
        ...prevUserData,
        id: response.data.id,
        email: response.data.email,
        first_name: response.data.first_name,
        last_name: response.data.last_name
      }));
     
      
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
    
  };

  fetchUserData();
}, [userId]);

let username = userData.first_name + ' ' + userData.last_name;

console.log(userData);


  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-yellow-50 text-slate-900'>
      
    
      <Navbar username={username} image={dp} />
      <div className='w-screen h-1/4 bg-red-500'>

      </div>
      <div className='h-screen w-screen flex justify-center items-center'>
        <h1 data-aos="fade-down" data-aos-duration="1000" >DASHBOARD CONTENTS</h1>
      </div>
      
    

      <div>

      </div>

     
    </div>
  );
};

export default Dashboard;