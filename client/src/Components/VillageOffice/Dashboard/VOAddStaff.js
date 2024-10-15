

    import React, { useState } from 'react'
    import { VscEyeClosed } from "react-icons/vsc";
    import { toast } from "react-toastify";
    import '../../LandingPage/LandingNavbar.css'
    import { VscEye } from "react-icons/vsc";
    import '../Signup/VOSignup.css'
    import { Link, useNavigate } from 'react-router-dom';
    import { login, register } from '../../Services/CommonServices';
    function VOAddStaff() {        const [data, setData] = useState({
            name: '',
            email: '',
            password: '',
            address:'',
            voId:localStorage.getItem('vo'),
            cpassword:'',
            designation:'',
            contact:''
        });
    
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
            // }
        };
    
        const validate = () => {
            const newErrors = {};
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    
            if (!data.email) {
                console.log("here");
    
                newErrors.email = 'Email is required';
            } else if (!emailRegex.test(data.email)) {
                newErrors.email = 'Invalid email format';
            }
            if (!data.name) {
    
                newErrors.name = 'Name is required';
            } if (!data.designation) {
                newErrors.designation = 'Designation is required';
            }
            if (!data.contact) {
                newErrors.contact = 'Contact is required';
          
            }
           
            if (!data.address) {
                newErrors.address = 'Address is required';
            }
            if (!data.pincode) {
                newErrors.pincode = 'Pincode is required';
            }
            if (!data.cpassword) {
                newErrors.cpassword = 'Confirm Password is required';
            }
            
            if (!data.password) {
                newErrors.password = 'Password is required';
            } else if (!passwordRegex.test(data.password)) {
                newErrors.password = 'Password Must Contain 1 Uppercase,1 Symbol and 1 Number with minimum 6 characters';
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
    
            console.log("api called", validate());
    
            if (!validate()) {
                toast.error('Please fix the errors in the form.');
                return;
            }
    
            try {
                const result = await register(data, 'registerStaff');
    
                if (result.success) {
                    console.log(result);
                   
                    toast.success('Staff Added successfully !');
                    navigate(-1);
    
    
                } else {
                    console.error('Registration error:', result);
                    toast.error(result.message);
                }
            } catch (error) {
                console.error('Unexpected error:', error);
                toast.error('An unexpected error occurred during Registration');
            }
        };
        return (
            <div className='container'>
    
                <h2 className='vo-add-staff-mainText'>  Add  <span className='vo-signup-loginText'> Staff</span></h2>
                <div className='vo-add-staff-mainDiv'>
    
                    <form onSubmit={handleLogin}>
                        <div className='row'>
                            <p>Village Staff</p>
                            <div className='col-md-5 p-2 '>
                                <input type="text" placeholder='Staff Name' className='form-control p-2' name='name' onChange={handleChange}></input>
                                {errors.name && <div id="nameError" className="invalid-feedback">{errors.name}</div>}
                            </div>
                            <div className='col-md-5 p-2 '>
                               
                                <input type="text" placeholder='E-Mail' className='form-control p-2' name='email' onChange={handleChange}></input>
    
                                {errors.email && <div id="nameError" className="invalid-feedback">{errors.email}</div>}
                            </div>
    
                        </div>
                        <div className='row'>
                          
                            <div className='col-md-5 p-2 '>
                            <input type="text" placeholder='Contact' className='form-control p-2' name='contact' onChange={handleChange}></input>
    
                                {errors.contact && <div id="nameError" className="invalid-feedback">{errors.contact}</div>}
                            </div>
                            <div className='col-md-5 p-2 '>
                            <input type="text" placeholder='Role / Designation' className='form-control p-2' name='designation' onChange={handleChange}></input>
    
    
                                {errors.designation && <div id="nameError" className="invalid-feedback">{errors.designation}</div>}
                            </div>
    
                        </div>
                        <div className='row'>
    
                            <div className='col-md-5 p-2 '>
                                <p>Address</p>
                                <textarea  className='form-control p-2' name='address' onChange={handleChange}/>
                                {errors.address && <div id="nameError" className="invalid-feedback">{errors.address}</div>}
                            </div>
    
    
                            <div className='col-md-5 p-2 '>
                            <p>Pincode</p>
        <input type="text" placeholder='pincode' className='form-control p-2' name='pincode' onChange={handleChange}></input>
    
        {errors.pincode && <div id="nameError" className="invalid-feedback">{errors.pincode}</div>}
                               </div>
    
                        </div>
                      
    
    <div className='row'>
    
    <div className='col-md-5 p-2 '>
    <div><p>Password</p></div>
        <div style={{ position: 'relative' }}>
                                    <input type={showPassword ? "text" : "password"}
                                        placeholder='Password'
                                        name="password"
                                        onChange={handleChange}
                                        className='form-control p-2 mt-4'
                                        style={{ paddingRight: '40px' }} >
    
                                    </input>
                                    <div className="vo-signup-password-toggle-icon" onClick={togglePasswordVisibility}>
                                        {showPassword ? <VscEyeClosed /> : <VscEye />}
                                    </div>
    
                                </div>
                                {errors.password && <div id="nameError" className="invalid-feedback">{errors.password}</div>}
    
    </div>
    <div className='col-md-5 p-2 '>
        <p> &nbsp;</p>
     <div style={{ position: 'relative' }}>
                                    <input type={showPassword ? "text" : "password"}
                                        placeholder='Confirm Password'
                                        name="cpassword"
                                        onChange={handleChange}
                                        className='form-control p-2 mt-4'
                                        style={{ paddingRight: '40px' }} >
    
                                    </input>
                                    <div className="vo-signup-password-toggle-icon" onClick={togglePasswordVisibility}>
                                        {showPassword ? <VscEyeClosed /> : <VscEye />}
                                    </div>
    
                                </div>
        {errors.cpassword && <div id="nameError" className="invalid-feedback">{errors.cpassword}</div>}
    </div>
    </div>
                        <button
                            type="submit"
                            className="btn btn-success vo-signup-button"
                        >SignUp</button>
                        <div className="mt-3 container vo-signup-link ">
                            Already have an account ? &nbsp;
                            <Link className="vo-signup-login" to="/vo-login">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    
 
export default VOAddStaff