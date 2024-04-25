import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import MyCart from './Components/MyCart';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>

      <Routes>
        
          <Route path='/home' element={<Home/>}/>
          <Route path='/mycart' element={<MyCart/>}/>


      </Routes>
      
    </div>
  );
}

export default App;
