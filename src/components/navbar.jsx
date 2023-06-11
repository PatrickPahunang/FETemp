
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'



library.add(faHouse,faUser,faGear);



const logout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  }
  
const Navbar = ({ username, image  }) => {
return (
    <div className='space-y-1 text-white bg-slate-900 absolute left-10 w-72 h-max px-10 rounded-3xl shadow-2xl' data-aos="fade-right" data-aos-duration="500" >
    
    <div className='flex flex-col justify-start items-center h-full pb-32 pt-10'>
        <div className='mb-10 flex justify-center flex-col items-center'>
            <div className='text-3xl mb-8 font-bold'> Company XYZ</div>
            <div className=' bg-white rounded-full h-32 w-32 object-cover flex justify-center items-center mb-1'> <img src={image} alt="Display" className='object-cover object-top rounded-full h-32 w-32' /> </div>
            <div className=''>Welcome back,</div>
            <div className=' text-2xl font-bold'>{username}</div>
        </div>

            <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                <div className="squircle flex rounded-2xl my-1  border-2 hover:border-2 hover:translate-x-3 border-yellow-50 cursor-pointer hover:bg-yellow-50 hover:text-slate-900 transition duration-500" >
                  <FontAwesomeIcon icon={faHouse} className='text-slate-900  transition duration-400  bg-yellow-50  border-2 border-yellow-50' /> <div className='flex justify-start ml-4 items-center hover:text-slate-900  text-yellow-50  w-24'>Home</div>
                </div>
            </div>

            <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="550">
                <div className="squircle flex rounded-2xl my-1  border-2 hover:border-2 hover:translate-x-3 border-yellow-50 cursor-pointer hover:bg-yellow-50 hover:text-slate-900 transition duration-500" >
                  <FontAwesomeIcon icon={faUser} className='text-slate-900  transition duration-400  bg-yellow-50  border-2 border-yellow-50' /> <div className='flex justify-start ml-4 items-center hover:text-slate-900  text-yellow-50  w-24'>Profile</div>
                </div>
            </div>

            <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
                <div className="squircle flex rounded-2xl my-1  border-2 hover:border-2 hover:translate-x-3 border-yellow-50 cursor-pointer hover:bg-yellow-50 hover:text-slate-900 transition duration-500" >
                  <FontAwesomeIcon icon={faGear} className='text-slate-900  transition duration-400  bg-yellow-50  border-2 border-yellow-50' /> <div className='flex justify-start ml-4 items-center hover:text-slate-900   text-yellow-50 w-24'>Setting</div>
                </div>
            </div>
        <button onClick={logout} className=' mt-10 py-2 w-24 bg-red-500 text-white text-sm border-1 border-white transition duration-500 hover:bg-red-900 rounded-md shadow-2xl' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600" >Logout</button>
    </div>
  </div>
)

};

export default Navbar;