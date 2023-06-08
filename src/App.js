import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
        <div className='space-x-5'>
          <a href="register"><button className='font-bold py-2 px-4 bg-yellow-50 border-1 border-white transition duration-500 hover:bg-yellow-100 text-black rounded-md shadow-2xl text-lg'>Register</button></a>
          <a href="login"><button className='font-bold py-2 px-8 bg-green-50 border-1 border-white transition duration-500 hover:bg-green-200 text-black rounded-md shadow-2xl text-lg'>Login</button></a>
        </div>
      </header>
    </div>
  );
}

export default App;
