
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

        const [errors, setErrors] = useState({});
        const navigate = useNavigate();
    
        
  const [showPassword, setShowPassword] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)

  const [showPassword3, setShowPassword3] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
};
const togglePasswordVisibility2 = () => {
  setShowPassword2(!showPassword2);
};
const togglePasswordVisibility3 = () => {
  setShowPassword3(!showPassword3);
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
              const result = await resetPassword(data,'resetPasswordVO',localStorage.getItem('vo'));
        
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
            <div>
                <div className='container admin-reset'>
        
        <h2 className='adminReset-mainText '>  Reset <span className='adminLogin-loginText'>Password !</span></h2>
        <div className='adminReset-mainDiv'>
        <p className='admin-rest-p mt-2'>
        Your new password must be different
        from previous password.
        </p>
            <form onSubmit={handleLogin}>
                 <div style={{ position: 'relative' }}>
                    <input type={showPassword ? "text" : "password"}
                        placeholder='Current Password'
                        name="oldpassword"
                        onChange={handleChange}
                        className='form-control p-2 mt-4'
                        style={{ paddingRight: '40px' }} >
        
                    </input>
                  
                    <div className="admin-login-password-toggle-icon" onClick={togglePasswordVisibility}>
                        {showPassword ? <VscEyeClosed  /> : <VscEye />}
                    </div>
                </div>
                {errors.oldpassword && <div id="nameError" className="invalid-feedback">{errors.oldpassword}</div>}
        
                <div style={{ position: 'relative' }}>
                    <input type={showPassword2 ? "text" : "password"}
                        placeholder='New Password'
                        name="password"
                        onChange={handleChange}
                        className='form-control p-2 mt-4'
                        style={{ paddingRight: '40px' }} >
        
                    </input>
                    <div className="admin-login-password-toggle-icon" onClick={togglePasswordVisibility2}>
                        {showPassword2 ? <VscEyeClosed  /> : <VscEye />}
                    </div>
                      
                </div>
                {errors.password && <div id="nameError" className="invalid-feedback">{errors.password}</div>}
        
               
                <div style={{ position: 'relative' }}>
                    <input type={showPassword3 ? "text" : "password"}
                        placeholder='Confirm Password'
                        name="cpassword"
                        onChange={handleChange}
                        className='form-control p-2 mt-4'
                        style={{ paddingRight: '40px' }} >
        
                    </input>
                    <div className="admin-login-password-toggle-icon" onClick={togglePasswordVisibility3}>
                        {showPassword3 ? <VscEyeClosed  /> : <VscEye />}
                    </div>
                      
                </div>
                {errors.cpassword && <div id="nameError" className="invalid-feedback">{errors.cpassword}</div>}
        
               
              <button
              type="submit"
              className="btn btn-success admin-login-button mt-3 align-center"
              >Confirm</button>
            </form>
        </div>
        </div>
            </div>
          )
    }
    
    export default VOResetPwd