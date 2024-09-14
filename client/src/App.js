
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

import Navbar from './components/NavBar/Navbar';
import SignUp from './components/Signup/SignUp';




function App() {
  return (
    <>
      <Navbar/>
      <div className='main_container'>
        {/* <Login /> */}
        {/* <SignUp /> */}
        <Home/>
        
      </div>
    </>
  );
}

export default App;
