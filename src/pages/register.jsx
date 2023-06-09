import React , {useState} from 'react';
import axios from 'axios';
import Modal from 'react-modal';




const Register = () => {
    const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    first_name: '',
    last_name: '',
  });

const [errorMessage, setErrorMessage] = useState('');


Modal.setAppElement('#root');

const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
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
    form.append('email', formData.email);
    form.append('username', formData.username);
    form.append('password', formData.password);
    form.append('password2', formData.password2);
    form.append('first_name', formData.first_name);
    form.append('last_name', formData.last_name);

    axios.post('http://127.0.0.1:8000/myapp/users/create/',form)
      .then(response => {
        // Handle the response data
        console.log(response.data);
        openModal();
        setErrorMessage('');
        setTimeout(() => {
            setFormData({
            email: '',
            username: '',
            password: '',
            password2: '',
            first_name: '',
            last_name: '',
            });
        closeModal();
        window.location.href = '/';
         }, 2500);  
      })
      .catch(error => {
        // Handle the error
        if (error.response && error.response.data) {
          const responseMessage = error.response.data.message;
          const formattedMessage = responseMessage.replace("[", "").replace("]", "").replace("'", "").replace("'", "");
          setErrorMessage(formattedMessage);
        } else {
          setErrorMessage('An error occurred during registration');
        }
        console.error(error);
          });
   
     
    
    
    
  // Perform your form submission logic here
};



  return (
    
    <div className='flex flex-col justify-center items-center w-screen h-screen bg-slate-900' data-aos="fade" data-aos-duration="500">

    <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        data-aos="zoom-in" data-aos-duration="1500"
        appElement={document.getElementById('root')}
        style={{
        content: {
          width: '600px', // Set the desired width
          height: '200px', // Set the desired height
          margin: 'auto', // Center the modal horizontally
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'white',
          fontFamily: 'Gilroy', // Set the desired background color
        },
  }}
      > 
        <div className=' rounded-lg flex flex-col justify-center items-center w-full h-full bg-white' data-aos="zoom-in" data-aos-duration="1000">
          <p className='text-center text-3xl text-green-700 '>Registered Successfully!</p>
          <p className='text-center text-base text-black '>You may now login!</p>
        </div>
    </Modal>

        <form onSubmit={handleSubmit}>
        
        <div className='border-4 border-white rounded-xl flex flex-col h-max py-10 w-110  bg-yellow-50 shadow-2xl text-black justify-center items-center text-center'>
        <h1 data-aos="fade-out" data-aos-duration="1000" className='text-5xl  font-bold'>REGISTER</h1>
        <div className='h-5'>{errorMessage && <p className="text-red-500 text-2xl">{errorMessage}</p>}</div>
       
            <br/>
            <input
             className='text-white text-center py-2 my-1 px-10 rounded-md bg-slate-950 '
              type="text"
              name="username"
              placeholder='Username'
              value={formData.username}
              onChange={handleChange}
              required
              data-aos="fade" data-aos-duration="1000" data-aos-delay="50"
              
            />
          
      
          
       
            <input
             className='text-white text-center py-2 my-1 px-10 rounded-md bg-slate-950 '
              type="password"
              name="password"
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
              required
              data-aos="fade" data-aos-duration="1000" data-aos-delay="100"
            
            />
      

     
            <input
             className='text-white text-center py-2 my-1 px-10 rounded-md bg-slate-950 '
              type="password"
              name="password2"
              placeholder='Re-Type Password'
              value={formData.password2}
              onChange={handleChange}
              required
              data-aos="fade" data-aos-duration="1000" data-aos-delay="150"
            
            />
      
      

         
            <input
             className='text-white text-center py-2 my-1 px-10 rounded-md bg-slate-950 '
              type="text"
              name="email"
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              required
              data-aos="fade" data-aos-duration="1000" data-aos-delay="200"
              
            />
         
          
    
            <input
             className='text-white text-center py-2 my-1 px-10 rounded-md bg-slate-950 '
              type="text"
              name="first_name"
              placeholder='First Name'
              value={formData.first_name}
              onChange={handleChange}
              required
              data-aos="fade" data-aos-duration="1000" data-aos-delay="250"
            
            />
       

    
            <input
             className='text-white text-center py-2 my-1 px-10 rounded-md bg-slate-950 '
              type="text"
              name="last_name"
              placeholder='Last Name'
              value={formData.last_name}
              onChange={handleChange}
              required
              data-aos="fade" data-aos-duration="1000" data-aos-delay="300"
            
            />
          



          <button data-aos="fade" data-aos-duration="1000" data-aos-delay="350" type="submit" className='hover:bg-blue-500 transition duration-500  py-3 text-white  rounded-md w-64 my-2 border-1 border-black bg-blue-900'>Register</button>
        </div>
        </form>
    </div>
      );
    };

export default Register;