
import './App.css';
import Login from './components/Login/Login';

import Navbar from './components/NavBar/Navbar';
import SignUp from './components/Signup/SignUp';


function App() {
  return (
    <>
      <Navbar/>
      <div className='main_container'>
        {/* <Login /> */}
        <SignUp />
      </div>
    </>
  );
}

export default App;
