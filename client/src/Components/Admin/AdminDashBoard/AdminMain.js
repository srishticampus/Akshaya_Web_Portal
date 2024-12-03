import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminDashboard from "./AdminDashboard";
import ResetPwd from "../ResetPwd/ResetPwd";
import AdminNavber from "./AdminNavber";
import AdminViewAkshaya from "./AdminViewAkshaya";
import AdminViewVO from "./AdminViewVO";
import AdminViewComplaints from "./AdminViewComplaints";
import AdminViewFaqs from "./AdminViewFaqs";
import EditFaqs from "./EditFaqs";
import AddFaq from "./AddFaq";
import AdminViewStaff from "./AdminViewStaff";
import ViewFeedback from "./ViewFeedback";




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
            ) : data === "admin-complaints" ? (
              <AdminViewComplaints />
            ) : data === "admin-faqs" ? (
              <AdminViewFaqs />
            ) : data === "admin-edit-faqs" ? (
              <EditFaqs />
            ) : data === "admin-add-faqs" ? (
              <AddFaq />
            ) : data === "admin-view-staff" ? (
              <AdminViewStaff />
            ) : data === "admin-feedback" ? (
              <ViewFeedback />
            ) : data === "logout" }
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminMain;
