// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Shop from './components/Shop/Shop';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div >
    <Header></Header>
    <Routes>
      <Route path='/' element={<Shop></Shop>}></Route>
      <Route path='/shop' element={  

        <Shop></Shop>
       }></Route>
      <Route path='/orders' element={<Orders/> }></Route>
      <Route path='/inventory' element={<Inventory/> }></Route>
      <Route path='/about' element={<RequireAuth>
        <About/> 
      </RequireAuth>}></Route>
      <Route path='/login' element={<Login/> }></Route>
      <Route path='/signup' element={<SignUp/> }></Route>
    </Routes>
    {/* <Shop></Shop> */}
    </div>
  );
}

export default App;
