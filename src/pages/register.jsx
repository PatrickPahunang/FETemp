import React from 'react';
import axios from 'axios';



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

const Register = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <h1>Register Page</h1>
      <button onClick={handleClick2} className='font-bold mt-4 py-2 px-8 bg-blue-50 border-1 border-white transition duration-500 hover:bg-blue-200 text-black rounded-md shadow-2xl text-lg'>SAMPLE REGISTER POST API</button>
    </div>
  );
};

export default Register;