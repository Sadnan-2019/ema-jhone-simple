import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const [createUserWithEmailAndPassword,users ] = useCreateUserWithEmailAndPassword(auth)

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
    // console.log(event.target.value)
  };
  const handlepasswordBlur = (event) => {
    setPassword(event.target.value);
    // console.log(event.target.value)
  };
  const handleConfirmPasswordBlur = (event) => {
    setConfirmpassword(event.target.value);
    // console.log(event.target.value)
  };

  if(users){
          navigate('/shop')

  }
  const handleCreateUser = (event) => {
    event.preventDefault();

    if (password !== confirmpassword) {
      setError("Password did not match");
      return;
    }
    if(password <6){
              setError("Password more longer six character")
    }


    createUserWithEmailAndPassword(email,password);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="">
            <h3 className="text-center text-warning mt-5 "> Sign-Up</h3>

            <div className="bg-success p-4 w-50 mx-auto rounded ">
              <form
                onSubmit={handleCreateUser}
                className="form-container w-100 mx-auto bg-dark text-light  "
              >
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    onBlur={handleEmailBlur}
                    type="email"
                    className="form-control"
                    placeholder="Enter your eamil"
                    name="email"
                    required
                  />
                  {/* <p className='text-danger'>{error}</p> */}
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    onBlur={handlepasswordBlur}
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    name="password"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Confirm Password</label>
                  <input
                    onBlur={handleConfirmPasswordBlur}
                    type="password"
                    className="form-control"
                    placeholder="Enter your confirm password"
                    name="confirm-password"
                    required
                  />
                  <p className="text-danger">{error}</p>
                </div>

                <div className="d-flex   ">
                  <input
                    type="submit"
                    className="btn btn-info mx-auto w-100"
                    value="SignUp"
                  />
                </div>
              </form>
              <p className="mt-4 text-center text-light">
                Already Have an Account?
                <Link to="/login" className="text-warning     ">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
