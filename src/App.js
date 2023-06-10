import './App.css';
import { BrowserRouter as Router, Routes, Route ,Navigate  } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
import Landing from './pages/landingpage';
import Dashboard from './pages/dashboard'
//import PrivateRoute from './components/privateroute';










function App() {

 
  const isAuthenticated = localStorage.getItem('token') !== null;
  console.log(isAuthenticated)

  return (
    <>
    <div className="App">

    <Router>
      <Routes>
        <Route exact path={''} element={<Landing />} />
        <Route exact path={'/register'} element={<Register />} />
        <Route exact path={'/login'} element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />}/>
        <Route exact path={'/dashboard'} element={isAuthenticated ? <Login /> : <Navigate to="/login" />}/>
        <Route exact path={'/dashboard/:userId'} element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}/>
      </Routes>
    </Router>
    </div>
    </>
  );

}

export default App;
