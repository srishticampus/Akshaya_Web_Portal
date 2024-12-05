import React, { useEffect, useState } from 'react';
import logoImg from '../../../../Assets/kerala_govt_logo.png'
import { toast } from "react-toastify";
import { toWords } from 'number-to-words';
import { ViewById } from '../../../Services/CommonServices';
const CertificateView = ({ application }) => {
    const [data, setData] = useState({
        applicationType: '',
        vo: {
            village: ''
        },
        issueDate: '',
        _id: ''
    })

    const fetchdata = async () => {
        try {
            const result = await ViewById('viewCertificateByappNo', application.appNo);

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
    // Define the certificate layout based on applicationType
    const renderCertificateContent = () => {
        switch (data.applicationType) {
            case 'Income Certificate':
                return (
                    <div className='mt-3'>
                        <p className='cert-tt ms-3'>Certified that the annual family income  of the person with the details mentioned here from all the source is
                            Rs. {data.appId.income} ( {toWords(data.appId.income)} ) </p>


                        <table className='cert-tab'>
                            <tr>
                                <td>Name of the Person</td>
                                <td>{data.applicantId.name}</td>
                            </tr>
                            <tr>
                                <td>Father's/Mother's/Husband's Name</td>
                                <td>{data.appId.relationName}</td>
                            </tr>

                            <tr>
                                <td>Pincode </td>
                                <td>{data.applicantId.pincode}</td>
                            </tr>
                            <tr>
                                <td>District</td>
                                <td>{data.applicantId.district}</td>
                            </tr>
                            <tr>
                                <td>Village</td>
                                <td>{data.vo.village}</td>
                            </tr>
                            <tr>
                                <td>Certificate Issued Date</td>
                                <td>{data.issueDate.slice(0, 10)}</td>
                            </tr>
                            <tr>
                                <td>Designation of Issued Officer</td>
                                <td>Village Officer</td>
                            </tr>
                        </table>

                    </div>
                );
            case 'Nativity Certificate':
                return (
                    <div className='mt-3'>
                    <p className='cert-tt ms-3'>Certified that the  the person with the details mentioned below 
                        is a native of Kerala State </p>


                    <table className='cert-tab'>
                        <tr>
                            <td>Name of the Person</td>
                            <td>{data.applicantId.name}</td>
                        </tr>
                        <tr>
                            <td>Father's/Mother's/Husband's Name</td>
                            <td>{data.appId.relationName}</td>
                        </tr>
                       
                        <tr>
                            <td>Pincode </td>
                            <td>{data.applicantId.pincode}</td>
                        </tr>
                        <tr>
                            <td>District</td>
                            <td>{data.applicantId.district}</td>
                        </tr>
                        <tr>
                            <td>Village</td>
                            <td>{data.vo.village}</td>
                        </tr>
                        <tr>
                            <td>Certificate Issued Date</td>
                            <td>{data.issueDate.slice(0, 10)}</td>
                        </tr>
                        <tr>
                            <td>Designation of Issued Officer</td>
                            <td>Village Officer</td>
                        </tr>
                    </table>

                </div>
                );
            case 'Caste Certificate':
                return (
                    <div className='mt-3'>
                    <p className='cert-tt ms-3'>Certified that the  the person with the details mentioned below 
                        belongs to the caste mentioned below </p>


                    <table className='cert-tab'>
                        <tr>
                            <td>Name of the Person</td>
                            <td>{data.applicantId.name}</td>
                        </tr>
                        <tr>
                            <td>Father's/Mother's/Husband's Name</td>
                            <td>{data.appId.relationName}</td>
                        </tr>
                        <tr>
                            <td>Caste</td>
                            <td>{data.appId.casteCategory}</td>
                        </tr><tr>
                            <td>Sub Caste</td>
                            <td>{data.appId.subCaste}</td>
                        </tr>
                        <tr>
                            <td>Pincode </td>
                            <td>{data.applicantId.pincode}</td>
                        </tr>
                        <tr>
                            <td>District</td>
                            <td>{data.applicantId.district}</td>
                        </tr>
                        <tr>
                            <td>Village</td>
                            <td>{data.vo.village}</td>
                        </tr>
                        <tr>
                            <td>Certificate Issued Date</td>
                            <td>{data.issueDate.slice(0, 10)}</td>
                        </tr>
                        <tr>
                            <td>Designation of Issued Officer</td>
                            <td>Village Officer</td>
                        </tr>
                    </table>

                </div>
                );
            default:
                return <p>Certificate details not available.</p>;
        }
    };

    return <div className='cert-container'>
        <div  >
            <img src={logoImg} className='cert-img' />
            <h5>GOVERNMENT OF KERALA</h5>
            <p className='cert-village-name'>{data.vo.village} Village Office</p>
            <p className='cert-name'>{data.applicationType}</p>
            <div className='cert-grid mt-3'>
                <div className='cert-no'>Certificate No: {data._id.slice(18, 24).toUpperCase()}</div>
                <div className='cert-date'>Date: {data.issueDate.slice(0, 10)}</div>
            </div>
        </div>
        {renderCertificateContent()}
        <div className='mt-3 ms-3 cert-tt'>
            The certificate is issued based on the details given in the application , local enquiry and record produced and is valid ovly for a period
            of one year from the date of issue
        </div>
        <div className='cert-grid'>

            <div className='cert-no'></div>

            <div className='cert-date'>
                <div className='signature-section'><p>Signature Verified</p>
                    <p>Digitally Signed By {data.vo.username}</p>
                    <p>{new Date(data.issueDate).toLocaleString("en-IN", {
                        timeZone: "Asia/Kolkata",
                    })}</p></div>
            </div>
        </div>

        <p className='cert-tt fw-bold set-margin-b'>NB : The logo image and details used in this document is for Educational Project purpose only. Its not from any legal sources</p>
    </div>;
};

export default CertificateView;
