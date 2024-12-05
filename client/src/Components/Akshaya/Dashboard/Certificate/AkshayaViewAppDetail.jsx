
import React, { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'
import { approveById, resetPassword, ViewById } from '../../../Services/CommonServices';
import { toast } from "react-toastify";
import { IMG_BASE_URL } from '../../../Services/BaseURL';
import CertificateView from './CertificateView';
import html2canvas from 'html2canvas'; 
import jsPDF from 'jspdf';
import CertificateView2 from './CertificateView2';
function AkshayaViewAppDetail() {
    const navigate=useNavigate()
    const [isCertificateVisible2, setCertificateVisible2] = useState(false);
    const [isCertificateVisible, setCertificateVisible] = useState(false);
    const [certificateData, setCertificateData] = useState(null);
    const [applications, setApplications] = useState({
        applicationType: '',
        proofs: [],
        applicationDate: '',
        applicantId:
        {
            name: '',
            email: '',
            contact: '',
            district: '',
            doc2:'',
            doc3:'',
            doc4:'',
            doc1:'',
        }
    });
    const { id } = useParams()
    const [showModal, setShowModal] = useState(false); // Modal visibility state
    const [rejectionReason, setRejectionReason] = useState(''); 
    useEffect(() => {
        const fetchData1 = async () => {
            try {
                console.log("app no", id);

                const result = await ViewById('viewApplicationByAppNo', id);

                if (result.success) {
                    console.log(result);
                    setApplications(result.user);


                } else {
                    console.error('Data error:', result);
                }
            } catch (error) {
                console.error('Unexpected error:', error);
                toast.error('An unexpected error occurred during Data View');
            }
        };

        fetchData1(); // Call the async function
    }, [id]);

    const verifyApp=async(id)=>{
        try {
            console.log("app no", id);

            const result = await approveById('approveAppByVO', id);

            if (result.success) {
                console.log(result);
               toast.success('Application approved successfully');
navigate('/vo-view-apps')

            } else {
                console.error('Data error:', result);
            }
        } catch (error) {
            console.error('Unexpected error:', error);
            toast.error('An unexpected error occurred during Data View');
        }
    }

    const rejectApp = async () => {
        try {
            if (!rejectionReason.trim()) {
                toast.error('Please provide a reason for rejection.');
                return;
            }
            const result = await resetPassword({ rejectionReason: rejectionReason },'rejectByAppId', id);

            if (result.success) {
                toast.success('Application rejected successfully');
                setShowModal(false); 
                navigate('/staff-applications');
            } else {
                console.error('Data error:', result);
            }
        } catch (error) {
            console.error('Unexpected error:', error);
            toast.error('An unexpected error occurred during rejection.');
        }
    };
    const handleDownloadCertificate = () => {
        
        setCertificateVisible(true);
      };
      const handleDownloadCertificate2 = () => {
        
        setCertificateVisible2(true);
      };
      const handleDownloadAsPDF = () => {
        const input = document.getElementById('certificate-preview');
    
        html2canvas(input).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF();
          pdf.addImage(imgData, 'PNG', 0, 0);
          pdf.save('certificate.pdf');
        });
      };
      const handleDownloadAsPDF2 = () => {
        const input = document.getElementById('certificate-preview');
    
        html2canvas(input).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF();
          pdf.addImage(imgData, 'PNG', 0, 0);
          pdf.save('tax-receipt.pdf');
        });
      };
    return (
        <div>
            <div className='staff-view-maindiv'>
                <h1 className='staff-view-appdetails-title'>
                    View details
                </h1>
            </div>
            <hr/>
            <div className='mt-3 staff-view-detail-main'>
                <p className='staff-view-detail-sub'>User Information</p>
                <div className=''>
                    <div className='row'>
                        <div className='col-3 app-label'>
                             Applicant Name
                        </div>
                        <div className='col-3'>
                              {applications.applicantId.name}
                        </div>
                        <div className='col-3  app-label'>
                            Email
                        </div>
                        <div className='col-3'>
                              {applications.applicantId.email}
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-3  app-label'>
                            Contact Number
                        </div>
                        <div className='col-3'>
                              {applications.applicantId.contact}
                        </div>
                        <div className='col-3  app-label'>
                            District
                        </div>
                        <div className='col-3'>
                             {applications.applicantId.district}
                        </div>
                    </div>
                </div>
           
            <div className='mt-5 '>
                
                <p className='staff-view-detail-sub'>Application Information</p>

                {/* {applications.applicationType==} */}
                <div className='row'>

                    <div className='col-3  app-label'>
                        Application for
                    </div>
                    <div className='col-3'>
                          {applications.applicationType}
                    </div>
                    <div className='col-3  app-label'>
                        Date of Application
                    </div>
                    <div className='col-3'>
                         {applications.applicationDate.slice(0, 10)}
                    </div>

                   

                </div>


{/* for caste */}
{applications.applicationType=='Caste Certificate'?
<div className='row'>

<div className='col-3  app-label'>
    Caste Category
</div>
<div className='col-3'>
      {applications.casteCategory}
</div>
<div className='col-3  app-label'>
   Sub Caste Category
</div>
<div className='col-3'>
     {applications.subCaste}
</div>



</div>:''
}

{/* caste ends  */}




                <div className='row '>
                <div className='col-3  app-label'>
                        Proof Submitted
                    </div>
                    <div className='col-3'> 
                        {applications.proofs.length > 0 ? (
                            applications.proofs.map((x, index) => (
                                <div>
                                {x}</div>
                            ))
                        ) : (
                            <p>No proof submitted.</p>
                        )}
                    </div>
                    <div className='col-3 app-label'>
                       Aadhar Number
                    </div>
                    <div className='col-3 '>
                       {applications.aadhar}
                    </div>
                    </div>

<div className='row mt-3'>
                        {applications.doc1 ? (
                        <><div className='col-3   app-label'>
                            View Document
                        </div>
                        <div className='col-9'>  
                            <div>
         <a
              href={`${IMG_BASE_URL}/${applications.doc1.filename}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View document 1
            </a>
            </div>
            <div>
            {applications.doc2 !=null ?   <a
              href={`${IMG_BASE_URL}/${applications.doc1.filename}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View document 2
            </a>:''}
            </div>
            {applications.doc3!=null ?     <a
              href={`${IMG_BASE_URL}/${applications.doc1.filename}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View document 3
            </a>:''} </div><div>
            {applications.doc4!=null ?     
 <a
              href={`${IMG_BASE_URL}/${applications.doc1.filename}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View document 4
            </a>: ''}
       </div>
                        </>) : ''
                    }
                </div>
            </div>
            </div>

      
      
      <div className="row btn-container">
  <div className="col">
    <div
      className="status-display"
      style={{
        backgroundColor:
          applications.status === "Pending"
            ? "rgba(255, 0, 0, 0.1)"
            : applications.status === "On Process"
            ? "rgba(241, 140, 0, 0.1)"
            : applications.status === "Verified"
            ? "rgba(86, 144, 92, 0.1)"
            : "rgba(200, 200, 200, 0.1)", // Default for unknown status
        color:
          applications.status === "Pending"
            ? "red"
            : applications.status === "On Process"
            ? "#F18C00"
             : applications.status === "Verified"
            ? "#F18C00"
            : "#666", // Default text color
        padding: "10px",
        borderRadius: "5px",
        textAlign: "center",
        fontWeight: "bold",
      }}
    >
      Status: {applications.status}
    </div>
  </div>
  {applications.applicationType === "Property Tax" && applications.status === "On Process" && (
  <div className="col mt-2">
    <button
      className="btn btn-primary"
      onClick={() => {
        // Handle the payment logic here
        navigate(`/tax-payment/${applications.appNo}`); // Example navigation to payment page
      }}
    >
      Pay Now
    </button>
  </div>
)}
  {applications.status === "Certificate Issued" && (
       <div className="col mt-2">
       <button
         className="btn btn-success"
         onClick={handleDownloadCertificate}
       >
         Download Certificate
       </button>
     </div>
  )}
   {applications.status === "Tax Paid" && (
       <div className="col mt-2">
       <button
         className="btn btn-success"
         onClick={handleDownloadCertificate2}
       >
         Download Receipt
       </button>
     </div>
  )}
  {isCertificateVisible && (
  <div className="modal-overlay">
    <div className="cert-app-modal-content">
      <div id="certificate-preview">
        <CertificateView application={applications} />
      </div>
      <button className="btn btn-primary" onClick={handleDownloadAsPDF}>
        Download as PDF
      </button>
      <button className="btn btn-secondary" onClick={() => setCertificateVisible(false)}>
        Close
      </button>
    </div>
  </div>
)}
  {isCertificateVisible2 && (
  <div className="modal-overlay">
    <div className="cert-app-modal-content">
      <div id="certificate-preview">
        <CertificateView2 application={applications} />
      </div>
      <button className="btn btn-primary" onClick={handleDownloadAsPDF2}>
        Download as PDF
      </button>
      <button className="btn btn-secondary" onClick={() => setCertificateVisible2(false)}>
        Close
      </button>
    </div>
  </div>
)}
  {applications.status === "Rejected" && (
    <div className="col mt-2">
      <button
        className="btn btn-danger"
        onClick={() => setShowModal(true)}
      >
        View Reason
      </button>
    </div>
  )}
</div>


{showModal && (
  <div className="modal-overlay">
    <div className="akshaya-app-modal-content">
      <h4>Rejection Reason</h4>
      <textarea
        readOnly
        value={applications.rejectionReason || "No reason provided."}
        className="form-control"
        style={{ height: "100px", resize: "none" }}
      />
      <div className="modal-buttons mt-3">
        <button
          className="btn btn-success green-button ms-3"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}


               
        </div>
    )
}

export default AkshayaViewAppDetail