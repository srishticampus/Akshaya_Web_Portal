import React, { useState } from 'react'
import { VscEyeClosed } from "react-icons/vsc";
import { toast } from "react-toastify";
import '../../LandingPage/LandingNavbar.css'
import { VscEye } from "react-icons/vsc";
import '../Signup/Signup.css'

import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import { register, registerWithFile } from '../../Services/CommonServices';
function AkshayaAddComplaint() {




    const [data, setData] = useState({
        akshayaId:localStorage.getItem('akshaya')
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();



    const handleChange = (e) => {
        const { name, value, file } = e.target;

        setData({
            ...data,
            [name]: value,
        });

      
    };
    

    const validate = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10}$/;

        if (!data.email) {
            console.log("here");

            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(data.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!data.appType) {

            newErrors.appType = 'Application Type is required';
        }
        if (!data.appDate) {

            newErrors.appDate = 'Application Date is required';
        } if (!data.complaintType) {
            newErrors.complaintType = 'Complaint Type is required';
        }
        if (!data.userName) {
            newErrors.userName = 'Full Name is required';
        }

        if (!data.contact) {
            newErrors.contact = 'Phone Number is required';
        }
        else if (!phoneRegex.test(data.contact)) {
            newErrors.contact = 'Phone Number Must Contain 10 digits ';
        }


        if (!data.description) {
            newErrors.description = 'Description is required';
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
// setData(...data,{akshayaId:localStorage.getItem('akshaya')})
            const result = await register(data, 'registerComplaint');

            if (result.success) {
                console.log(result);

                toast.success('Complaint Registered succesfully !');
                navigate('/akshaya-home');


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






            <h2 className='akshaya-add-comp-mainText'> Complaints</h2>
            <div className='apply-cert-mainDiv'>

                <form onSubmit={handleLogin}>
                    <div className='row'>

                        <div className='col-md-5 p-2 '>
                            <p className='fw-600'>Application</p>
                            <select placeholder='District'
                                className='form-control p-2' name='appType'
                                onChange={handleChange} value={data.appType}
                                style={{ color: data.appType ? "#000" : "#6c757d" }}
                            >
                                <option value="">Application Type</option>

                                <option value="Building Tax">Building Tax</option>
                                <option value="Property Tax">Property Tax</option>
                                <option value="Pancard Services">Pancard Services</option>
                                <option value="Aadhar Updation">Aadhar Updation</option>
                                <option value="Passport Services">Passport Services</option>
                                <option value="Ticket Booking">Ticket Booking</option>
                                <option value="Election Management">Election Management</option>

                            </select>
                            {errors.appType && <div id="nameError" className="invalid-feedback">{errors.appType}</div>}
                        </div>
                        <div className='col-md-5 p-2 '>
                            <p className='fw-600'>Complaint</p>
                            <select placeholder='complaintType'
                                style={{ color: data.complaintType ? "#000" : "#6c757d" }}
                                className='form-control p-2' name='complaintType' onChange={handleChange} value={data.complaintType}>
                                <option value="">Complaint Type</option>

                                <option value="Technical Issue">Technical Issue</option>
                                <option value="Payment Error">Payment Error</option>
                                <option value="Service Issue">Service Issue </option>

                            </select>
                            {errors.complaintType && <div id="nameError" className="invalid-feedback">{errors.complaintType}</div>}
                        </div>

                    </div>
                    <div className='row'>
                        <div className='col-md-5 p-2 '>
                            <p className='akshaya-add-comp-p1'>Applied Date :</p>
                        </div>

                        <div className='col-md-5 p-2 '>

                            <input type="date" className='form-control p-2'
                                name='appDate'
                                max={new Date().toISOString().split("T")[0]}
                                onChange={handleChange}></input>

                            {errors.appDate && <div id="nameError" className="invalid-feedback">{errors.appDate}</div>}
                        </div>

                    </div>
                    <div className='row'>
                        <p className='fw-600'>User Information</p>
                        <div className='col-md-5 p-2 '>
                            <input type="text" placeholder='Full Name' className='form-control p-2' name='userName' onChange={handleChange}></input>

                            {errors.userName && <div id="nameError" className="invalid-feedback">{errors.userName}</div>}

                        </div>
                        <div className='col-md-5 p-2 '>
                            <input type="text" placeholder='Mobile Number' className='form-control p-2' name='contact' onChange={handleChange}></input>

                            {errors.contact && <div id="nameError" className="invalid-feedback">{errors.contact}</div>}

                        </div>

                    </div>


                    <div className='row'>

                        <div className='col-md-5 p-2 '>

                            <input type="text" placeholder='E-Mail' className='form-control p-2' name='email' onChange={handleChange}></input>

                            {errors.email && <div id="nameError" className="invalid-feedback">{errors.email}</div>}
                        </div>

                    </div>

                    <div className='row'>

                        <div className='col-10'>
                            <div><p className='fw-600'>Description</p></div>
                            <textarea name='description' className='form-control p-2' rows='7' cols='12' onChange={handleChange}></textarea>
                            {errors.description && <div id="nameError" className="invalid-feedback">{errors.description}</div>}

                        </div>

                    </div>
                    <button
                        type="submit"
                        className="btn btn-success vo-signup-button"
                    >Confirm</button>
                   
                </form>
            </div>
        </div>
    )
}



export default AkshayaAddComplaint