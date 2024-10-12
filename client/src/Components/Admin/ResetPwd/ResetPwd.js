import React, { useEffect, useState } from 'react'
import '..//AdminLogin.css'
import { VscEyeClosed } from "react-icons/vsc";
import { toast } from "react-toastify";
import '../../LandingPage/LandingNavbar.css'
import { VscEye } from "react-icons/vsc";import { FiEye } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../Services/CommonServices';
import './ResetPwd.css'
function ResetPwd() {
  const [data, setData] = useState('');

  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
};
const [errors, setErrors] = useState({});
const navigate = useNavigate();
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

  if (!data.oldpassword) {
      console.log("here");
      
    newErrors.oldpassword = 'old Password is required';
  } else if (!emailRegex.test(data.email)) {
    newErrors.email = 'Invalid email format';
  }

  if (!data.password) {
    newErrors.password = 'Password is required';
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
    const result = await login(data,'adminLogin');

    if (result.success) {
      console.log(result);
      localStorage.setItem('admin',1)
      navigate('/admin-home');

     
    } else {
      console.error('Login error:', result);
      toast.error(result.message);
    }
  } catch (error) {
    console.error('Unexpected error:', error);
    toast.error('An unexpected error occurred during login');
  }
};
  return (
    <div>
        <div className='container admin-reset'>

<h2 className='adminLogin-mainText '>  Reset <span className='adminLogin-loginText'>Password !</span></h2>
<div className='adminLogin-mainDiv'>

    <form onSubmit={handleLogin}>
         <div style={{ position: 'relative' }}>
            <input type={showPassword ? "text" : "password"}
                placeholder='Current Password'
                name="oldpassword"
                onChange={handleChange}
                className='form-control p-2 mt-4'
                style={{ paddingRight: '40px' }} >

            </input>
          
              
        </div>
        {errors.oldpassword && <div id="nameError" className="invalid-feedback">{errors.oldpassword}</div>}

        <div style={{ position: 'relative' }}>
            <input type={showPassword ? "text" : "password"}
                placeholder='New Password'
                name="password"
                onChange={handleChange}
                className='form-control p-2 mt-4'
                style={{ paddingRight: '40px' }} >

            </input>
          
              
        </div>
        {errors.password && <div id="nameError" className="invalid-feedback">{errors.password}</div>}

       
        <div style={{ position: 'relative' }}>
            <input type={showPassword ? "text" : "password"}
                placeholder='Confirm Password'
                name="cpassword"
                onChange={handleChange}
                className='form-control p-2 mt-4'
                style={{ paddingRight: '40px' }} >

            </input>
            <div className="admin-login-password-toggle-icon" onClick={togglePasswordVisibility}>
                {showPassword ? <VscEyeClosed  /> : <VscEye />}
            </div>
              
        </div>
        {errors.cpassword && <div id="nameError" className="invalid-feedback">{errors.cpassword}</div>}

       
      <button
      type="submit"
      className="btn btn-success admin-login-button"
      >Confirm</button>
    </form>
</div>
</div>
    </div>
  )
}

export default ResetPwd