import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminDashboard from "./AdminDashboard";
import ResetPwd from "../ResetPwd/ResetPwd";
import AdminNavber from "./AdminNavber";
// import ViewAllPoliceStation from "../Police/ViewAllPoliceStation";
// import ViewProfile_Policestation from "../Police/ViewProfile_Policestation";


function AdminMain({ data }) {
  return (
    <div>
        
      <div>
        <div className="row">
          <div className="col-3">
            <AdminSidebar />
          </div>
          <div className="col-9">
          <AdminNavber/>
            {data === "admindashboard" ? (
              <AdminDashboard />
            ) : data === "admin-resetpwd" ? (
              <ResetPwd />
            // ) : data === "viewallpolicestation" ? (
            //   <ViewAllPoliceStation />
            // ) : data === "viewallpoliceprofile" ? (
            //   <ViewProfile_Policestation />
            ) : data === "viewallpolicereqprofile" }
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminMain;
