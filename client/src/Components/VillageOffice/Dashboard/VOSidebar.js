import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../Admin/AdminDashBoard/AdminSidebar.css';
import admin from '../../../Assets/adlogo.png';
import { toast } from 'react-toastify';
import './VODashboard.css';
import { ViewById } from '../../Services/CommonServices';
import { Modal, Button } from 'react-bootstrap';

function VOSidebar() {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const [vo, setVo] = useState({});

    useEffect(() => {
        if (localStorage.getItem('vo') == null) navigate('/vo-login');
    }, [navigate]);

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const result = await ViewById('viewVOById', localStorage.getItem('vo'));

                if (result.success) {
                    console.log(result);
                    setVo(result.user);
                } else {
                    console.error('Village Office View Error :', result);
                    toast.error(result.message);
                }
            } catch (error) {
                console.error('Unexpected error:', error);
                toast.error('An unexpected error occurred during login');
            }
        };
        fetchdata();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('vo');
        toast.success('Logged out successfully.');
        navigate('/vo-login');
        setShowModal(false);  // Close the modal after logout
    };

    const handleView = () => {
        setShowModal(true); // Show the modal when clicking logout
    };

    const handleClose = () => {
        setShowModal(false); // Close the modal without logging out
    };

    return (
        <div>
            <div className="admin-sidebar-background">
                <div className="pt-5 ms-3 admin-sidebar-h4">
                    <img src={admin} className="vo-das-logo" alt="Admin Logo" />
                    <p className="vo-das-logo-text">{vo?.username}</p>
                    <Link to="/vo-home" className="admin-dash-link">
                        <p className="p-2 fw-light admin-border">Dashboard</p>
                    </Link>
                    <Link to="/vo-staff" className="admin-dash-link">
                        <p className="p-2 fw-light admin-border">Staff Management</p>
                    </Link>
                    <Link to="/vo" className="admin-dash-link">
                        <p className="p-2 fw-light admin-border">View Application</p>
                    </Link>
                    <Link to="/" className="admin-dash-link">
                        <p className="p-2 fw-light admin-border">Generate Certificate</p>
                    </Link>
                    <Link to="/vo-" className="admin-dash-link">
                        <p className="p-2 fw-light admin-border">View Complaints</p>
                    </Link>
                    <Link to="/vo-resetpwd" className="admin-dash-link">
                        <p className="p-2 fw-light admin-border">Reset Password</p>
                    </Link>
                    <Link to="" className="admin-dash-link" onClick={handleView}>
                        <p className="p-2 fw-light admin-border">Logout</p>
                    </Link>
                </div>
            </div>

            {/* Modal for logout confirmation */}
            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Logout</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to log out?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="danger" onClick={handleLogout}>
                        Yes, Logout
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default VOSidebar;
