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
    form.append('first_name', formData.first_name);
    form.append('last_name', formData.last_name);

    axios.post('http://127.0.0.1:8000/myapp/users/create/',form)
      .then(response => {
        // Handle the response data
        console.log(response.data);
        openModal();
        setTimeout(() => {
            setFormData({
            email: '',
            username: '',
            password: '',
            first_name: '',
            last_name: '',
            });
        closeModal();
        window.location.href = '/';
         }, 2000);  
      })
      .catch(error => {
        // Handle the error
        console.error(error);
          });
   
     
    
    
    
  // Perform your form submission logic here
};
  


  return (
    
    <div className='flex flex-col justify-center items-center w-screen h-screen bg-blue-100' data-aos="fade" data-aos-duration="500">

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
        <div className=' rounded-lg flex flex-col justify-center items-center w-full h-full bg-white'>
          <p className='text-center text-3xl text-green-700 '>Registered Successfully!</p>
          <p className='text-center text-base text-black '>You may now login!</p>
        </div>
    </Modal>

        <form onSubmit={handleSubmit}>
        
        <div className=' rounded-xl flex flex-col h-max py-10  w-96 bg-slate-700 text-white justify-center items-center text-center'>
        <h1 className='text-5xl my-4 mb-10'>REGISTER</h1>
        <label>
            Username<br/>
            <input
             className='text-black text-center py-2 px-10 rounded-md'
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              
            />
          </label>
          
          <label>
            Password<br/>
            <input
             className='text-black text-center py-2 px-10 rounded-md'
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            
            />
          </label>

          <label>
            Email<br/>
            <input
             className='text-black text-center py-2 px-10 rounded-md'
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              
            />
          </label>

          <label>
            First Name<br/>
            <input
             className='text-black text-center py-2 px-10 rounded-md'
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
            
            />
          </label>

          <label>
            Last Name<br/>
            <input
             className='text-black text-center py-2 px-10 rounded-md'
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
            
            />
          </label>



          <button type="submit" className='hover:bg-blue-700 transition duration-500 hover:text-white py-3 text-black  rounded-md px-24 my-4 border-1 border-black bg-blue-300'>Submit</button>
        </div>
        </form>
    </div>
      );
    };

export default Register;