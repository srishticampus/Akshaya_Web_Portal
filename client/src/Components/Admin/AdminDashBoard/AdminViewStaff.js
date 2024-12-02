import React, { useEffect, useState } from 'react'
import '../../VillageOffice/Dashboard/VODashboard.css'
import { viewCount } from '../../Services/AdminService';
import { toast } from "react-toastify";
import img1 from '../../../Assets/true.png'
import img2 from '../../../Assets/false.png'
import { approveById } from '../../Services/CommonServices';
function AdminViewStaff() {
  const [akshaya, setAkshaya] = useState([]);
  const fetchData = async () => {
    try {
      const result = await viewCount('viewActiveStaffs');

      if (result.success) {
        console.log(result);
        if (result.user.length > 0)
          setAkshaya(result.user);
        else
          setAkshaya([])
      } else {
        console.error('Data error:', result);
        toast.error(result.message);
      }

    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error('An unexpected error occurred during Data View');
    }
  };
  useEffect(() => {


    fetchData(); // Call the async function
  }, []);

  return (
    <div className='container mt-3'>

      <h5 className='mt-5'>View Details</h5>

      {akshaya.length > 0 ?

        (<>
            <table className="table  table-hover akshaya-tab2 p-5 mt-3" >
            <thead className='ms-5 aks akshaya-tab2'>
              <tr >
                <th className='vo-table-head ps-3'>Sl No</th>
                <th className='vo-table-head'>Name</th>
                <th className='vo-table-head'>Contact</th>
                <th className='vo-table-head'>Email</th>
                <th className='vo-table-head'>Designation</th>
                <th className='vo-table-head'>Village Office</th>
              

              </tr>
            </thead>
            <tbody className='akshaya-tab2'>
              {akshaya.map((item, index) => {
                return (
                  <>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.contact}</td>
                      <td>{item.email}</td>
                      <td>{item.designation}</td>
                      <td>{item.voId.village}</td>
                     
                    </tr>
                  </>
                )
              })

              }

            </tbody>
          </table>
        </>) : (<>
          <center>  <h3>No Staffs Found</h3></center>
        </>)
      }
    </div>
  )
}

export default AdminViewStaff