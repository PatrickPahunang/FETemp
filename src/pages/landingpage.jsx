import React from 'react';
import axios from 'axios';
import logo from '../logo.svg';

const Landing = () => {

    const handleClick1 = () => {
    // Axios code for making the API request
    axios.get('http://127.0.0.1:8000/myapp/api/example/')
      .then(response => {
        // Handle the response data
        console.log(response.data);
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
  };

  const handleClick2 = () => {
    // Axios code for making the API request
    axios.post('http://127.0.0.1:8000/myapp/api/example/')
      .then(response => {
        // Handle the response data
        console.log(response.data);
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
  };

  const handleClick3 = () => {
    // Axios code for making the API request
    axios.patch('http://127.0.0.1:8000/myapp/api/example/')
      .then(response => {
        // Handle the response data
        console.log(response.data);
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
  };




  return (
  
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

          
        </a>
        <div className='flex flex-col'>
          <div className='flex justify-center items-center space-x-5'>
          <a href='/register'><button className='font-bold py-2 px-4 bg-yellow-50 border-1 border-white transition duration-500 hover:bg-yellow-100 text-black rounded-md shadow-2xl text-lg'>Register</button></a>
          <a href='/login'><button className='font-bold py-2 px-8 bg-green-50 border-1 border-white transition duration-500 hover:bg-green-200 text-black rounded-md shadow-2xl text-lg'>Login</button></a>
          </div>
          <div className='space-x-5 my-4'>
          <button onClick={handleClick1} className='font-bold py-2 px-8 bg-blue-50 border-1 border-white transition duration-500 hover:bg-blue-200 text-black rounded-md shadow-2xl text-lg'>Test GET API</button>
          <button onClick={handleClick2} className='font-bold py-2 px-8 bg-blue-50 border-1 border-white transition duration-500 hover:bg-blue-200 text-black rounded-md shadow-2xl text-lg'>Test POST API</button>
          <button onClick={handleClick3} className='font-bold py-2 px-8 bg-blue-50 border-1 border-white transition duration-500 hover:bg-blue-200 text-black rounded-md shadow-2xl text-lg'>Test PATCH API</button>
          </div>
        </div>
        
      </header>
  );
};
      
export default Landing;