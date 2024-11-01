import React, { useEffect, useState } from 'react'
import '../../VillageOffice/Dashboard/VODashboard.css'
import { viewCount } from '../../Services/AdminService';
import { toast } from "react-toastify";
import img1 from '../../../Assets/true.png'
import img2 from '../../../Assets/false.png'
import { approveById } from '../../Services/CommonServices';

function AdminViewVODetails() {
  
      const [vo, setvo] = useState([]);
      const fetchData = async () => {
        try {
          const result = await viewCount('viewActivevos');
    
          if (result.success) {
            console.log(result);
            if (result.user.length > 0)
              setvo(result.user);
            else
              setvo([])
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
      const activatevo=async(id)=>{
        
        
        try {
            const result = await approveById('activatevoById',id);
    
            if (result.success) {
                console.log(result);
               
                toast.success('vo Activated Succesfully')
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
    
    const deactivatevo=async(id)=>{
        
        
        try {
            const result = await approveById('deActivatevoById',id);
    
            if (result.success) {
                console.log(result);
                
                  toast.success('vo Deactivated Succesfully')
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
    
          {vo.length > 0 ?
    
            (<>
                <table className="table  table-hover akshaya-tab2 p-5 mt-3" >
                <thead className='ms-5 aks akshaya-tab2'>
                  <tr >
                  <th className=' ps-3'>Sl No</th>
                    <th className=''>Village Officer</th>
                    <th className=''>E-Mail</th>
                    <th className=''>District</th>
                    <th className='vo-table-head'>Taluk</th>
                    <th className='vo-table-head'>Local Body</th>
                    <th className='vo-table-head'>Pincode</th>
                    <th className='vo-table-head '>Action</th>
    
                  </tr>
                </thead>
                <tbody className='akshaya-tab2'>
                  {vo.map((item, index) => {
                    return (
                      <>
                        <tr>
                          <td>{index + 1}</td>
                          <td>{item.username}</td>
                          <td>{item.email}</td>
                          <td>{item.district}</td>
                          <td>{item.taluk}</td>
                          <td>{item.localbody}</td>
                          <td>{item.pincode}</td>
                          <td>
                           {item.isActive?<button className='admin-aksh-button2'  onClick={()=>{deactivatevo(item._id)}}>Deactivate</button>
                           :<button className='admin-aksh-button'  onClick={()=>{activatevo(item._id)}}>Activate</button>}
                          </td>
                        </tr>
                      </>
                    )
                  })
    
                  }
    
                </tbody>
              </table>
            </>) : (<>
              <center>  <h3>No Registered Village Offices Found</h3></center>
            </>)
          }
        </div>
      )
    }
    
    

export default AdminViewVODetails