
import React, { useState } from 'react'
import { VscEyeClosed } from "react-icons/vsc";
import { toast } from "react-toastify";
import '../../../LandingPage/LandingNavbar.css'
import { VscEye } from "react-icons/vsc";
import '../../Signup/Signup.css'
import './Certificate.css'
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import { register, registerWithFile } from '../../../Services/CommonServices';
function GetUserData() {


    const [data, setData] = useState('');

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value, file } = e.target;

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
        const phoneRegex = /^\d{10}$/;

        if (!data.email) {
            console.log("here");

            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(data.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!data.name) {

            newErrors.name = 'Name is required';
        } if (!data.district) {
            newErrors.district = 'District is required';
        }
       
        if (!data.contact) {
            newErrors.contact = 'Phone Number is required';
        }
        else if (!phoneRegex.test(data.contact)) {
            newErrors.contact = 'Phone Number Must Contain 10 digits ';
        }


        if (!data.pincode) {
            newErrors.pincode = 'Pincode is required';
        }
       
        if (!data.type) {
            newErrors.type = 'Certificate Type is required';
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

            const result = await register(data, 'addApplicant');

            if (result.success) {
                console.log(result);

                toast.success('Registration successful!');
                navigate(`/apply-certificate?type=${data.type}&aid=${result.user._id}`);

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
            <div className='row'>
                <div className="row position-relative">
                    <div className="col-3">
                        <h2 className="apply-cert-mainText1">Apply Certificates</h2>
                    </div>
                    <div className="col-6 ms-auto text-end position-relative apply-cert-mainText1">

                    </div>
                </div>

            </div>

            <h2 className='applicant-mainText'>  Applicant Information</h2>
            <div className='apply-cert-mainDiv'>

                <form onSubmit={handleLogin}>
                    <div className='row'>
                        <div className='col-md-10 p-2'>
                            <div className="select-wrapper">
                                <select
                                    
                                    className="form-control"
                                    name="type"
                                    onChange={handleChange}
                                    value={data.type}
                                >
                                    <option value="">Choose a Service</option>
                                    <option value="PropertyTax">Property Tax</option>
                                    <option value="AadharUpdation">Aadhar Updation</option>
                                    <option value="PanCardServices">Pan Card Services</option>
                                    <option value="ElectionManagement">Election Management</option>
                                    <option value="TicketBooking">Ticket Booking</option>
                                    <option value="Income">Income Certificate</option>
                                    <option value="Caste">Caste Certificate</option>
                                    <option value="Nativity">Nativity Certificate</option>


                                </select>
                                <span className="admin-drop-icon">
                                    <RiArrowDropDownLine />
                                </span>
                                {errors.type && <div id="nameError" className="invalid-feedback">{errors.type}</div>}

                            </div>
                        </div>
                    </div>
                    <div className='row'>
                       
                        <div className='col-md-5 p-2 '>
                            <input type="text" placeholder='Full Name' className='form-control p-2' name='name' onChange={handleChange}></input>
                            {errors.name && <div id="nameError" className="invalid-feedback">{errors.name}</div>}
                        </div>
                        <div className='col-md-5 p-2 '>

                            <input type="text" placeholder='Phone Number' className='form-control p-2' name='contact' onChange={handleChange}></input>

                            {errors.contact && <div id="nameError" className="invalid-feedback">{errors.contact}</div>}
                        </div>

                    </div>
                    <div className='row'>


                        <div className='col-md-10 p-2 '>

                            <input type="text" placeholder='E-Mail' className='form-control p-2' name='email' onChange={handleChange}></input>

                            {errors.email && <div id="nameError" className="invalid-feedback">{errors.email}</div>}
                        </div>

                    </div>
                    <div className='row'>
                   
                        <div className='col-md-5 p-2 '>
                        <input type="text" placeholder='pincode' className='form-control p-2' name='pincode' onChange={handleChange}></input>

{errors.pincode && <div id="nameError" className="invalid-feedback">{errors.pincode}</div>}

                        </div>
                        <div className='col-md-5 p-2 '>
                            <select placeholder='District' className='form-control p-2' name='district' onChange={handleChange} value={data.district}>
                                <option value="">District</option>

                                <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                                <option value="Kollam">Kollam</option>
                                <option value="Pathanamthitta">Pathanamthitta</option>
                                <option value="Alappuzha">Alappuzha</option>
                                <option value="Kottayam">Kottayam</option>
                                <option value="Idukki">Idukki</option>
                                <option value="Ernakulam">Ernakulam</option>
                                <option value="Thrissur">Thrissur</option>
                                <option value="Palakkad">Palakkad</option>
                                <option value="Malappuram">Malappuram</option>
                                <option value="Kozhikode">Kozhikode</option>
                                <option value="Wayanad">Wayanad</option>
                                <option value="Kannur">Kannur</option>
                                <option value="Kasaragod">Kasaragod</option>
                            </select>

                            {errors.district && <div id="nameError" className="invalid-feedback">{errors.district}</div>}
                        </div>

                    </div>


                 

               
                    <button
                        type="submit"
                        className="btn btn-success vo-signup-button"
                  >Next</button>
                    
                </form>
            </div>
        </div>
    )
}


export default GetUserData