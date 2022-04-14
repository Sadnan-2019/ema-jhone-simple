import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
          const [email,setEmail] = useState('');
          const [password,setPassword] = useState('');
          const navigate=useNavigate()
          const location =useLocation();
          const from =location.state?.from?.pathname || "/"


          const [signInWithEmailAndPassword,users,loading,
                    error]  = useSignInWithEmailAndPassword(auth)
          
          const handleEmailBlur=(event)=>{
                    setEmail(event.target.value);

          }
          const handlePasswordBlur=(event)=>{
                    setPassword(event.target.value)
          }
          if(users){
                    // navigate("/shop")
                    navigate(from, { replace: true });



          }

          const handleSignIn=(event)=>{
                    event.preventDefault();
                    signInWithEmailAndPassword(email,password)

          }

    
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="">
            <h3 className="text-center text-warning mt-5 "> Login</h3>
            {
                      loading && <div className="d-flex">

<button className="btn btn-primary" type="button" disabled>
                      <span className="spinner-grow spinner-grow-sm mx-auto" role="status" aria-hidden="true"></span>
                      Loading...
                    </button>
                      </div>

            }

            



            <div className="bg-success p-4 w-50 mx-auto rounded ">
              <form onSubmit={handleSignIn} className="form-container w-100 mx-auto bg-dark text-light  ">
                <div className="mb-3">
                  <label   className="form-label">
                    Email address
                  </label>
                  <input
                  onBlur={handleEmailBlur}
                    type="email"
                    className="form-control"
                    placeholder="Enter your eamil"
                    name="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label   className="form-label">
                    Password
                  </label>
                  <input
                  onBlur={handlePasswordBlur}
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    name="password"
                    required
                  />
                </div>
                <p>{error?.message}</p>
                 
                <div className="d-flex   ">
                  <input
                    type="submit"
                    className="btn btn-info mx-auto w-100"
                    value="Login"
                  />
                </div>
              </form>
              <p className="mt-4 text-center text-light">
                New to ema-jhone?
                <Link to="/signup" className="text-warning     ">
                  Create New Account
                </Link> 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
