import React from 'react';
import axios from 'axios';



const logout = () => {
  localStorage.removeItem('token');
  window.location.reload();
}


const Dashboard = () => {


const pathname = window.location.pathname;
const parts = pathname.split('/');
const id = parts[2];
let userId = parseInt(id)


axios.get(`http://127.0.0.1:8000/myapp/get_user/api/${userId}` , { withCredentials: true })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    // Handle the error
    console.error(error);
  });

    


  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <h1>WELCOME TO DASHBOARD</h1>
      <button onClick={logout} className=' py-2 w-40 bg-red-500 text-white text-xl border-1 border-white transition duration-500 hover:bg-red-900 rounded-md shadow-2xl' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" >LOGOUT</button>
    </div>
  );
};

export default Dashboard;