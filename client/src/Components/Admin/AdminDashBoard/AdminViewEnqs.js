import React, { useEffect, useState } from 'react';
import './ViewComplaints.css';
import { viewCount } from '../../Services/AdminService';
import { toast } from "react-toastify";
import { approveById } from '../../Services/CommonServices';

function AdminViewEnqs() {
  const [akshaya, setAkshaya] = useState([]);

  const fetchData = async () => {
    try {
      const result = await viewCount('viewEnquiries');

      if (result.success) {
        if (result.user.length > 0) setAkshaya(result.user);
        else setAkshaya([]);
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
    fetchData(); // Call the async function
  }, []);


  return (
    <div className="container mt-3">
      <h5 className="mt-5">View Details</h5>
      {akshaya.length > 0 ? (
        <div className="complaints-grid">
          {akshaya.map((item, index) => (
            <div key={index} className="admin-comp-container">
              <p className="comp-small-green">
                {item.appType} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Enquiry Type : {item.enqType}
              </p>
              <p className="comp-maintext mt-3">{item.description}</p>
              <p className="comp-footer">
                {item.name}&nbsp;&nbsp;&nbsp; . &nbsp;&nbsp;&nbsp;
                {item.contact}&nbsp;&nbsp;&nbsp; . &nbsp;&nbsp;&nbsp;
                {item.email}&nbsp;&nbsp;&nbsp; . &nbsp;&nbsp;&nbsp;
                {item.createdAt.slice(0, 10)}&nbsp;&nbsp;&nbsp; .
              </p>
            </div>
          ))}
        </div>
      ) : (
        <center>
          <h3>No Enquiries Found</h3>
        </center>
      )}
    </div>
  );
}

export default AdminViewEnqs;
