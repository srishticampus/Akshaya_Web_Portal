import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import '../../../LandingPage/LandingNavbar.css';
import '../../Signup/Signup.css';
import './Certificate.css';
import {  resetPassword, ViewById } from '../../../Services/CommonServices';
import { Link, useParams } from 'react-router-dom';
import { IMG_BASE_URL } from '../../../Services/BaseURL';

import PropertyTaxConfirm from './PropertyTaxConfirm';
function AppConfirm() {
  const { appNo } = useParams()
  const [data, setData] = useState({
    applicationType: 'Nativity Certificate',
    applicantId: '',
    proofs: [],
    amount: 0
  });
  const [cvvdata, setCvv] = useState({
   
  });

  const [errors, setErrors] = useState({});
  const [akshaya, setAkshaya] = useState({cvv:0});
  const [application, setApplication] = useState({
    proofs: [],
    doc1: null,
    doc2: null,
    doc3: null,
    applicantId: {
      name: ''
    }
  });
  let amount = 0;

  const fetchAkshayadata = async () => {
    try {
      const result = await ViewById('viewAkshayaById', localStorage.getItem('akshaya'));
console.log(result);

      if (result.success) {
        console.log(result);
        setAkshaya(result.user || null);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error('An unexpected error occurred during login');
    }
  };

  const fetchdata = async () => {
    try {
      const result = await ViewById('viewApplicationByAppNo', appNo);

      switch (result.user.applicationType) {

        case 'AadharUpdation':
          setData(prevData => ({ ...prevData, amount: 50 })); break;
          break;

        case 'Income Certificate':
          setData(prevData => ({ ...prevData, amount: 40 })); break;
        case 'Caste Certificate':
          setData(prevData => ({ ...prevData, amount: 30 })); break;

          break;
        case 'Nativity Certificate':
          setData(prevData => ({ ...prevData, amount: 30 })); break;
          break;

      }

      console.log(`The amount is: ${amount}, ${application.applicationType}`);
      if (result.success) {
        console.log(result);
        setApplication(result.user || null);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error('An unexpected error occurred during login');
    }
  };
  useEffect(() => {

    fetchdata();
  }, [data.district]);
  useEffect(() => {

    fetchAkshayadata();
  }, [application._id]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCvv({ ...cvvdata, [name]: value });
  };


  const validate = () => {
    const newErrors = {};
    if (!cvvdata.cvv) newErrors.cvv = "CVV number is required";
 
    else if (cvvdata.cvv!=akshaya.cvv) newErrors.cvv = "Invalid CVV number !!";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    console.log(data);
    console.log(errors);
    e.preventDefault();
    if (!validate()) {
      toast.error('Please fix the errors in the form.');
      return;
    }
    try {
      const result = await resetPassword(data, 'addPaymentByAppId',application._id);
      if (result.success) toast.success('Application Sent successfully!');
      else toast.error(result.message);
    } catch (error) {
      toast.error('An unexpected error occurred during Registration');
    }
  };

  return (
    <div className='container'>
      {application.applicationType!='Property Tax'?<>
      <h2 className='applicant-mainTextProp mt-5 mb-3'> Application Confirmation </h2>
      <div className='apply-cert-mainDiv'>
        <form onSubmit={handleLogin}>
          <div className='row'>
            <div className='col-md-6 p-2'>
              <div className='row'>
                <div className='col'>
                  <label className='app-label'>Application Number :</label>
                </div>
                <div className='col'> <label className='app-data-label'> {appNo}</label></div>
              </div>  </div>
            <div className='col-md-6 p-2'>
              <div className='row'>
                <div className='col'>
                  <label className='app-label'>Application Type :</label>
                </div>
                <div className='col'>
                  <label className='app-data-label'>{application.applicationType}

                  </label>

                </div>  </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 p-2'>
              <div className='row'>
                <div className='col'>  <label className='app-label'> District :
                </label>  </div>
                <div className='col'><label className='app-data-label'>    {application.applicantId.district}
                </label>
                </div>  </div>
            </div>

            {/* <div className='col-md-6 p-2'>
              <div className='row'>
                <div className='col'>
                  <label className='app-label'>      Village Office :
                  </label>
                </div>
                <div className='col'>
                <label className='app-data-label'>  {application.vo}</label>
              </div>  </div>
          </div> */}
      </div>

      <div className='row'>
     
        <div className='col-md-6 p-2 '>
        <div className='row'>
        <div className='col'>
          <label className='app-label'>   Proofs  : 
          </label>
          </div>
                <div className='col'>
           <label className='app-data-label'> {application.proofs.map(x => {
            return (
              <p>{x}</p>
            )
          })}
          </label>
        </div>
        </div></div>
      </div>

      <div className='row'>
    <div className='col-md-6 p-2'>
    <div className='row'>
    <div className='col'>
        <label className='app-label'> Proofs Produced : 
        </label>
        </div><div className='col'>
      <label className='app-data-label'> 
          {application.doc1 ? (
            <a
              href={`${IMG_BASE_URL}/${application.doc1.filename}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View File
            </a>
          ) : ''}
          {application.doc2 ? (
            <a
              href={`${IMG_BASE_URL}/${application.doc2.filename}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View File
            </a>
          ) : ''}
          {application.doc3 ? (
            <a
              href={`${IMG_BASE_URL}/${application.doc3.filename}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View File
            </a>
          ) : ''}
        </label>
</div>
</div>
      </div>
      </div>
      <div className='row'>
      <div className='col-md-6 p-2'>
      <div className='row'>
      
        
        <div className='col'>
          <label className='app-label'> Payable Amount :
          </label>   </div>
          <div className='col'>
          <label className='app-data-label'>  ₹ {data.amount}
          </label>
        </div>
        </div>  
        </div></div>
        <div className='row'>
        <div className='col-md-6 p-2'>
        <div className='row'>
        <div className='col'>
        <label className='app-data-label'> CVV Number :</label> 
          </div>
                <div className='col'>
          <input type="text" name="cvv" onChange={handleChange} placeholder='Enter CVV Number' className='form-control'></input>
          {errors.cvv && <div id="nameError" className="invalid-feedback">{errors.cvv}</div>}

        </div>      </div>  </div>
        </div>

      <button type="submit" className="btn btn-success confir-pay-button fw-bold">Confirm Payment</button>
    </form>
      </div >
      </>:<>
      <PropertyTaxConfirm/>
      </>
}
    </div >
  );
}



export default AppConfirm