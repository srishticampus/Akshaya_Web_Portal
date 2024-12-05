import React, { useEffect, useState } from 'react';
import logoImg from '../../../../Assets/kerala_govt_logo.png'
import { toast } from "react-toastify";
import { toWords } from 'number-to-words';
import { ViewById } from '../../../Services/CommonServices';
const CertificateView2 = ({ application }) => {
    const [data, setData] = useState({
        applicationType: '',
        applicantId:{
            _id:'',
            name:''
        },
        vo: {
            village: ''
        },
        issueDate: '',
        _id: '',
        paymentDate:'',
        ward:'',
        door:''
    })

    const fetchdata = async () => {
        try {
            const result = await ViewById('viewApplicationByAppNo', application.appNo);
console.log(result);

            if (result.success) {
                console.log(result);
                setData(result.user || null);
            }
        } catch (error) {
            console.error('Unexpected error:', error);
            toast.error('An unexpected error occurred during login');
        }
    };
    useEffect(() => {

        fetchdata();
    }, [application]);


    return <div className='cert-container'>
        <div  >
            <img src={logoImg} className='cert-img' />
            <p className='cert-panchayath'>{data.localbody} Grama Panchayath<br/>
            Office: Main Office</p>
            
            <hr className='cert-hr'/>
            <p className='cert-ip'>   Internet Payment receipt</p>
            <hr className='cert-hr'/>
            <div className='cert-grid'>

<div className='cert-data-p'>
    <table className='cert-prop-table'>
        <tr>
            <td> Transaction ID </td>
            <td> : </td>
            <td>{data._id.slice(16,24).toUpperCase()}</td>
        </tr>
        <tr>
            <td> Transaction type</td>
            <td>:</td>
            <td>{data.applicationType}</td>
        </tr>
        <tr>
            <td> Owner </td>
            <td>:</td>
            <td>{data.applicantId.name}</td>
        </tr>
    </table>
    
   
</div>

<div className='cert-date'>
<table className='cert-prop-table'>
        <tr>
            <td> Receipt ID </td>
            <td> : </td>
            <td>{data.applicantId._id.slice(16,24).toUpperCase()}</td>
        </tr>
        <tr>
            <td> Transaction Date</td>
            <td>:</td>
            <td>{data.paymentDate.slice(0,10)}</td>
        </tr>
        <tr>
            <td> Door No </td>
            <td>:</td>
            <td>{data.ward} / {data.door}</td>
        </tr>
    </table>
</div>
</div>
<hr/>
        </div>




        <div className='mt-3'>
         
<p>Transaction Details</p>

            <table className='cert-tab'>
                <tr>
                   <th>Head Code</th>
                   <th> Head Name</th>
                   <th>Years Paid</th>
                   <th>Amount</th>
                   <th>Penal</th>
                </tr>
              

                <tr>
                    <td>{data._id.slice(0,4).toUpperCase()}{data._id.slice(20,24).toUpperCase()} </td>
                    <td>Property Tax Residential</td>
                    <td>{data.paymentDate.slice(2,4)-1}-{data.paymentDate.slice(2,4)}</td>
                    <td>{Math.round(data.amount - (data.amount * 0.1))}</td>
<td>0.00</td>
                </tr>
                <tr>
                <td>{data._id.slice(3,7).toUpperCase()}{data._id.slice(16,20).toUpperCase()}</td>
                <td>Library Cess</td>
                <td>{data.paymentDate.slice(2,4)-1}-{data.paymentDate.slice(2,4)}</td>

                <td>{Math.round(data.amount * 0.1)}</td>
                <td>0.00</td>
                </tr>
                <tr>
                <td colSpan="2" rowSpan="2">
  {data?.amount !== undefined && !isNaN(data.amount)
    ? toWords(data.amount) + " only"
    : "N/A"}
</td>                  

    <td><b>Total (Rs.)</b></td>
    <td>{data.amount}</td>
    <td>0.00</td>
    </tr>  
    <tr>
        <td><b>Grand Total (Rs.)#</b></td>
       <td colSpan='2'>{data.amount}</td>
    </tr>
               
            </table>

        </div>






<div className='foot-section'>
    <p>This receipt is electronically generated and hence does not require Signature<br/>
The above recipt is not real and it meant for project purpose
</p>
</div>
       

        <p className='cert-tt fw-bold'>NB : The logo image and details used in this document is for Educational Project purpose only. Its not from any legal sources</p>
    </div>;
};

export default CertificateView2;
