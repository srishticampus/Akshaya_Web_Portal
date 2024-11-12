

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
            ) : data === "logout"}
          </div>
        </div>
      </div>
    </div>
  );
}



export default AkshayaMain