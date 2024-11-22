
import React, { useEffect, useState } from 'react'
import './StaffDashboard.css'
import { useNavigate } from 'react-router-dom'
import { ViewById } from '../../Services/CommonServices';
import { toast } from "react-toastify";

function StaffViewTaxReqs() {

        const [activePage, setActivePage] = useState('reqs');
        const [applications, setApplications] = useState([]);
        const [verapplications, setVerApplications] = useState([]);
        const [staff, setStaff] = useState({
            voId: ''
        })
        const navigate = useNavigate()
        useEffect(() => {
          
    
            const fetchData1 = async () => {
                try {
                    const result = await ViewById('viewStaffById', localStorage.getItem('staff'));
    
                    if (result.success) {
                        console.log(result);
                        setStaff(result.user);
    
    
                    } else {
                        console.error('Data error:', result);
                    }
                } catch (error) {
                    console.error('Unexpected error:', error);
                    toast.error('An unexpected error occurred during Data View');
                }
            };
    
            fetchData1(); // Call the async function
        }, []);
    const viewDetails=(id)=>{
        navigate(`/staff-view-tax-details/${id}`)
    }
    const viewDetails2=(id)=>{
        navigate(`/staff-view-aprvd-details/${id}`)
    }
        useEffect(() => {
            const fetchData2 = async () => {
                console.log("void", staff.voId);
    
                try {
                    const result = await ViewById('viewPendingTaxReqByVoId', staff.voId);
    
                    if (result.success) {
                        console.log(result);
                        setApplications(result.user);
                    } else {
                        console.error('Data error:', result);
                        toast.error(result.message);
                    }
                        const result2 = await ViewById('viewAddedTaxByVoId',staff.voId);
    console.log(result2);
    
                        if (result2.success) {
                            setVerApplications(result2.user);
                        } else {
                          console.error('Data error:', result2);
                          toast.error(result2.message);
                        }
    
                } catch (error) {
                    console.error('Unexpected error:', error);
                    toast.error('An unexpected error occurred during Data View');
                }
            };
    
            fetchData2(); // Call the async function
        }, [staff.voId]);
        return (
    
            <div className='container'>
                {console.log(activePage)
                }
                <div className="row mb-3 staff-buttons mt-5">
                    <div className="col text-center">
                        <button
                            type="button"
                            className={`btn vo-btn-border-staff ${activePage === 'reqs' ? 'active' : ''}`}
                            onClick={() => setActivePage('reqs')}
                        >
                            Tax Requests
                        </button>
                    </div>
                    <div className="col text-center">
                        <button
                            type="button"
                            className={`btn vo-btn-border-staff ${activePage === 'taxes' ? 'active' : ''}`}
                            onClick={() => setActivePage('taxes')}
                        >
                           View All Taxes
                        </button>
                    </div>
                </div>
    
    
    
    
                
                    {activePage === 'reqs' && (
                        applications.length > 0 ? 
                           (
                               <table className="table  table-hover akshaya-tab2 p-5 mt-3">
                            <thead className='vo-table-border ms-5'>
                                <tr className='akshaya-tab2' >
                                    <th className='vo-table-head ps-3'>Sl No</th>
                                    <th className='vo-table-head'>Name</th>
                                    <th className='vo-table-head'>Email</th>
                                    <th className='vo-table-head'>Phone Number</th>
                                    <th className='vo-table-head '>Ward Year</th>
                                    <th className='vo-table-head'>Ward</th>
                                    <th className='vo-table-head '>Door</th>
                                    <th className='vo-table-head '>Action</th>
    
    
                                </tr>
                            </thead>
                            <tbody>
                                {applications.map((application, index) => (
                                    <tr key={index}>
                                        <td className='vo-table-data'>{index + 1}</td>
                                        <td className='vo-table-data'>{application.applicantId.name}</td>
                                        <td className='vo-table-data'>{application.applicantId.email}</td>
                                        <td className='vo-table-data'>{application.applicantId.contact}</td>
                                        <td className='vo-table-data'>{application.year}</td>
                                        <td className='vo-table-data'>{application.ward}</td>
                                        <td className='vo-table-data'>{application.door}</td>
                                        <td className='vo-table-data'>
                                            <button className='vo-details-staff' onClick={() => {
                                                viewDetails(application.appNo)
                                            }}>Add Tax</button>
                                        </td>
    
                                    </tr>
                                ))
                                }
                            </tbody>
                        </table>
                      
                             ) : (
                            <h4>No Tax Requests Found</h4>
                        )
                    )}
                
    
                {
                      activePage === 'taxes' && (
                        verapplications.length > 0 ? (
                        <table className="table  table-hover akshaya-tab2 p-5 mt-3">
                            <thead className='vo-table-border ms-5'>
                                <tr >
                                    <th className='vo-table-head ps-3'>Sl No</th>
                                    <th className='vo-table-head'>Name</th>
                                    <th className='vo-table-head'>Email</th>
                                    <th className='vo-table-head'>Phone Number</th>
                                    <th className='vo-table-head '>Ward Year</th>
                                    <th className='vo-table-head'>Ward</th>
                                    <th className='vo-table-head '>Door</th>
                                    <th className='vo-table-head '>Amount</th>
                                    <th className='vo-table-head '>Payment Status</th>
    
                                </tr>
                            </thead>
                            <tbody>
                            {verapplications.map((application, index) => (
                                    <tr key={index}>
                                        <td className='vo-table-data'>{index + 1}</td>
                                        <td className='vo-table-data'>{application.applicantId.name}</td>
                                        <td className='vo-table-data'>{application.applicantId.email}</td>
                                        <td className='vo-table-data'>{application.applicantId.contact}</td>
                                        <td className='vo-table-data'>{application.year}</td>
                                        <td className='vo-table-data'>{application.ward}</td>
                                        <td className='vo-table-data'>{application.door}</td>
                                        <td className='vo-table-data'>{application.amount}</td>
                                        <td className='vo-table-data'>{
                                        application.paymentStatus?
                                        (<span style={{color:'green'}}>Paid</span>):
                                        (<span style={{color:'red'}}>Unpaid</span>)}</td>
    
                                    </tr>
                                ))
                                }
                            </tbody>
                        </table>
                     ) : (
                        <h4>No Verified Taxes Found</h4>
                    )
                )}
            </div >
        )
    }
 
export default StaffViewTaxReqs