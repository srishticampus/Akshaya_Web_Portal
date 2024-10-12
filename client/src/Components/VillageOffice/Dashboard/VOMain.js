

    import React from "react";
    import VOSidebar from "./VOSidebar";
    import VODashboard from "./VODashboard";
    import VOResetPwd from "../Signup/PwdReset/VOResetPwd";
    import AdminNavber from "../../Admin/AdminDashBoard/AdminNavber";
   

    
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
    
    

export default VOMain