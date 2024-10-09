
    import React, { useState } from 'react'
    import '../../../Admin/AdminLogin.css'
    import { VscEyeClosed } from "react-icons/vsc";
    import { toast } from "react-toastify";
    import '../../../LandingPage/LandingNavbar.css'
    import { VscEye } from "react-icons/vsc";import { FiEye } from "react-icons/fi";
    import { Link, useNavigate, useParams } from 'react-router-dom';
    import { forgotPassword, login, resetPassword } from '../../../Services/CommonServices';
    import '../VOLogin.css'
    import './VoPwd.css'
    
    function VOResetPwd() {
        const [data, setData] = useState('');
    
        const [showPassword, setShowPassword] = useState(false)
const {id}=useParams()
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
            const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

           
            if (!data.password) {
                newErrors.password = 'Password is required';
            } else if (!passwordRegex.test(data.password)) {
                newErrors.password = 'Password Must Contain 1 Uppercase,1 Symbol and 1 Number with minimum 6 characters';
              }
              if (!data.cpassword) {
                newErrors.cpassword = 'Confirm Password is required';
            }
            else if (data.password!=data.cpassword) {
                newErrors.password = 'Password and Confirm Password must be the same !';
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
              const result = await resetPassword(data,'resetPasswordVO',id);
        
              if (result.success) {
                console.log(result);
                toast.success('Password Updated Successfully')
    navigate('/vo-login')
               
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
    
                <h2 className='voLogin-mainText vo-pwd-main'>  Reset <span className='adminLogin-loginText'>Password!</span></h2>
                <div className='adminLogin-mainDiv'>
              <p className='vo-pwd-para mt-3'>Your New Password Must Be Different
              From Previous Password.</p>
                    <form onSubmit={handleLogin}>
                    <div style={{ position: 'relative' }}>
                        <input type={showPassword ? "text" : "password"} placeholder='New Password' className='form-control p-2 mt-5' name='password' onChange={handleChange}></input>
                        </div>
                        {errors.password && <div id="nameError" className="invalid-feedback">{errors.password}</div>}
                        <div style={{ position: 'relative' }}>
                        <input type={showPassword ? "text" : "password"} placeholder='Confirm Password' className='form-control p-2 mt-3' name='cpassword' onChange={handleChange}></input>
                        <div className="admin-login-password-toggle-icon" onClick={togglePasswordVisibility}>
                            {showPassword ? <VscEyeClosed  /> : <VscEye />}
                        </div></div>
                        {errors.cpassword && <div id="nameError" className="invalid-feedback">{errors.cpassword}</div>}
    
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