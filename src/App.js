import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/privateroute';
import Register from './pages/register';
import Login from './pages/login';
import Landing from './pages/landingpage';
import Dashboard from './pages/dashboard'









function App() {
  return (

    <>
    <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
                <Route element ={<PrivateRoute />}>
                    <Route exact path='/dashboard' element={<Dashboard />}/>
                </Route>
      </Routes>
    </Router>
    </div>
    </>
  );
 
}

export default App;
