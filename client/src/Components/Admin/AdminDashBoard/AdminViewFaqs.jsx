import React, { useEffect, useState } from 'react';
import './ViewComplaints.css';
import { viewCount } from '../../Services/AdminService';
import { toast } from "react-toastify";
import { approveById } from '../../Services/CommonServices';
import './faq.css'
import img from '../../../Assets/edit.png'
import { useNavigate } from 'react-router-dom';
function AdminViewFaqs() {
    const [akshaya, setAkshaya] = useState([]);
const Navigate=useNavigate()
    const fetchData = async () => {
        try {
            const result = await viewCount('viewFAQs');

            if (result.success) {
                if (result.user.length > 0) setAkshaya(result.user);
                else setAkshaya([]);
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
        <div className="container mt-3">
            <h5 className="mt-5">FAQ's</h5>
            <div className='faq-buttons  mb-3'>
                <button className='white-green-button' onClick={()=>{Navigate('/admin-edit-faqs')}}>
                    <img src={img} />Edit </button>
                <button className='green-button2 ms-2' onClick={()=>{Navigate('/admin-add-faqs')}}>
                    + Add FAQ </button>
            </div>
            {akshaya.length > 0 ? (
                <div><table>
                    {akshaya.map((item, index) => (
                        <>
                            <tr key={index} >

                                <td className='faq-slno'>{index + 1}
                                </td>&nbsp;&nbsp;
                                <td className='faq-question '>{item.question}
                                </td>
                            </tr>
                            <tr className='faq-answer mt-5 mb-3'>
                                <td></td>
                                <td></td>
                                <td>{item.answer}</td>
                            </tr>


                        </>
                    ))}
                </table>
                </div>

            ) : (
                <center>
                    <h3>No Complaints Found</h3>
                </center>
            )}
        </div>
    );
}
  
export default AdminViewFaqs;
