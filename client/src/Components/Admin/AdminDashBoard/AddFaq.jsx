import React, { useState } from 'react';
import './faq.css';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { register } from '../../Services/CommonServices';

function AddFaq() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const navigate = useNavigate();

    const handleAddFaq = async () => {
        if (!question || !answer) {
            toast.error('Both Question and Answer are required.');
            return;
        }

        try {
            

            const result =  await register( 
           
                { question:question, answer:answer },'addFAQ')
            if (result.success) {
                toast.success('FAQ added successfully!')
                setQuestion('')
                setAnswer('');
                navigate('/admin-faqs')
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            console.error('Error adding FAQ:', error);
            toast.error('An error occurred while adding FAQ.');
        }
    };

    return (
        <div className="container mt-3">
          <center> <h5 className="mt-5">Add FAQ</h5></center> 

            <div className="faq-form mt-4">
                <div className="mb-3">
                    
                    <input
                        type="text"
                        id="faq-question"
                        className="faq-text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="Enter the  question"
                    />
                </div>

                <div className="mb-3">
                   
                    <textarea
                        id="faq-answer"
                        className="faq-textarea"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        placeholder="Enter the FAQ answer"
                        rows="4"
                    ></textarea>
                </div>

                <div className="text-center">
                    <button
                        className="btn btn-primary green-button"
                        onClick={handleAddFaq}
                    >
                        Add FAQ
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddFaq;
