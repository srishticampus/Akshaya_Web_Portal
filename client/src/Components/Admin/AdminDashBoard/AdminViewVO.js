import React, { useState } from 'react';
import './AdminDashboard.css';

import AdminViewAkshayaReqs from './AdminViewAkshayaReqs';
import AdminViewAkshayaDetails from './AdminViewAkshayaDetails';
import AdminViewVOReqs from './AdminViewVOReqs';
import AdminViewVODetails from './AdminViewVODetails';

function AdminViewVO() {
  
  
      const [activeComponent, setActiveComponent] = useState('request');
    
      const handleClick = (componentName) => {
        setActiveComponent(componentName);
      };
    
      return (
        <div>
          <div className="admin-view-akshaya-btncontainer">
            <button
              type="button"
              className={`btn admin-view-akshaya-btn ${activeComponent === 'request' ? 'active' : ''}`}
              onClick={() => handleClick('request')}
            >
              View Request
            </button>
            <button
              type="button"
              className={`btn admin-view-akshaya-btn ${activeComponent === 'details' ? 'active' : ''}`}
              onClick={() => handleClick('details')}
            >
              View Details
            </button>
          </div>
    
          <div className="component-display">
            {activeComponent === 'request' && <AdminViewVOReqs />}
            {activeComponent === 'details' && <AdminViewVODetails />}
          </div>
        </div>
      );
    }
    
    

export default AdminViewVO