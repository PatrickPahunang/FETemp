import React from 'react';
import logo from '../logo.svg';

const Landing = () => {

 
  return (
  
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" data-aos="fade-down" data-aos-duration="1000"/>
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-down" data-aos-duration="1000"
        >
          Learn React

          
        </a>
        <div className='flex flex-col'>
          <div className='flex justify-center items-center space-x-5'>
          <a href='/register'><button className=' py-2 px-4 bg-yellow-50 border-1 border-white transition duration-500 hover:bg-yellow-100 text-black rounded-md shadow-2xl text-lg' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100" >Register</button></a>
          <a href='/login'><button className=' py-2 px-8 bg-green-50 border-1 border-white transition duration-500 hover:bg-green-200 text-black rounded-md shadow-2xl text-lg' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" >Login</button></a>
          </div>
          <div className='space-x-5 my-4'>
         
          </div>
        </div>
        
      </header>
  );
};
      
export default Landing;