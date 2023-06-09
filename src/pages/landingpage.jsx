import React from 'react';
import logo from '../logo.svg'


const Landing = () => {

 
  return (
  
    <header>
        
      <div className="w-screen min-h-screen flex justify-center items-center bg-slate-900 flex-col">
        
        <span data-aos="fade-down" data-aos-duration="700" className=' text-white text-2xl'>Welcome to <br/></span><span  data-aos="fade-down" data-aos-duration="1000"  className='text-5xl mb-5 text-white '>Company XYZ</span>
        <a href='/'><img src={logo} alt='logo' className="h-52 App-logo"  
              data-aos="zoom-out"
              data-aos-duration="1000"
               /></a>
        
        <div className='flex flex-col'>
          <div className='flex justify-center items-center space-x-5'>
          <a href='/register'><button className=' py-2 w-40 bg-yellow-50 border-1 border-white transition duration-500 hover:bg-yellow-100 text-black rounded-md shadow-2xl text-lg' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100" >Sign Up</button></a>
          <a href='/login'><button className=' py-2 w-40 bg-green-50 border-1 border-white transition duration-500 hover:bg-green-200 text-black rounded-md shadow-2xl text-lg' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" >Login</button></a>
          </div>
      
        </div>
      </div>
      </header>
  );
};
      
export default Landing;