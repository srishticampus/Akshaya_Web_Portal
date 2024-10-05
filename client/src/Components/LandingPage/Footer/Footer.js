import React from 'react'
import logo from '../../../Assets/logofooter.png'
import vector from '../../../Assets/Vector.png'

import './Footer.css'
function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="container p-2">
                    <div className='row'>
                        <div className="col">
                            <div className="footer_logo">
                                <div>
                                    <img src={logo} />
                                </div>
                            </div>
                        </div>
                        <div className="col ">
                            <div>
                                <p className="footer_title">Quick Links</p>
                                <p className="footer_content">Home</p>
                                <p className="footer_content">About</p>
                                <p className="footer_content">Contact</p>
                                <p className="footer_content">Login</p>


                            </div>
                        </div>
                        <div className="col ">
                            <div>
                                <p className="footer_title">Terms & Policies</p>
                                <p className="footer_content">Terms and Conditions</p>
                                <p className="footer_content">FAQs</p>
                            </div>
                        </div>
                       
                    <div className="col">
                        <p className="footer_title">Get In Touch</p>
                        <p className="footer_content">Akshaya State Project Office, Saankethika,
                       IInd Floor, Vrindavan Gardens, Pottakkuzhi, Pattom.P.O,
                        Thiruvananthapuram, Kerala 695004</p>
                        <p className="footer_content"> 0471-2525444</p>
                        <p className="footer_content">  akshaya@gmail.com</p>
                 
                </div>
                    </div>
                </div>
                <hr className='footer_hr'/>
                <div className='footer_center'>
                <img src={vector} className='footer_footimg'></img><span className='footer_para'>2024 All rights reserved</span>
            </div>
            </div>
        </div>
    );
}

export default Footer