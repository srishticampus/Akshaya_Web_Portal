

    import React, { useEffect, useState } from 'react'
    import '../../Admin/AdminDashBoard/AdminDashboard.css'
    import dash1 from '../../../Assets/dash1.png'
    import dash2 from '../../../Assets/dash2.png'
    import { FaWpforms } from "react-icons/fa";

    import dash3 from '../../../Assets/dash3.png'
    import { toast } from "react-toastify";
    import { viewCount } from '../../Services/AdminService'
import { ViewById } from '../../Services/CommonServices';

    function VODashboard() {
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
            const result3 = await ViewById('viewApprovedAppByVoId',localStorage.getItem('vo'));
      
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
           
            <div className='row pt-4'>
    
              
    
              <div className='col-12 col-sm-4 mb-4'>
                <div className=' row admin-dash-revenue-box admin-dash2 pt-3 '>
                  <div className='col-6'>
                    <img src={dash2} />
                  </div>
                  <div className='col-6'>
                    <div className='ms-3 '>
                      <span className='admin-dash-span '>{(akshaya.length) > 0 ? akshaya.length : 0}</span>
                      <p className='admin-dash-span2'>Total no.of Akshaya Centres</p>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className='col-12 col-sm-4  mb-4'>
                <div className='row admin-dash-revenue-box admin-dash3 pt-3 '>
                  <div className='col-6'>
                    <img src={dash3} />
                  </div>
                  <div className='col-6'>
                    <div className='ms-3'>
                      <span className='admin-dash-span '>{(staff.length) > 0 ? staff.length : 0}</span>
                      <p></p><p className='admin-dash-span2'>Total no.of Staffs</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-sm-4 mb-4'>
                <div className='row admin-dash-revenue-box pt-3'>
                  <div className='col-6'>
                  <FaWpforms className='vo-dahs-icon'/>

                  </div>
                  <div className='col-6'>
                    <div className='ms-3'>
                      <span className='admin-dash-span'>{(village.length) > 0 ? village.length : 0}</span>
                      <p className='admin-dash-span2'>Total no.of Applications</p>
                    </div>
                  </div>
                </div>
              </div>
    
            </div>
          </div></div>
      )
    }
    
 
export default VODashboard