import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminDashboard from "./AdminDashboard";
import ResetPwd from "../ResetPwd/ResetPwd";
import AdminNavber from "./AdminNavber";
import AdminViewAkshaya from "./AdminViewAkshaya";
import AdminViewVO from "./AdminViewVO";



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
            ) : data === "admin-view-akshaya" ? (
              <AdminViewAkshaya />
            ) : data === "admin-view-vo" ? (
              <AdminViewVO />
           
            ) : data === "logout" }
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminMain;
