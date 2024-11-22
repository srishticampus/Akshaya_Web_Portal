

    import React from "react";
    import StaffSidebar from "./StaffSidebar";
    import StaffDashboard from "./StaffDashboard";
    import AdminNavber from "../../Admin/AdminDashBoard/AdminNavber";
import StaffManage from "./StaffManage";
import StaffApplications from "./StaffApplications";
import StaffViewAppDetails from "./StaffViewAppDetails";
import StaffViewAprvdAppDetails from "./StaffViewAprvdAppDetails";
import StaffViewTaxReqs from "./StaffViewTaxReqs";
import StaffViewTaxReqDetail from "./StaffViewTaxReqDetail";
   

    
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
                ) : data === "staff-applications" ? (
                  <StaffApplications />
                ) : data === "staff-view-details" ? (
                  <StaffViewAppDetails />
                ) : data === "staff-view-aprvd-details" ? (
                  <StaffViewAprvdAppDetails />
                ) : data === "staff-view-tax-reqs" ? (
                  <StaffViewTaxReqs />
                ) : data === "staff-view-tax-details" ? (
                  <StaffViewTaxReqDetail />
                ) : data === "logout" }
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    

export default StaffMain