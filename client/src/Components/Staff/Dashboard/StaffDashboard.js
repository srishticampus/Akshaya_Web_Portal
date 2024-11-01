

    import React, { useEffect, useState } from 'react'
    import '../../Admin/AdminDashBoard/AdminDashboard.css'
    import dash1 from '../../../Assets/dash1.png'
    import dash2 from '../../../Assets/dash2.png'
    import dash3 from '../../../Assets/dash3.png'
    import { toast } from "react-toastify";
    import { viewCount } from '../../Services/AdminService'

    function StaffDashboard() {
              const [village, setVillage] = useState([]);
      const [akshaya, setAkshaya] = useState([]);
      const [staff, setStaff] = useState([]);
      useEffect(() => {
        const fetchData = async () => {
          try {
            const result = await viewCount('viewActiveAkshayas');
      
            if (result.success) {
              console.log(result);
              setAkshaya(result.user);
            } else {
              console.error('Data error:', result);
              toast.error(result.message);
            }
            const result2 = await viewCount('viewActiveStaffs');
      
            if (result2.success) {
              setStaff(result2.user);
            } else {
              console.error('Data error:', result2);
              toast.error(result2.message);
            }
            const result3 = await viewCount('viewActiveVos');
      
            if (result3.success) {
              setVillage(result3.user);
            } else {
              console.error('Data error:', result3);
              toast.error(result3.message);
            }
          } catch (error) {
            console.error('Unexpected error:', error);
            toast.error('An unexpected error occurred during Data View');
          }
        };
      
        fetchData(); // Call the async function
      }, []);
      
      return (
        <div>
          <div className='container'>
           
          
          </div></div>
      )
    }
    
 
export default StaffDashboard