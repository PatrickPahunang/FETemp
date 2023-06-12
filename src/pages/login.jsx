import React , {useState} from 'react';
import axios from 'axios';
import logo from '../logo.svg'
import BASE_URL from '../baseurl';








const Register = () => {
    const [formData, setFormData] = useState({
    username: '',
    password: '',
    logintoken:'',
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

   
    axios.post(BASE_URL + '/myapp/login/api/',form)
      .then(response => {
          const res = response.status;
          const token = response.token;
          console.log(res);
          
          if (res === 200) {
            localStorage.setItem('token',token);
            setIsError(false)
            setErrorMessage('Login Successful');
            console.log(res); 
            console.log(response); 
            let userId = response.data.data.id;
            window.location.href = '/dashboard/' + userId;
            console.log(userId);

            
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
        
        
        <div className='border-4 border-white rounded-md flex flex-col h-max pb-10 pt-8 px-20 bg-yellow-50 text-black justify-center items-center text-center'>
        <a href='/'><img src={logo} alt='logo' className="h-40 App-logo"  
              data-aos="zoom-out"
              data-aos-duration="1000"
               /></a>
        
        <div data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="100" className='h-10 -translate-y-2 font-bold'>{errorMessage && <p className={isError ? 'text-red-500 text-2xl':'text-slate-900 text-2xl'}>{errorMessage}</p>}</div>
    
      
            <input
             className='text-white text-center py-2 px-10 bg-gray-950 rounded-md'
              type="text"
              name="username"
              placeholder='Username'
              value={formData.username}
              onChange={handleChange}
              required
              data-aos="fade"
              data-aos-duration="1000"
              data-aos-delay="200"
              
            />
          
        
      
            <input
             className='text-white text-center py-2 mt-2 px-10 bg-gray-950 rounded-md'
              type="password"
              name="password"
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
              required
              data-aos="fade"
              data-aos-duration="1000"
              data-aos-delay="300"
            
            />
   

          <button type="submit" 
              data-aos="fade"
              data-aos-duration="1000"
              data-aos-delay="400" className='hover:bg-blue-500 transition duration-1000  py-2 text-white  rounded-md w-64 my-2 border-1 border-black bg-blue-900'>LOGIN</button>
        </div>
        </form>
    </div>
      );
    };

export default Register;