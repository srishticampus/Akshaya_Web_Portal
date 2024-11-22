import React from 'react'
import './StaffDashboard.css'
import { useNavigate } from 'react-router-dom'
function VOStaffManage() {
const navigate=useNavigate()
    const addStaff=()=>{
        navigate('/vo-add-staff')
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
                        <th className='vo-table-head'>Address</th>
                        <th className='vo-table-head '>Action</th>

                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    )
}

export default VOStaffManage