import React, { useState } from 'react'
import { VscEyeClosed } from "react-icons/vsc";
import { toast } from "react-toastify";
import '../../LandingPage/LandingNavbar.css'
import { VscEye } from "react-icons/vsc";
import './Signup.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { register, registerWithFile, resetPassword } from '../../Services/CommonServices';

function AddCard() {
  

        const [data, setData] = useState('');
    
        const [showPassword, setShowPassword] = useState(false)
        const [errors, setErrors] = useState({});
        const navigate = useNavigate();
    
    
    
        const togglePasswordVisibility = () => {
            setShowPassword(!showPassword);
        };
        const handleChange = (e) => {
            const { name, value,file } = e.target;
          
            setData({
                ...data,
                [name]: value,
            });
        
         
        };
    
    const {id}=useParams()
        const validate = () => {
            const newErrors = {};
        
            const cardNumberRegex = /^\d{16}$/;
            const cvvRegex = /^\d{3}$/;

            if (!data.card) {
              
    
                newErrors.card = 'Card Number is required';
            } else if (!cardNumberRegex.test(data.card)) {
                newErrors.card = 'Invalid Card Number ';
            }
            if (!data.cvv) {
    
                newErrors.cvv = 'CVV Number is required';
            } 
            else if (!cvvRegex.test(data.cvv)) {
                newErrors.cvv = 'Invalid CVV Number ';
            }
            if (!data.expiry) {
                newErrors.expiry = 'Expiry Date is required';
            }
            if (!data.cardName) {
                newErrors.cardName = 'Card Holder Name is required';
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
                console.log(data);
                
                const result = await resetPassword(data, 'addCardData',id);
    
                if (result.success) {
                    console.log(result);
    
                    toast.success('Card details Entered successful!');
                    navigate('/akshaya-login');
    
    
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
    
                <h2 className='akshaya-signup-mainText'>  Add  Card for<span className='akshaya-signup-loginText'> Payment</span></h2>
                <div className='akshaya-signup-mainDiv'>
    
                    <form onSubmit={handleLogin}>
                        <div className='row'>
                            <p>Card Details</p>
                            <div className='col-md-5 p-2 '>
                                <input type="text" placeholder='Card Number' className='form-control p-2' name='card' onChange={handleChange}></input>
                                {errors.card && <div id="nameError" className="invalid-feedback">{errors.card}</div>}
                            </div>
                            <div className='col-md-5 p-2 '>
    
                                <input type="text" placeholder='Card Holder Name' className='form-control p-2' name='cardName' onChange={handleChange}></input>
    
                                {errors.cardName && <div id="nameError" className="invalid-feedback">{errors.cardName}</div>}
                            </div>
    
                        </div>
                        <div className='row'>
    
                           
                            <div className='col-md-5 p-2 '>
    
                                <input type="date" min={new Date().toISOString().split("T")[0]} placeholder='Expiry' className='form-control p-2' name='expiry' onChange={handleChange}></input>
    
                                {errors.expiry && <div id="nameError" className="invalid-feedback">{errors.expiry}</div>}
                            </div>
    
                       
                          
                            <div className='col-md-5 p-2 '>
                                <input type="text" placeholder='CVV Number' className='form-control p-2' name='cvv' onChange={handleChange}></input>
    
                                {errors.cvv && <div id="nameError" className="invalid-feedback">{errors.cvv}</div>}
    
                            </div>
                    </div>
                        <button
                            type="submit"
                            className="btn btn-success vo-signup-button"
                        >Next</button>
                        <div className="mt-3 container vo-signup-link ">
                            Already have an account ? &nbsp;
                            <Link className="vo-signup-login" to="/vo-login">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    


export default AddCard