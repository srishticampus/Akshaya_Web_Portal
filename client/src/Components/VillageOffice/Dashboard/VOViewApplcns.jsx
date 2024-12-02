import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { approveById, ViewById } from '../../Services/CommonServices';
import { toast } from "react-toastify";
import './VODashboard.css'

function VOViewApplcns() {
const navigate=useNavigate()
    const addStaff=()=>{
        navigate('/vo-add-staff')
    }
    const [staff, setStaff] = useState([])
    const fetchData = async () => {
        console.log("void", staff.voId);

        try {
            const result = await ViewById('viewStaffByVOId', localStorage.getItem('vo'));

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
    useEffect(() => {
      
        const fetchData = async () => {
            console.log("void", staff.voId);
    
            try {
                const result = await ViewById('viewPendingAppByVoIdforVO', localStorage.getItem('vo'));
    
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
        navigate(`/vo-view-details/${id}`)
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
                                    <td className=''>{application.applicantId.date.slice(0,10)}</td>
                                    <td className=''>{application.applicationType}</td>

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

export default VOViewApplcns