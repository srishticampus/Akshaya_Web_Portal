
import React, { useEffect, useState } from 'react'
import '../../VillageOffice/Dashboard/VODashboard.css'
import { viewCount } from '../../Services/AdminService';
import { toast } from "react-toastify";
import img1 from '../../../Assets/true.png'
import img2 from '../../../Assets/false.png'
import { approveById } from '../../Services/CommonServices';

function AdminViewVOReqs() {

        const [vo, setvo] = useState([]);
        const fetchData = async () => {
            try {
                const result = await viewCount('viewVOReqsForAdmin');
    
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
    const approvevo=async(id)=>{
      
        
        try {
            const result = await approveById('approveVOById',id);
    
            if (result.success) {
                console.log(result);
               
                toast.success('Village Office Request Accepted Succesfully')
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
    
    const rejectvo=async(id)=>{
     
        
        try {
            const result = await approveById('deleteVOById',id);
    
            if (result.success) {
                console.log(result);
                
                  toast.success('Village Office Request Removed Succesfully')
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
    
              <h5 className='mt-5'>View Requests</h5>
               
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
                        {vo.map((item,index)=>{
                            return(
                                <>
                                <tr className='akshaya-tab2'>
                                <td>{index + 1}</td>
                          <td>{item.username}</td>
                          <td>{item.email}</td>
                          <td>{item.district}</td>
                          <td>{item.taluk}</td>
                          <td>{item.localbody}</td>
                          <td>{item.pincode}</td>
                          <td>
                         <img src={img1} className='mr-3' onClick={()=>{approvevo(item._id)}}/>
                         <img src={img2} className='ms-2' onClick={()=>{rejectvo(item._id)}}/>
    
                          </td>
                                </tr>
                                </>
                            )
                        })
                            
                        }
    
                    </tbody>
                </table>
                </>):  (<>
                    <center>  <h3>No New Requests Found</h3></center>
                    </>) 
                }
            </div>
        )
    }
    
  

export default AdminViewVOReqs