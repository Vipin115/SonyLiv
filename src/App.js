import logo from './logo.svg';

import './App.css';
import { Crousel } from './Components/Crousel/crousel';
import { ReactCurousel } from './Components/Slider/Slider';
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';
import { Home } from './Components/Homepage/Home';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Login } from './Components/Login/Login';
import { Signup } from './Components/Signup.jsx/Signup';
import { Video } from './Components/Video/video';


function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/signup' element={<Signup/>}/>
       <Route path = "/video" element= {<Video/>}/>
     </Routes>
      <Footer/>
    </div>
  );
}

export default App;
