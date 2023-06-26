import React from 'react';
import axios from 'axios';
import '../App.css';

import Modal from 'react-modal'
import { useEffect , useState   } from 'react';
import Navbar from '../components/navbar';

import BASE_URL from '../baseurl';
import Header from '../components/header'


const Dashprofile = () => {

const [userData, setUserData] = useState({
  id:'',
  first_name: '',
  last_name: '',
  profile_picture:'',

});

  
const handleChange = (e) => {
  const { name, value } = e.target;
  setUserData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};





let userId = localStorage.getItem('session')
userId = userId.replace(/aAsdaK2lsladAad2das1AoxciIZiPZPozizyYZTGAbasdhGAgsne/g, '');
userId = userId.replace(/P1pap2p45aod9f8AzZJNnxcdas1AoxciaAsdaK2lsladIZiPZPozizyYZTGAbasdhGAgsne/g, '');


useEffect(() => {
  const fetchUserData = async () => {
    
    
    try {
      const response = await axios.get(BASE_URL + '/BETemplateApp/get_user/api/' + userId , {mode:'cors'}  );
      setUserData(prevUserData => ({
        ...prevUserData,
        id: response.data.id,
        first_name: response.data.first_name,
        last_name: response.data.last_name,
        profile_picture:response.data.profile_picture,
      }));
      
      
      
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
    
    
  };
  
  fetchUserData();
  
  
}, [userId]);

let username = userData.first_name + ' ' + userData.last_name;

const [selectedImage, setSelectedImage] = useState(null);
const [newImage, setNewImage] = useState(null);

const handleImageChange = (event) => {

  const file = event.target.files[0];
  


  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImage(reader.result);
      setNewImage(file);
    };
    reader.readAsDataURL(file);
  }

};



Modal.setAppElement('#root');

const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };




//let dec1 = 'aAsdaK2lsladAad2das1AoxciIZiPZPozizyYZTGAbasdhGAgsne'
//let dec2 = 'P1pap2p45aod9f8AzZJNnxcdas1AoxciaAsdaK2lsladIZiPZPozizyYZTGAbasdhGAgsne'

const handleSubmit = (event) => {
  event.preventDefault();
  //const base64Image = imageDataToBase64(newImage);
  const formData = new FormData();
    formData.append('id',userData.id);
    formData.append('first_name', userData.first_name);
    formData.append('last_name', userData.last_name);
    formData.append('profile_picture', newImage);


    axios.post(BASE_URL + '/BETemplateApp/update/api/',formData)
      .then(response => {
          const res = response;
          console.log(res);
    
          if (res.status === 200) {

            openModal();
             setTimeout(() => {
             closeModal();
             window.location.href = '/dashboard';
              }, 2000);  
        

            
             
            }
          else
             console.error();
          
      })
      .catch(error => {
        // Handle the error
        console.error(error);
          });


        };

  


  return (
    <div className='w-screen h-max overflow-y-scroll flex flex-col justify-center items-center bg-yellow-50 text-slate-900 overflow-x-hidden '>
      
    <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        data-aos="zoom-in" data-aos-duration="1500"
        appElement={document.getElementById('root')}
        style={{
        content: {
          width: '70%', // Set the desired width
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
        <div className='rounded-lg flex flex-col justify-center items-center w-full h-full xl:w-screen bg-white' data-aos="zoom-in" data-aos-duration="1000">
          <p className='text-center text-3xl text-green-700 '>Update Successful!</p>
          <p className='text-center text-md text-black '>Redirecting to Dashboard</p>
        </div>
    </Modal>

      <Navbar username={username} image={userData.profile_picture} id={userData.id} />
      <Header />

      <div className='h-screen w-screen flex justify-center '>
          <div className=' xl:w-1/6 w-0 h-screen xl:h-128 bg-white shadow-2xl '>

          </div>
          <div className='flex justify-center items-center text-center xl:w-4/5 w-screen xl:h-128 bg-white shadow-sm rounded-br-2xl '>
            <div className='bg-gray-100 h-110 w-full mx-2 mr-6 '>
              <h1 className='text-4xl my-4'>User Profile</h1>
            
                <div className='flex flex-col justify-center items-center space-y-1'>
              
                      <div className='flex justify-center items-center flex-col'>
                        <img src={selectedImage? selectedImage : BASE_URL + userData.profile_picture} alt="" className='h-32 w-32 object-cover rounded-full'  />
                          <label htmlFor="profimg" className='my-2'>
                            <span className='bg-blue-700  hover:bg-blue-900 transition duration-500 ease-in-out text-md text-yellow-50 rounded-md px-4 py-2 cursor-pointer'>Choose an Image</span>
                          </label>
                      </div> 
                                
                      <input
                        id='profimg'
                        className='text-white text-center py-2 px-10 bg-gray-950 rounded-md hidden'
                        type="file"
                        accept="image/jpeg, image/png, image/gif"
                        onChange={handleImageChange}
                        name="profile_picture"
                        required
                        data-aos="fade"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                        />   

                    <input
                        className='text-white text-center py-2 px-10 bg-gray-950 rounded-md'
                        type="text"
                        name="first_name"
                        placeholder='First Name'
                        value={userData.first_name}
                        onChange={handleChange}
                        required
                        data-aos="fade"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                        />
                    <input
                        className='text-white text-center py-2 px-10 bg-gray-950 rounded-md'
                        type="text"
                        name="last_name"
                        placeholder='Last Name'
                        value={userData.last_name}
                        onChange={handleChange}
                        required
                        data-aos="fade"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                        />
                    <button onClick={handleSubmit} className='bg-blue-500 hover:bg-blue-700 transition duration-500 ease-in-out text-md text-yellow-50 rounded-md px-4 py-2 cursor-pointer'>Update</button>
                </div>
                  
            </div>
          </div>
      </div>
    </div>
  );
};

export default Dashprofile;