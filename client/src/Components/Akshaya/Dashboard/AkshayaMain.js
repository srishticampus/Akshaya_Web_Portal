

import React from "react";
import AkshayaSidebar from "./AkshayaSidebar";
import AkshayaDashboard from "./AkshayaDashboard";

import AdminNavber from "../../Admin/AdminDashBoard/AdminNavber";
import AkshayaStaffManage from "./AkshayaStaffManage";



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
            ) : data === "logout"}
          </div>
        </div>
      </div>
    </div>
  );
}



export default AkshayaMain