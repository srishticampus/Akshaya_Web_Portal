import React, { useEffect, useState } from 'react'
import '../../VillageOffice/Dashboard/VODashboard.css'
import { viewCount } from '../../Services/AdminService';
import { toast } from "react-toastify";
import img1 from '../../../Assets/true.png'
import img2 from '../../../Assets/false.png'
import { approveById } from '../../Services/CommonServices';
function AdminViewAkshayaDetails() {
  const [akshaya, setAkshaya] = useState([]);
  const fetchData = async () => {
    try {
      const result = await viewCount('viewActiveAkshayas');

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
  const activateAkshaya=async(id)=>{
    
    
    try {
        const result = await approveById('activateAkshayaById',id);

        if (result.success) {
            console.log(result);
           
            toast.success('Akshaya Activated Succesfully')
            await fetchData()
        } else {
            console.error('Data error:', result);
            toast.error(result.message);
        }

    } catch (error) {
        console.error('Unexpected error:', error);
        toast.error('An unexpected error occurred during Data View');
    }
}

const deactivateAkshaya=async(id)=>{
    
    
    try {
        const result = await approveById('deActivateAkshayaById',id);

        if (result.success) {
            console.log(result);
            
              toast.success('Akshaya Deactivated Succesfully')
         await fetchData()

        } else {
            console.error('Data error:', result);
            toast.error(result.message);
        }

    } catch (error) {
        console.error('Unexpected error:', error);
        toast.error('An unexpected error occurred during Data View');
    }
}
  return (
    <div className='container mt-3'>

      <h5 className='mt-5'>View Details</h5>

      {akshaya.length > 0 ?

        (<>
            <table className="table  table-hover akshaya-tab2 p-5 mt-3" >
            <thead className='ms-5 aks akshaya-tab2'>
              <tr >
                <th className='vo-table-head ps-3'>Sl No</th>
                <th className='vo-table-head'>Reg Number</th>
                <th className='vo-table-head'>Centre Number</th>
                <th className='vo-table-head'>Email</th>
                <th className='vo-table-head'>Phone Number</th>
                <th className='vo-table-head'>District</th>
                <th className='vo-table-head'>Panchayath</th>
                <th className='vo-table-head '>Action</th>

              </tr>
            </thead>
            <tbody className='akshaya-tab2'>
              {akshaya.map((item, index) => {
                return (
                  <>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.regNo}</td>
                      <td>{item.centreNo}</td>
                      <td>{item.email}</td>
                      <td>{item.contact}</td>
                      <td>{item.district}</td>
                      <td>{item.panchayath}</td>
                      <td>
                       {item.isActive?<button className='admin-aksh-button2'  onClick={()=>{deactivateAkshaya(item._id)}}>Deactivate</button>
                       :<button className='admin-aksh-button'  onClick={()=>{activateAkshaya(item._id)}}>Activate</button>}
                      </td>
                    </tr>
                  </>
                )
              })

              }

            </tbody>
          </table>
        </>) : (<>
          <center>  <h3>No Registered Akshaya centres  Found</h3></center>
        </>)
      }
    </div>
  )
}

export default AdminViewAkshayaDetails