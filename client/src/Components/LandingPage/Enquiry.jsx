import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './LandingNavbar.css';
import '../Akshaya/Signup/Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../Services/CommonServices';

function Enquiry() {
  const [data, setData] = useState('');
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
    const phoneRegex = /^\d{10}$/;

    if (!data.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(data.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!data.appType) {
      newErrors.appType = 'Application type is required';
    }
    if (!data.enqType) {
      newErrors.enqType = 'Enquiry Type is required';
    }
    if (!data.name) {
      newErrors.name = 'Name is required';
    }
    if (!data.description) {
        newErrors.description = 'Description is required';
      }
    if (!data.contact) {
      newErrors.contact = 'Phone Number is required';
    } else if (!phoneRegex.test(data.contact)) {
      newErrors.contact = 'Phone Number must contain 10 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error('Please fix the errors in the form.');
      return;
    }

    try {
      const result = await register(data, 'addEnquiry');
      if (result.success) {
        toast.success('Enquiry Added successfully!');
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error('An unexpected error occurred.');
    }
  };

  return (
    <div className="container">
      <h2 className="akshaya-signup-mainText">
        <span className="akshaya-signup-loginText">Enquiry</span>
      </h2>
      <div className="enq-signup-mainDiv">
        <form onSubmit={handleSubmit}>
          {/* Application Type and Enquiry Type in same row */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label>Application Type</label>
              <select
                className="form-control p-2"
                name="appType"
                onChange={handleChange}
                value={data.appType}
              >
                <option value="">Choose One</option>
                <option value="Property Tax">Property Tax</option>
                <option value="Aadhar Updation">Aadhar Updation</option>
                <option value="PanCard Services">Pan Card Services</option>
                <option value="Election Management">Election Management</option>
                <option value="Ticket Booking">Ticket Booking</option>
                <option value="Income Certificate">Income Certificate</option>
                <option value="Caste Certificate">Caste Certificate</option>
                <option value="Nativity Certificate">Nativity Certificate</option>
              </select>
              {errors.appType && (
                <div className="invalid-feedback">{errors.appType}</div>
              )}
            </div>

            <div className="col-md-6">
              <label>Enquiry Type</label>
              <select
                className="form-control p-2"
                name="enqType"
                onChange={handleChange}
                value={data.enqType}
              >
                <option value="">Choose One</option>
                <option value="Document">Document</option>
                <option value="Aadhar">Aadhar</option>
                <option value="Payment">Payment</option>
              </select>
              {errors.enqType && (
                <div className="invalid-feedback">{errors.enqType}</div>
              )}
            </div>
          </div>

          {/* User Information */}
          <div className="row mb-3">
            <p>User Information</p>
            <div className="col-md-6">
              <input
                type="text"
                placeholder="Name"
                className="form-control p-2"
                name="name"
                onChange={handleChange}
                value={data.name || ''}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>
            <div className="col-md-6">
              <input
                type="text"
                placeholder="Phone Number"
                className="form-control p-2"
                name="contact"
                onChange={handleChange}
                value={data.contact || ''}
              />
              {errors.contact && (
                <div className="invalid-feedback">{errors.contact}</div>
              )}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <input
                type="text"
                placeholder="E-Mail"
                className="form-control p-2"
                name="email"
                onChange={handleChange}
                value={data.email || ''}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
            <div className="col-md-6">
              <input
                type="text"
                placeholder="Address"
                className="form-control p-2"
                name="address"
                onChange={handleChange}
                value={data.address || ''}
              />
              {errors.address && (
                <div className="invalid-feedback">{errors.address}</div>
              )}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-12">
              <div>
                <p>Description</p>
                <textarea
                  rows="5"
                  className="form-control p-2"
                  name="description"
                  onChange={handleChange}
                  value={data.description || ''}
                ></textarea>
                 {errors.description && (
                <div className="invalid-feedback">{errors.description}</div>
              )}
              </div>
            </div>
            </div>
          <button type="submit" className="btn btn-success vo-signup-button">
            Next
          </button>
        </form>
      </div>
    </div>
  );
}

export default Enquiry;
