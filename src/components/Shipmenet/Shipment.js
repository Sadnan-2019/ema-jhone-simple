import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
          const [users] = useAuthState(auth)
          const [name,setName] = useState('')
          const [email,setEamil] = useState('')
          const [address,setAddress] = useState('')
          const [phone,setPhone] = useState('')
          const [error,setError] = useState('')


          
          const handleNameBlur=(event)=>{

                    setName(event.target.value)
          }
         
          const handleAddressBlur=(event)=>{

                    setAddress(event.target.value)
          }
          const handlePhoneBlur=(event)=>{

                    setPhone(event.target.value)
          }


           const handleCreateUser=(event)=>{

                    event.preventDefault();
                    const shipping={name,email,address,phone};
                    console.log(shipping);


           }
          return (
                    <div>
                         <h3>this iks shipment</h3>  


                         <div className="container">
        <div className="row">
          <div className="">
            <h3 className="text-center text-warning mt-5 ">Shipping Info</h3>

            <div className="bg-success p-4 w-50 mx-auto rounded ">
              <form
                onSubmit={handleCreateUser}
                className="form-container w-100 mx-auto bg-dark text-light  "
              >
                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input
                    onBlur={handleNameBlur}
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    name="name"
                    required
                  />
                  {/* <p className='text-danger'>{error}</p> */}
                </div>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                     type="email"
                    className="form-control"
                    placeholder="Enter your eamil"
                    name="email"
                    required
                    value={users?.email}
                    readOnly

                  />
                  {/* <p className='text-danger'>{error}</p> */}
                </div>
                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <input
                    onBlur={handleAddressBlur}
                    type="text"
                    className="form-control"
                    placeholder="Enter your address"
                    name="address"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    onBlur={handlePhoneBlur}
                    type="number"
                    className="form-control"
                    placeholder="Enter your phone"
                    name="phone"
                    required
                  />
                  <p className="text-danger">{error}</p>
                </div>

                <div className="d-flex   ">
                  <input
                    type="submit"
                    className="btn btn-info mx-auto w-100 m-4"
                    value="Add Shipping "
                  />
                </div>
              </form>
              {/* <p className="mt-4 text-center text-light">
                Already Have an Account?
                <Link to="/login" className="text-warning     ">
                  Login
                </Link>
              </p> */}
            </div>
          </div>
        </div>
      </div>   
                    </div>
          );
};

export default Shipment;