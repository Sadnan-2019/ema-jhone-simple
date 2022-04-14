import React from "react";
import './Header.css'
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {

  const [users] = useAuthState(auth)
  console.log(users)
  const logout = () => {
    signOut(auth);
  };
  return (
    <div>
      <nav className="header">
        <img src={logo} alt="" />
        <div>
        <Link to={"/shop"}  >Shop</Link>
        
        <Link to={"/orders"}  >Order</Link>
        <Link to={"/inventory"}  >Inventory</Link>
        <Link to={"/about"} >About</Link>
        <span className="text-light">{users?users?.email : ""}</span>
       { 
       users ? <button className="btn btn-info" onClick={logout}>Sign Out</button>
       
       
       :
       <Link to={"/login"} >Login</Link>
       
       
       }
        {/* <a href="/about">About</a> */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
