
import { useContext } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'
import Navbar from './components/NavBar/Navbar';
import SignUp from './components/Signup/SignUp';
import AuthContext, { AuthProvider } from './Contexts/Authcontext';




function App() {
  const {loginState} = useContext(AuthContext)
  console.log(loginState)
  return (
    <>
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/login' element={! loginState?<Login/>: <Navigate to='/' />} />
          
          <Route path='/signup' element={! loginState?<SignUp/> : <Navigate to='/' />} />

          <Route 
            path='/' element={loginState ? <Home/> : <Navigate to='/signup' />}
          />
        </Routes>

        
    </Router>
     </>
  );
}

export default App;
