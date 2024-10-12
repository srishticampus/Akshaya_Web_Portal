
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../Admin/AdminDashBoard/AdminSidebar.css'
import admin from '../../../Assets/admintop.png'
import { toast } from "react-toastify";

import { ViewById } from '../../Services/CommonServices';

function VOSidebar() {

    const navigate = useNavigate();
const [vo,setVo]=useState({})
    useEffect(() => {
        if (localStorage.getItem("vo") == null)
            navigate('/vo-login');
    }, []);
    useEffect( () => {
        const fetchdata=async()=>{
        try {
            const result = await ViewById('viewVOById', localStorage.getItem("vo"));

            if (result.success) {
                console.log(result);
setVo(result.user)


            } else {
                console.error('Village Office View Error :', result);
                toast.error(result.message);
            }
        } catch (error) {
            console.error('Unexpected error:', error);
            toast.error('An unexpected error occurred during login');
        }
    }
    fetchdata()

    }, []);
    const handleLogout = () => {
        localStorage.setItem('vo', null);
        navigate('/vo-login');
    };
    return (
        <div>
            <div className="admin-sidebar-background">
                <div className="pt-5 ms-3 admin-sidebar-h4">
                    <img src={admin} className='admin-logo'></img>
                    {vo?.username}
                    <Link to="/vo-home" className="admin-dash-link"><p className="p-2 fw-light admin-border">Dashboard</p></Link>
                    <Link to='/vo-' className="admin-dash-link"><p className="p-2 fw-light admin-border">Staff Management</p></Link>
                    <Link to='/vo' className="admin-dash-link"><p className="p-2  fw-light admin-border">View Application</p></Link>
                    <Link to='/' className="admin-dash-link"><p className="p-2  fw-light admin-border">Generate Certificate</p></Link>
                    <Link to='/vo-' className="admin-dash-link"><p className="p-2 fw-light admin-border">View Complaints</p></Link>
                    <Link to='/vo-resetpwd' className="admin-dash-link"><p className="p-2  fw-light admin-border"> Reset Password</p></Link>
                    <Link to='/vo-login' className="admin-dash-link" onClick={handleLogout}><p className="p-2  fw-light admin-border">Logout</p></Link>

                </div>
            </div>
        </div>
    )
}

export default VOSidebar