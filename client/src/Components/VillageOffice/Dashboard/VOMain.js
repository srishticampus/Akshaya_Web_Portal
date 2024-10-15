

    import React from "react";
    import VOSidebar from "./VOSidebar";
    import VODashboard from "./VODashboard";
    import VOResetPwd from "../Signup/PwdReset/VOResetPwd";
    import AdminNavber from "../../Admin/AdminDashBoard/AdminNavber";
import VOStaffManage from "./VOStaffManage";
import VOAddStaff from "./VOAddStaff";
   

    
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
                ) : data === "vo-add-staff" ? (
                  <VOAddStaff />
                ) : data === "logout" }
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    

export default VOMain