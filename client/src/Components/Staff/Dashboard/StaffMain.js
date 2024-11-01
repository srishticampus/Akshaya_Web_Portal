

    import React from "react";
    import StaffSidebar from "./StaffSidebar";
    import StaffDashboard from "./StaffDashboard";
    import AdminNavber from "../../Admin/AdminDashBoard/AdminNavber";
import StaffManage from "./StaffManage";
   

    
    function StaffMain({data}) {
      return (
        <div>
            
          <div>
            <div className="row">
              <div className="col-3">
                <StaffSidebar />
              </div>
              <div className="col-9">
              <AdminNavber/>
                {data === "staff-home" ? (
                  <StaffDashboard />
                
                ) : data === "staff-staff" ? (
                  <StaffManage />
               
                ) : data === "logout" }
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    

export default StaffMain