import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { approveById, ViewById } from '../../Services/CommonServices';
import { toast } from "react-toastify";
import './AkshayaDashboard.css'

function ViewAppStatus() {
const navigate=useNavigate()
  
    const [staff, setStaff] = useState([])
    
    useEffect(() => {
      
        const fetchData = async () => {
        
    
            try {
                const result = await ViewById('viewApplicationByAkshayaId', localStorage.getItem('akshaya'));
    
                if (result.success) {
                    console.log(result);
                    setStaff(result.user||[]);
                } else {
                    console.error('Data error:', result);
                    toast.error(result.message);
                }
                  
    
            } catch (error) {
                console.error('Unexpected error:', error);
                toast.error('An unexpected error occurred during Data View');
            }
        };
        fetchData(); // Call the async function
    }, [staff.voId]);
    const viewDetails=(id)=>{
        navigate(`/akshaya-view-details/${id}`)
    }
    
   
    return (
        <div className='container'>
            <h2 className='voLogin-mainText '><span className='adminLogin-loginText vo-staff-mainText'>View Applications </span></h2>
          
            <p>View Details</p>
{staff.length>0?<>
            <table className="table  table-hover vo-table-border p-5">
                <thead className='vo-table-border ms-5'>
                    <tr >
                        <th className='vo-table-head ps-3'>Sl No</th>
                        <th className='vo-table-head'>Name</th>
                        <th className='vo-table-head'>E-Mail</th>
                        <th className='vo-table-head'>Phone Number</th>
                        <th className='vo-table-head'>Date</th>
                        <th className='vo-table-head '>Type</th>
                        <th className='vo-table-head '>Status</th>

                        <th className='vo-table-head '>Action</th>


                    </tr>
                </thead>
                <tbody>
                        {staff.map((application, index) => (
                                <tr key={index}>
                                    <td className=''>{index + 1}</td>
                                    <td className=''>{application.applicantId.name}</td>
                                    <td className=''>{application.applicantId.email}</td>
                                    <td className=''>{application.applicantId.contact}</td>
                                    <td className=''>{application.applicationDate.slice(0,10)}</td>
                                    <td className=''>{application.applicationType}</td>
                                    <td className=''>
      <div
        className='status-container'
        style={{
          background:
            application.status === 'Pending'
              ? 'rgba(255, 0, 0, 0.1)'
              : application.status === 'On Process'
              ? 'rgba(241, 140, 0, 0.1)'
              : application.status === 'Verified'
              ? 'rgba(86, 144, 92, 0.5)'
              : 'transparent', 
        }}
      >
        <span
          className='status-circle-app'
          style={{
            backgroundColor:
              application.status === 'Pending'
                ? 'red'
                : application.status === 'On Process'
                ? '#F18C00'
                : application.status === 'Verified'
                ? '#56905C'
                : 'transparent', 
          }}
        ></span>
        <span
          className='status-txt'
          style={{
            color:
              application.status === 'Pending'
                ? 'red'
                : application.status === 'On Process'
                ? '#F18C00'
                : application.status === 'Verified'
                ? '#56905C'
                : 'black', 
          }}
        >
          {application.status}
        </span>
      </div>
    </td>
                                    <td>
                     
                       <button className='admin-aksh-button'  onClick={()=>{viewDetails(application.appNo)}}>Details</button>
                      </td>

                                </tr>
                            ))
                            }
                        </tbody>
            </table>
            </>:<h3 
            className='vo-staff-mainText'>No Applications Found</h3>}
                
        </div>
    )
}

export default ViewAppStatus