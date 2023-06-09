import React , {useState} from 'react';
import axios from 'axios';
import logo from '../logo.svg'






const Register = () => {
    const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  
const [errorMessage, setErrorMessage] = useState('Account Login');


const [isError, setIsError] = useState(false);



  
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

const handleSubmit = (event) => {
  event.preventDefault();
  const form = new FormData();
    form.append('username', formData.username);
    form.append('password', formData.password);

   
    axios.post('http://127.0.0.1:8000/myapp/login/api/',form)
      .then(response => {
          const res = response.status;
          console.log(res)
          if (res === 200) {
            setIsError(false)
            setErrorMessage('Login Successful');
            setTimeout(() => {
                setFormData({
                username: '',
                password: '',
                });
             }, 1000);
    
            }
          else
             console.error();
          
      })
      .catch(error => {
        // Handle the error
        if (error.response && error.response.data) {
          const responseMessage = error.response.data.message;
          const formattedMessage = responseMessage.replace("[", "").replace("]", "").replace("'", "").replace("'", "");
          setErrorMessage(formattedMessage);
          setIsError(true);
        } else {
          setErrorMessage('An error occurred during registration');
        }
        console.error(error);
          });
    
    
    
    
  // Perform your form submission logic here
};



  return (
    
    <div className='flex flex-col justify-center items-center w-screen h-screen bg-slate-900' data-aos="fade" data-aos-duration="500">

        <form onSubmit={handleSubmit}>
        
        
        <div className='border-4 border-white rounded-xl flex flex-col h-max pb-10 pt-8 px-20 bg-yellow-50 text-black justify-center items-center text-center'>
        <img src={logo} alt='logo' className="h-40" />
        
        <div className='h-10 -translate-y-2'>{errorMessage && <p className={isError ? 'text-red-500 text-2xl':'text-slate-900 text-2xl'}>{errorMessage}</p>}</div>
    
      
            <input
             className='text-white text-center py-2 px-10 bg-gray-950 rounded-md'
              type="text"
              name="username"
              placeholder='Username'
              value={formData.username}
              onChange={handleChange}
              required
              
            />
          
        
      
            <input
             className='text-white text-center py-2 mt-2 px-10 bg-gray-950 rounded-md'
              type="password"
              name="password"
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
              required
            
            />
   

          <button type="submit" className='hover:bg-blue-500 transition duration-500  py-2 text-white  rounded-md w-64 my-2 border-1 border-black bg-blue-900'>LOGIN</button>
        </div>
        </form>
    </div>
      );
    };

export default Register;