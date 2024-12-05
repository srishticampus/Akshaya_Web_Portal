

import React from "react";
import AkshayaSidebar from "./AkshayaSidebar";
import AkshayaDashboard from "./AkshayaDashboard";

import AdminNavber from "../../Admin/AdminDashBoard/AdminNavber";
import AkshayaStaffManage from "./AkshayaStaffManage";
import ApplyCertificate from "./Certificate/ApplyCertificate1";
import AkshayaAddComplaint from "./AkshayaAddComplaint";
import GetUserData from "./Certificate/GetUserData";
import ApplyCertificate1 from "./Certificate/ApplyCertificate1";
import AppConfirm from "./Certificate/AppConfirm";
import TaxPayment from "./TaxPayment";
import ViewFeedback from "../../Admin/AdminDashBoard/ViewFeedback";
import AdminViewAkshayaReqs from "../../Admin/AdminDashBoard/AdminViewAkshayaReqs";
import AdminViewComplaints from "../../Admin/AdminDashBoard/AdminViewComplaints";
import AkshayaResetPwd from "./AkshayaResetPwd";
import ViewAppStatus from "./ViewAppStatus";
import AkshayaViewAppDetail from "./Certificate/AkshayaViewAppDetail";
import AdminViewEnqs from "../../Admin/AdminDashBoard/AdminViewEnqs";



function AkshayaMain({ data }) {
  return (
    <div>

      <div>
        <div className="row">
          <div className="col-3">
            <AkshayaSidebar />
          </div>
          <div className="col-9">
            <AdminNavber />
            {data === "akshaya-home" ? (
              <AkshayaDashboard />
            ) : data === "akshaya-staff" ? (
              <AkshayaStaffManage />
            ) : data === "akshaya-apply-certificate" ? (
              <GetUserData />
            ) : data === "akshaya-add-complaint" ? (
              <AkshayaAddComplaint />
            ) : data === "apply-certificate" ? (
              <ApplyCertificate1 />
            ) : data === "appconfirm" ? (
              <AppConfirm />
            ) : data === "tax-payment" ? (
              <TaxPayment />
            ) : data === "akshaya-complaints" ? (
              <AdminViewComplaints />
            ) : data === "akshaya-feedback" ? (
              <ViewFeedback />
            ) : data === "akshaya-resetpwd" ? (
              <AkshayaResetPwd />
            ) : data === "app-status" ? (
              <ViewAppStatus />
            ) : data === "akshaya-view-details" ? (
              <AkshayaViewAppDetail />
            ) : data === "akshaya-enqs" ? (
              <AdminViewEnqs />
            ) : data === "logout"}
          </div>
        </div>
      </div>
    </div>
  );
}



export default AkshayaMain