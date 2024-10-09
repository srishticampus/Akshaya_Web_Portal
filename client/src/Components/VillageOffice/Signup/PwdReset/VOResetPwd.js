
    import React, { useState } from 'react'
    import '../../../Admin/AdminLogin.css'
    import { VscEyeClosed } from "react-icons/vsc";
    import { toast } from "react-toastify";
    import '../../../LandingPage/LandingNavbar.css'
    import { VscEye } from "react-icons/vsc";import { FiEye } from "react-icons/fi";
    import { Link, useNavigate } from 'react-router-dom';
    import { forgotPassword, login } from '../../../Services/CommonServices';
    import '../VOLogin.css'
    import './VoPwd.css'
    
    function VOResetPwd() {
        const [data, setData] = useState('');
    
        const [showPassword, setShowPassword] = useState(false)
        const [errors, setErrors] = useState({});
        const navigate = useNavigate();
    
        const togglePasswordVisibility = () => {
            setShowPassword(!showPassword);
        };
        const handleChange = (e) => {
            const { name, value } = e.target;
            setData({
              ...data,
              [name]: value,
            });
          };
        const validate = () => {
            const newErrors = {};
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
            if (!data.email) {
                console.log("here");
                
              newErrors.email = 'Email is required';
            } else if (!emailRegex.test(data.email)) {
              newErrors.email = 'Invalid email format';
            }
        
          
        
            setErrors(newErrors);
            return Object.keys(newErrors).length === 0;
          };
        
          const handleLogin = async (e) => {
            e.preventDefault()
            console.log(errors);
            
            console.log("api called",validate());
            
            if (!validate()) {
              toast.error('Please fix the errors in the form.');
              return;
            }
        
            try {
              const result = await forgotPassword(data,'forgotPasswordVO');
        
              if (result.success) {
                console.log(result);
                toast.success('Please Check your mail to reset the Password')
    
               
              } else {
                console.error(' error:', result);
                toast.error(result.message);
              }
            } catch (error) {
              console.error('Unexpected error:', error);
              toast.error('An unexpected error occurred during login');
            }
          };
        return (
            <div className='container'>
    
                <h2 className='voLogin-mainText vo-pwd-main'>  Forget <span className='adminLogin-loginText'>Password?</span></h2>
                <div className='adminLogin-mainDiv'>
              <p className='vo-pwd-para mt-5'>Enter your E-mail below to receive your password reset instruction</p>
                    <form onSubmit={handleLogin}>
                        <input type="text" placeholder='E-Mail' className='form-control p-2 mt-5' name='email' onChange={handleChange}></input>
                        {errors.email && <div id="nameError" className="invalid-feedback">{errors.email}</div>}
    
                        
                      <button
                      type="submit"
                      className="btn btn-success admin-login-button  mb-5"
                      >Next</button>
                    </form>
                    
                </div>
            </div>
        )
    }
    
    export default VOResetPwd