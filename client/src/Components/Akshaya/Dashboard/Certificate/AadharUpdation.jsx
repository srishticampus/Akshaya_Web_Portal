import React, { useState } from 'react'
import { VscEyeClosed } from "react-icons/vsc";
import { toast } from "react-toastify";
import '../../../LandingPage/LandingNavbar.css'
import { VscEye } from "react-icons/vsc";
import '../../Signup/Signup.css'
import './Certificate.css'
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { register, registerWithFile } from '../../../Services/CommonServices';

function AadharUpdation({ aid }) {


  console.log(aid);

  const [data, setData] = useState({
    applicationType: 'Property Tax',
    applicantId: aid,
    proofs: []
  });
  console.log(data);

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
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setData(prevState => ({
      ...prevState,
      proofs: checked
        ? [...prevState.proofs, name]
        : prevState.proofs.filter(proof => proof !== name)
    }));
  };
  const proofOptions = ['Voter ID', 'Driving License', 'Passport', 'Birth Certificate'];

  const handleImageChange = (e) => {
    console.log("in file", e.target.files[0]);
  
    const file = e.target.files[0];
    setData({
      ...data,
      [e.target.name]: file,
    });
  };

  const validate = () => {
    const newErrors = {};

    const phoneRegex = /^\d{10}$/;

    if (!data.item) {
      console.log("here");

      newErrors.item = 'Information  is required';
    }
    if (!data.aadhar) {

      newErrors.aadhar = 'Aadhar No. is required';
    } 
    if (data.proofs.length === 0) {
      newErrors.proofs = 'Please select at least one proof produced';
    }
    if (!data.doc1) { 
      newErrors.doc1 = 'Atleast 1 document is required';
    }
    else if (data.doc1 && !['image/jpeg', 'image/png', 'application/pdf'].includes(data.doc1.type)) { // Optional file type check
      newErrors.doc1 = 'Document 1 must be a JPG, PNG, or PDF file';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault()
    console.log(errors);
    data.applicantId=aid
    console.log("api called", validate());

    if (!validate()) {
      toast.error('Please fix the errors in the form.');
      return;
    }

    try {
      console.log(data);

      const result = await registerWithFile(data, 'registerApplicationwithFile');

      if (result.success) {
        console.log(result);

        toast.success('Application Send successful!');



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

      <h2 className='applicant-mainTextProp'> Aadhar Updation </h2>
      <div className='apply-cert-mainDiv'>

        <form onSubmit={handleLogin}>
          <div className='row'>
            <p>Aadhar Number</p>
            <div className='col-md-10 p-2 '>
              <input type="text" placeholder='Aadhar Number' className='form-control p-2' name='aadhar' onChange={handleChange}></input>



              {errors.aadhar && <div id="nameError" className="invalid-feedback">{errors.aadhar}</div>}
            </div>
          </div>
          <div className='row'>


            <div className='col-md-10 p-2 '>
              <p>Information to be Updated</p>
              <select placeholder='item' className='form-control p-2' name='item' onChange={handleChange} value={data.item}>
                <option value="">choose any one</option>

                <option value="ContactNumber">Contact Number</option>
                <option value="E-Mail">E-Mail</option>
                <option value="Name">Name</option>
                <option value="dob">Date Of Birth</option>
                <option value="Address">Address</option>

              </select>
              {errors.item && <div id="nameError" className="invalid-feedback">{errors.item}</div>}


            </div>

          </div>
          <div className='row'>
            <p>Prrof Produced</p>
            <div className='col-md-10 p-2 '>
              {proofOptions.map((proof, index) => (
                <div key={index} className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name={proof}
                    onChange={handleCheckboxChange}
                  />
                  <label className="form-check-label" htmlFor={proof}>
                    {proof}
                  </label>
                </div>
              ))}
              {errors.proofs && <div id="nameError" className="invalid-feedback">{errors.proofs}</div>}
            </div>


          </div>


          <div className='row'>
            <p>Documents</p>
            <div className='col-md-4 p-2 '>


              <input type="file" placeholder='Ward No' className='form-control p-2' name='doc1' onChange={handleImageChange}></input>
              {errors.doc1 && <div id="nameError" className="invalid-feedback">{errors.doc1}</div>}

            </div>
            <div className='col-md-4 p-2 '><input type="file" placeholder='Ward No' className='form-control p-2' name='doc2' onChange={handleImageChange}></input>

            </div>
            <div className='col-md-4 p-2 '><input type="file" placeholder='Ward No' className='form-control p-2' name='doc3' onChange={handleImageChange}></input>

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



export default AadharUpdation