import React, { useEffect, useState } from 'react'
import '../../VillageOffice/Dashboard/VODashboard.css'
import { viewCount } from '../../Services/AdminService';
import { toast } from "react-toastify";
import img1 from '../../../Assets/true.png'
import img2 from '../../../Assets/false.png'
import { approveById } from '../../Services/CommonServices';

function AdminViewAkshayaReqs() {
    const [akshaya, setAkshaya] = useState([]);
    const fetchData = async () => {
        try {
            const result = await viewCount('viewAkshayaReqsForAdmin');

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
const approveAkshaya=async(id)=>{
  
    
    try {
        const result = await approveById('approveAkshayaById',id);

        if (result.success) {
            console.log(result);
           
            toast.success('Akshaya Request Accepted Succesfully')
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

const rejectAkshaya=async(id)=>{
 
    
    try {
        const result = await approveById('deleteAkshayaById',id);

        if (result.success) {
            console.log(result);
            
              toast.success('Akshaya Request Removed Succesfully')
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
           
            {akshaya.length > 0 ?
              
                (<>
            <table className="table  table-hover akshaya-tab2 p-5 mt-3" >
                <thead className='ms-5 aks akshaya-tab2'>
                <tr >
                <th className=' ps-3'>Sl No</th>
                <th className=''>Reg Number</th>
                <th className=''>Centre Number</th>
                <th className=''>Email</th>
                <th className='vo-table-head'>Phone Number</th>
                <th className='vo-table-head'>District</th>
                <th className='vo-table-head'>Panchayath</th>
                <th className='vo-table-head '>Action</th>

              </tr>
                </thead>
                <tbody className='akshaya-tab2'>
                    {akshaya.map((item,index)=>{
                        return(
                            <>
                            <tr className='akshaya-tab2'>
                            <td>{index + 1}</td>
                      <td>{item.regNo}</td>
                      <td>{item.centreNo}</td>
                      <td>{item.email}</td>
                      <td>{item.contact}</td>
                      <td>{item.district}</td>
                      <td>{item.panchayath}</td>
                      <td>
                     <img src={img1} className='mr-3' onClick={()=>{approveAkshaya(item._id)}}/>
                     <img src={img2} className='ms-2' onClick={()=>{rejectAkshaya(item._id)}}/>

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

export default AdminViewAkshayaReqs