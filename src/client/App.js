import React from 'react';
import Home from './Home';
import {useLocation,Route,Routes, BrowserRouter} from 'react-router-dom';
import Login from './Login';
import Navbar from './Navbar';
import './App.css';
import SignUp from './SignUp';
import Premium from './Premium'
const AppLayout=()=>{
  const location = useLocation();
  const hideNavbarOn = ['/login','/signup','/premium'];
  
  return(
    <>  
      {!hideNavbarOn.includes(location.pathname) && <Navbar />}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/premium' element={<Premium/>}/>
        </Routes>
    </>
    );
}
function App() {
  return(
    <BrowserRouter>
      <AppLayout/>
    </BrowserRouter>
  );
  
}
export default App;
