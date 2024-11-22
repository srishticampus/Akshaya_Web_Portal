import React, { useEffect, useState } from 'react'
import './StaffDashboard.css'
import { useNavigate, useParams } from 'react-router-dom'
import { approveById, resetPassword, ViewById } from '../../Services/CommonServices';
import { toast } from "react-toastify";
import { IMG_BASE_URL } from '../../Services/BaseURL';
function StaffViewTaxReqDetail() {

    const navigate = useNavigate()
    const [data,setData]=useState({

    })
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
     
            setData({
                ...data,
                [name]: value,
            });
        // }
    };
    const [applications, setApplications] = useState({
        ward: '',
        year: '',
        door: '',
        applicationDate: '',
        applicantId:
        {
            name: '',
            email: '',
            contact: '',
            district: '',

        }
    });
    const { id } = useParams()

    useEffect(() => {
        const fetchData1 = async () => {
            try {
                console.log("app no", id);

                const result = await ViewById('viewApplicationByAppNo', id);

                if (result.success) {
                    console.log(result);
                    setApplications(result.user);


                } else {
                    console.error('Data error:', result);
                }
            } catch (error) {
                console.error('Unexpected error:', error);
                toast.error('An unexpected error occurred during Data View');
            }
        };

        fetchData1(); // Call the async function
    }, [id]);

    const verifyApp = async (id) => {
        try {
            console.log("app no", id);

            const result = await approveById('approveByAppId', id);

            if (result.success) {
                console.log(result);
                toast.success('Application approved successfully');
                navigate('/staff-applications')

            } else {
                console.error('Data error:', result);
            }
        } catch (error) {
            console.error('Unexpected error:', error);
            toast.error('An unexpected error occurred during Data View');
        }
    }


    
  const validate = () => {
    const newErrors = {};
    const amountRegex = /^\d+$/;

    if (!data.amount) newErrors.amount = "Amount is required";
    else if (!amountRegex.test(data.amount)) {
        newErrors.amount = 'Invalid Amount !';
    }

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
      const result = await resetPassword(data, 'addTaxAmountByAppId',applications._id);
      if (result.success) toast.success('Amount Added successfully!');
      else toast.error(result.message);
    } catch (error) {
      toast.error('An unexpected error occurred during Registration');
    }
  };
    return (
        <div>
            <div className='staff-view-maindiv'>
                <h1 className='staff-view-appdetails-title'>
                    View details
                </h1>
            </div>
            <hr />
            <div className='mt-3 staff-view-detail-main'>
                <p className='staff-view-detail-sub'>User Information</p>
                <div className=''>
                    <div className='row'>
                        <div className='col-3 app-label'>
                            Applicant Name
                        </div>
                        <div className='col-3'>
                            {applications.applicantId.name}
                        </div>
                        <div className='col-3  app-label'>
                            Email
                        </div>
                        <div className='col-3'>
                            {applications.applicantId.email}
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-3  app-label'>
                            Contact Number
                        </div>
                        <div className='col-3'>
                            {applications.applicantId.contact}
                        </div>
                        <div className='col-3  app-label'>
                            District
                        </div>
                        <div className='col-3'>
                            {applications.applicantId.district}
                        </div>
                    </div>
                </div>

                <div className='mt-5 '>

                    <p className='staff-view-detail-sub'>Application Information</p>

                    {/* {applications.applicationType==} */}
                    <div className='row'>
                        <div className='col-3  app-label'>
                            Ward Year
                        </div>
                        <div className='col-3'>
                            {applications.year}
                        </div>

                        <div className='col-3  app-label'>
                            Date of Application
                        </div>
                        <div className='col-3'>
                            {applications.applicationDate.slice(0, 10)}
                        </div>



                    </div>



                    <div className='row'>

                        <div className='col-3  app-label'>
                            Ward Number
                        </div>
                        <div className='col-3'>
                            {applications.ward}
                        </div>
                        <div className='col-3  app-label'>
                            Door Number
                        </div>
                        <div className='col-3'>
                            {applications.door}
                        </div>



                    </div>





                    <div className='row mt-3 '>
                        <div className='col-3  app-label'>
                            Tax Amount
                        </div>
                        <div className='col-3'>
                        <input type="text" placeholder='Tax Amount' className='form-control p-2' name='amount' onChange={handleChange}></input>
                                {errors.amount && <div id="nameError" className="invalid-feedback">{errors.amount}</div>}
                           
                        </div>
                        {/* <div className='col-3 app-label'>
                           Aadhar Number
                        </div>
                        <div className='col-3 '>
                           {applications.aadhar}
                        </div> */}
                    </div>

                </div>
            </div>
            <div className='row btn-container'>
                <div className='col'>
                    <button className='btn btn-success green-button'
                        onClick={ handleLogin }
                    >
                        Add Amount</button>
                </div>
                <div className='col'>
                    <button className='btn btn-succes white-green-button'
                        onClick={() => { navigate(-1) }}
                    >
                        Cancel</button>
                </div>
            </div>


        </div>
    )
}


export default StaffViewTaxReqDetail