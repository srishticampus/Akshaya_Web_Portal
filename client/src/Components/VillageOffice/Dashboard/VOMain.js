

    import React from "react";
    import VOSidebar from "./VOSidebar";
    import VODashboard from "./VODashboard";
    import VOResetPwd from "../Signup/PwdReset/VOResetPwd";
    import AdminNavber from "../../Admin/AdminDashBoard/AdminNavber";
import VOStaffManage from "./VOStaffManage";
import VOAddStaff from "./VOAddStaff";
import VOViewApplcns from "./VOViewApplcns";
import VOAppDetails from "./VOAppDetails";
import VOViewAppsForCert from "./VOViewAppsForCert";
import GenerateCertificate from "./GenerateCertificate";
   import AdminViewComplaints from '../../Admin/AdminDashBoard/AdminViewComplaints'

    
    function VOMain({data}) {
      return (
        <div>
            
          <div>
            <div className="row">
              <div className="col-3">
                <VOSidebar />
              </div>
              <div className="col-9">
              <AdminNavber/>
                {data === "vo-home" ? (
                  <VODashboard />
                ) : data === "vo-resetpwd" ? (
                  <VOResetPwd />
                ) : data === "vo-staff" ? (
                  <VOStaffManage />
                ) : data === "vo-view-apps" ? (
                  <VOViewApplcns />
                ) : data === "vo-add-staff" ? (
                  <VOAddStaff />
                ) : data === "vo-view-details" ? (
                  <VOAppDetails />
                ) : data === "view-apps-cert" ? (
                  <VOViewAppsForCert />
                ) : data === "vo-view-generate" ? (
                  <GenerateCertificate />
                ) : data === "vo-view-complaints" ? (
                  <AdminViewComplaints />
                ) : data === "vo-resetpwd" ? (
                  <VOResetPwd />
                ) : data === "logout" }
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    

export default VOMain