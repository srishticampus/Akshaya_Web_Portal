import React, { useEffect, useState } from 'react';
import './faq.css';
import { viewCount } from '../../Services/AdminService'; // Import necessary services
import { toast } from 'react-toastify';
import { approveById, register } from '../../Services/CommonServices';

function EditFaqs() {
    const [faqs, setFaqs] = useState([]);
    const [editedFaqs, setEditedFaqs] = useState([]);

    const fetchFaqs = async () => {
        try {
            const result = await viewCount('viewFAQs');
            if (result.success) {
                setFaqs(result.user);
                setEditedFaqs(result.user); // Initialize editedFaqs with the current FAQs
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            console.error('Error fetching FAQs:', error);
            toast.error('An error occurred while fetching FAQs.');
        }
    };

    const handleDelete = async (id) => {
        try {
            const result = await approveById('deleteFAQById',id);
            if (result.success) {
                toast.success('FAQ deleted successfully!');
                fetchFaqs(); 
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            console.error('Error deleting FAQ:', error);
            toast.error('An error occurred while deleting the FAQ.');
        }
    };

    const handleAnswerChange = (index, newValue) => {
        const updatedFaqs = [...editedFaqs];
        updatedFaqs[index].answer = newValue;
        setEditedFaqs(updatedFaqs);
    };

    const handleUpdate = async () => {
        try {
            const result = await register(editedFaqs,'editFAQById'); 
            if (result.success) {
                toast.success('FAQs updated successfully!');
                fetchFaqs(); 
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            console.error('Error updating FAQs:', error);
            toast.error('An error occurred while updating FAQs.');
        }
    };

    useEffect(() => {
        fetchFaqs();
    }, []);

    return (
        <div className="container mt-3">
            <h5 className="mt-5">Edit FAQs</h5>
            {faqs.length > 0 ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Question</th>
                            <th>Answer</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {faqs.map((faq, index) => (
                            <tr key={faq._id}>
                                <td>{index + 1}</td>
                                <td>{faq.question}</td>
                                <td>
                                    <textarea
                                        className="form-control"
                                        value={editedFaqs[index]?.answer || ''}
                                        onChange={(e) => handleAnswerChange(index, e.target.value)}
                                    />
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(faq._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <center>
                    <h3>No FAQs Found</h3>
                </center>
            )}
            {faqs.length > 0 && (
                <div className="text-center mt-4">
                    <button className="btn btn-success" onClick={handleUpdate}>
                        Update FAQs
                    </button>
                </div>
            )}
        </div>
    );
}

export default EditFaqs;
