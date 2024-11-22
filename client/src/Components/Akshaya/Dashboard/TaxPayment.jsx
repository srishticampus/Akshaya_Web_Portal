import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';


import '../Dashboard/Certificate/Certificate.css';
import {  resetPassword, ViewById } from '../../Services/CommonServices';
import { Link, useParams } from 'react-router-dom';
import { IMG_BASE_URL } from '../../Services/BaseURL';

function TaxPayment() {
  const { id } = useParams()
  const [data, setData] = useState({
    vo:{_id:'',village:''}
  })
  const [village,setVillage]=useState({name:''})
  const fetchAppdata = async () => {
    try {
      const result = await ViewById('viewApplicationByAppNo', id);
      console.log(result);

      if (result.success) {
        console.log(result);
        setData(result.user || null);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error('An unexpected error occurred during login');
    }
  }
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCvv({ ...cvvdata, [name]: value });
  };
  useEffect(() => {

    fetchAppdata();
  }, [id]);
  useEffect(() => {

    fetchAkshayadata();
  }, [localStorage.getItem('akshaya')]);
  const [cvvdata, setCvv] = useState({
   
  });

  const [errors, setErrors] = useState({});
  const [akshaya, setAkshaya] = useState({cvv:0});
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
      const result = await resetPassword(data, 'addPaymentByAppId',data._id);
      if (result.success) toast.success('Application Sent successfully!');
      else toast.error(result.message);
    } catch (error) {
      toast.error('An unexpected error occurred during Registration');
    }
  };
  return (
    <div>
      <div className='container'>
        {data.amount > 0 ? (
          <div>
            {data.paymentStatus == false ?
              <div>
                   <h2 className='applicant-mainTextProp mt-5 mb-3'> Payment Confirmation </h2>
      <div className='apply-cert-mainDiv'>
        <form onSubmit={handleLogin}>
          <div className='row'>
            <div className='col-md-6 p-2'>
              <div className='row'>
                <div className='col'>
                  <label className='app-label'>Application Number </label>
                </div>
                <div className='col'> <label className='app-data-label'> {data.appNo}</label></div>
              </div>  </div>
              <div className='row'>
              <div className='col-md-6 p-2'>
              <div className='row'>
                <div className='col'>
                  <label className='app-label'>Application For</label>
                </div>
                <div className='col'>
                  <label className='app-data-label'>{data.applicationType}

                  </label>
</div></div>
                </div>  
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 p-2'>
              <div className='row'>
                <div className='col'>  <label className='app-label'> District 
                </label>  </div>
                <div className='col'><label className='app-data-label'>    {data.applicantId.district}
                </label>
                </div>  </div>
            </div>

          
      </div>

      <div className='row'>
     
       <div className='col-md-6 p-2'>
              <div className='row'>
                <div className='col'>
                  <label className='app-label'>      Village Office 
                  </label>
                </div>
                <div className='col'>
                <label className='app-data-label'>  {data.vo.village}</label>
              </div>  </div>
          </div>
          
      </div>

      <div className='row'>
    <div className='col-md-6 p-2'>
    <div className='row'>
    <div className='col'>
        <label className='app-label'> Year   
        </label>
        </div><div className='col'>
      <label className='app-data-label'> 
      March {new Date().getFullYear()}
        </label>
</div>
</div>
      </div>
      </div>
      <div className='row'>
      <div className='col-md-6 p-2'>
      <div className='row'>
      
        
        <div className='col'>
          <label className='app-label'> Payable Amount 
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
              </div>
              : 
              <div>
               
                You have already paid your Tax
                </div>}
          </div>
        )

          :
          (<h3>Your Tax Request is Send to Village Office</h3>)
        }
      </div>
    </div>
  )
}

export default TaxPayment