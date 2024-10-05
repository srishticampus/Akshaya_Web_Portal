import React, { useState } from 'react'
import { VscEyeClosed } from "react-icons/vsc";
import { toast } from "react-toastify";
import '../../LandingPage/LandingNavbar.css'
import { VscEye } from "react-icons/vsc";
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../Services/CommonServices';
function Signup() {
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

        if (!data.password) {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleLogin = async (e) => {
        e.preventDefault()
        console.log(errors);

        console.log("api called", validate());

        if (!validate()) {
            toast.error('Please fix the errors in the form.');
            return;
        }

        try {
            const result = await login(data, 'adminLogin');

            if (result.success) {
                console.log(result);
                localStorage.setItem('admin', 1)
                toast.success('Login successful!');
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
        <div className='container'>

            <h2 className='akshaya-signup-mainText'>  Sign <span className='akshaya-signup-loginText'> Up !</span></h2>
            <div className='akshaya-signup-mainDiv'>

                <form onSubmit={handleLogin}>
                    <div className='row'>
                        <p>Village Officer</p>
                        <div className='col-md-5 p-2 '>
                            <input type="text" placeholder='Username' className='form-control p-2' name='username' onChange={handleChange}></input>
                            {errors.username && <div id="nameError" className="invalid-feedback">{errors.username}</div>}
                        </div>
                        <div className='col-md-5 p-2 '>
                            {/* <div style={{ position: 'relative' }}>
                                <input type={showPassword ? "text" : "password"}
                                    placeholder='password'
                                    name="password"
                                    onChange={handleChange}
                                    className='form-control p-2 mt-4'
                                    style={{ paddingRight: '40px' }} >

                                </input>
                                <div className="akshaya-signup-password-toggle-icon" onClick={togglePasswordVisibility}>
                                    {showPassword ? <VscEyeClosed /> : <VscEye />}
                                </div>

                            </div> */}
                            <input type="text" placeholder='Username' className='form-control p-2' name='email' onChange={handleChange}></input>
                        
                            {errors.password && <div id="nameError" className="invalid-feedback">{errors.password}</div>}
                        </div>

                    </div>
                    <div className='row'>
                        <p>Location</p>
                        <div className='col-md-5 p-2 '>
                        <input type="text" placeholder='Area Type' className='form-control p-2' name='area' onChange={handleChange}></input>
                            {errors.username && <div id="nameError" className="invalid-feedback">{errors.username}</div>}
                        </div>
                        <div className='col-md-5 p-2 '>
                        <input type="text" placeholder='District' className='form-control p-2' name='district' onChange={handleChange}></input>
                        
                        {errors.password && <div id="nameError" className="invalid-feedback">{errors.password}</div>}
                    </div>

                </div>
                    <button
                        type="submit"
                        className="btn btn-success akshaya-signup-button"
                    >Login</button>
                    <div className="mt-3 container akshaya-signup-link ">
                        <Link className="akshaya-signup-forgotpswd" to="/admin-forgotpwd">Forgot Password?</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup