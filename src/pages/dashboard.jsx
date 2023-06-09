import React from 'react';



const logout = () => {
  localStorage.removeItem('token');
  window.location.reload();
}





const Dashboard = () => {

  
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <h1>WELCOME TO DASHBOARD</h1>
      <button onClick={logout} className=' py-2 w-40 bg-red-500 text-white text-xl border-1 border-white transition duration-500 hover:bg-red-900 rounded-md shadow-2xl' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" >LOGOUT</button>
    </div>
  );
};

export default Dashboard;