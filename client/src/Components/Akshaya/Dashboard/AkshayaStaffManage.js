import React from 'react'
import './AkshayaDashboard.css'
import { useNavigate } from 'react-router-dom'
function AkshayaStaffManage() {
const navigate=useNavigate()
    const addStaff=()=>{
        navigate('/akshaya-add-staff')
    }
    return (
        <div className='container'>
            <h2 className='akshayaLogin-mainText '><span className='adminLogin-loginText akshaya-staff-mainText'>Staff Management </span></h2>
            <button
                type="button"
                onClick={addStaff}
                className="btn btn-success admin-login-button akshaya-btn-border" >+ Add Staff
            </button>
            <p>View Staff Details</p>

            <table className="table  table-hover akshaya-table-border p-5">
                <thead className='akshaya-table-border ms-5'>
                    <tr >
                        <th className='akshaya-table-head ps-3'>Sl No</th>
                        <th className='akshaya-table-head'>Staff Name</th>
                        <th className='akshaya-table-head'>Role / Designation</th>
                        <th className='akshaya-table-head'>Phone Number</th>
                        <th className='akshaya-table-head'>Address</th>
                        <th className='akshaya-table-head '>Action</th>

                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    )
}

export default AkshayaStaffManage