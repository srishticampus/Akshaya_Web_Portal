import React from 'react'
import phone from '../../Assets/Phone.png'
import gmail from '../../Assets/Gmail.png'
import map from '../../Assets/Map.png'

function ContactUs() {
    return (
        <div className='contact-container'>
            <p className='contact-title'>Contact Us</p>
            <h2 className='adminLogin-mainText'>  We're Here <span className='adminLogin-loginText'>to Help !</span></h2>
            <p className='contact-p mt-3'>
                If you have any questions, suggestions, or need assistance with our services, please don't hesitate to reach out. Our dedicated support team is available to assist you..
            </p>

            <div className='contact-card-container mt-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='contact-card'>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <img src={phone} alt="phone" className='contact-icon mt-2' />

                                </div>
                                <div className='col-md-8'>
                                <p className='contact-card-t1'> 0471-2525444</p>
                                    <p className='contact-card-t2'>Our customer service team is available Monday to Friday.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='contact-card'>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <img src={gmail} alt="phone" className='contact-icon mt-2' />

                                </div>
                                <div className='col-md-8'>
                                <p className='contact-card-t1'> akshaya@gmail.com</p>
                                    <p className='contact-card-t2'>For general inquiries, support, and feedback.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-md-3'>
                        
                    </div>
                    <div className='col-md-6 '>
                        <div className='contact-card'>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <img src={map} alt="phone" className='contact-icon mt-2' />

                                </div>
                                <div className='col-md-8'>
                               
                                    <p className='contact-card-t3'>Akshaya State Project Office Saankethika,
                                    IInd Floor, Vrindavan Gardens, Pottakkuzhi, Pattom.P.O, Thiruvananthapuram, Kerala 695004</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs