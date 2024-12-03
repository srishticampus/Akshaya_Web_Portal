import React, { useEffect, useState } from 'react';
import './ViewFeedback.css';
import './ViewComplaints.css';

import { viewCount } from '../../Services/AdminService';
import { toast } from "react-toastify";
import ReactStars from 'react-stars'; // Import ReactStars

function ViewFeedback() {
    console.log('bjhj');
    
  const [feedbacks, setFeedbacks] = useState([]);

  // Fetch feedback data
  const fetchData = async () => {
    try {
        console.log('in use');
        
      const result = await viewCount('viewFeedbacks');
console.log(result);

      if (result.success) {
        if (result.user.length > 0) setFeedbacks(result.user);
        else setFeedbacks([]);
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
      <h5 className="mt-5">View Feedbacks</h5>
      {feedbacks.length > 0 ? (
        <div className="complaints-grid">
          {feedbacks.map((item, index) => (
            <div key={index} className="admin-comp-container">
              
              <p className="feedback-rating">
                <ReactStars
                  count={5}
                  value={item.rating} // Display rating from feedback data
                  size={28}
                  color1={'#dcdcdc'} // Default color for stars
                  color2={'#56B60B'} // Green color for filled stars
                  edit={false} // Disable editing
                />
              </p>
              <p className="feedback-comments ">{item.comments}</p>
              <p className="comp-footer">
                
                {item.name} &nbsp;&nbsp;&nbsp; . &nbsp;&nbsp;&nbsp;
                {item.createdAt.slice(0, 10)} &nbsp;&nbsp;&nbsp; . {/* Formatting date */}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <center>
          <h3>No Feedbacks Found</h3>
        </center>
      )}
    </div>
  );
}

export default ViewFeedback;
