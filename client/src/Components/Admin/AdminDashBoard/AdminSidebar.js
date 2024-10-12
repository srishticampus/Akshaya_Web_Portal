import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './AdminSidebar.css'
import admin from '../../../Assets/admintop.png'
function AdminSidebar() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("admin") != 1)
      navigate('/admin-login');
  }, []);
  const handleLogout = () => {
    localStorage.setItem('admin', 0);
    navigate('/admin-login');
  };
  return (
    <div>
      <div className="admin-sidebar-background">
        <div className="pt-5 ms-3 admin-sidebar-h4">
            <img src={admin} className='admin-logo'></img>
          <Link to="/admin-home" className="admin-dash-link"><p className="p-2 fw-light admin-border"> Dashboard</p></Link>
          <Link to='/admin-' className="admin-dash-link"><p className="p-2 fw-light admin-border"> Akshaya</p></Link>
          <Link to='/admin_' className="admin-dash-link"><p className="p-2  fw-light admin-border"> Village Office</p></Link>
          <Link to='/' className="admin-dash-link"><p className="p-2  fw-light admin-border">Add FAQ's</p></Link>
          <Link to='/' className="admin-dash-link"><p className="p-2  fw-light admin-border"> View Staff</p></Link>
          <Link to='/admin-' className="admin-dash-link"><p className="p-2 fw-light admin-border">Complaints</p></Link>
          <Link to='/admin-resetpwd' className="admin-dash-link"><p className="p-2  fw-light admin-border"> Reset Password</p></Link>
          <Link to='/admin-login' className="admin-dash-link" onClick={handleLogout}><p className="p-2  fw-light admin-border">Logout</p></Link>

        </div>
      </div>
    </div>
  )
}

export default AdminSidebar