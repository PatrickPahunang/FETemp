import React from 'react';
import axios from 'axios';
import { useEffect , useState } from 'react';


const logout = () => {
  localStorage.removeItem('token');
  window.location.reload();
}




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


console.log(userData);


  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <h3>Hello {userData.first_name} {userData.last_name} </h3>
      <h1>Welcome to your Dashboard!</h1>

      <div>

      </div>

      <button onClick={logout} className=' py-2 w-24 bg-red-500 text-white text-sm border-1 border-white transition duration-500 hover:bg-red-900 rounded-md shadow-2xl' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" >LOGOUT</button>
    </div>
  );
};

export default Dashboard;