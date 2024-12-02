import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { approveById, ViewById } from '../../Services/CommonServices';
import { toast } from "react-toastify";
import './VODashboard.css'

function VOStaffManage() {
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
        fetchData(); // Call the async function
    }, [staff.voId]);
    const activateAkshaya=async(id)=>{
    
    
        try {
            const result = await approveById('activateStaffById',id);
    
            if (result.success) {
                console.log(result);
               await fetchData()
                toast.success('Staff Activated Succesfully')
            } else {
                console.error('Data error:', result);
                toast.error(result.message);
            }
    
        } catch (error) {
            console.error('Unexpected error:', error);
            toast.error('An unexpected error occurred during Data View');
        }
    }
    
    const deactivateAkshaya=async(id)=>{
        
        
        try {
            const result = await approveById('deActivateStaffById',id);
    
            if (result.success) {
                console.log(result);
                
                  toast.success('Staff Deactivated Succesfully')
             await fetchData()
    
            } else {
                console.error('Data error:', result);
                toast.error(result.message);
            }
    
        } catch (error) {
            console.error('Unexpected error:', error);
            toast.error('An unexpected error occurred during Data View');
        }
    }
    return (
        <div className='container'>
            <h2 className='voLogin-mainText '><span className='adminLogin-loginText vo-staff-mainText'>Staff Management </span></h2>
            <button
                type="button"
                onClick={addStaff}
                className="btn btn-success admin-login-button vo-btn-border" >+ Add Staff
            </button>
            <p>View Staff Details</p>

            <table className="table  table-hover vo-table-border p-5">
                <thead className='vo-table-border ms-5'>
                    <tr >
                        <th className='vo-table-head ps-3'>Sl No</th>
                        <th className='vo-table-head'>Staff Name</th>
                        <th className='vo-table-head'>Role / Designation</th>
                        <th className='vo-table-head'>Phone Number</th>
                        <th className='vo-table-head'>Email</th>
                        <th className='vo-table-head '>Action</th>

                    </tr>
                </thead>
                <tbody>
                        {staff.map((application, index) => (
                                <tr key={index}>
                                    <td className=''>{index + 1}</td>
                                    <td className=''>{application.name}</td>
                                    <td className=''>{application.designation}</td>
                                    <td className=''>{application.contact}</td>
                                    <td className=''>{application.email}</td>
                                    <td>
                       {application.isActive?<button className='admin-aksh-button2'  onClick={()=>{deactivateAkshaya(application._id)}}>Deactivate</button>
                       :<button className='admin-aksh-button'  onClick={()=>{activateAkshaya(application._id)}}>Activate</button>}
                      </td>

                                </tr>
                            ))
                            }
                        </tbody>
            </table>
        </div>
    )
}

export default VOStaffManage