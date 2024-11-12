import React, { useState } from 'react'
import { VscEyeClosed } from "react-icons/vsc";
import { toast } from "react-toastify";
import '../../../LandingPage/LandingNavbar.css'
import { VscEye } from "react-icons/vsc";
import '../../Signup/Signup.css'
import './Certificate.css'
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { register, registerWithFile } from '../../../Services/CommonServices';
import PropertyTax from './PropertyTax';
import AadharUpdation from './AadharUpdation';
import PancardApply from './Caste';
import TicketBooking from './TicketBooking';
import PassportApplication from './Income';
import ElectionId from './Nativity';
import Income from './Income';
import Caste from './Caste';
import Nativity from './Nativity';

function ApplyCertificate1() {

    const [data, setData] = useState('');

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();


    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const type = params.get('type');
    const aid = params.get('aid');
    console.log(type + "cjsdnj" + aid);



    return (
        <div>
            {type == "PropertyTax" ? (

                <PropertyTax aid={aid} />
            ) : type === "AadharUpdation" ? (
                <AadharUpdation aid={aid} />
            ) : type === "PanCardServices" ? (

                window.open('https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html?utm_source=Google&utm_medium=cpc&utm_campaign=Pan_Search_Comp_Exact_Oct24&adgroup=UTIITSL&gad_source=1&gclid=Cj0KCQiAire5BhCNARIsAM53K1iuF7tYPAqns4AjOW0tz6LWKwtgpxdDwQGE9gRLigIXbQbIL_auu2IaAqwwEALw_wcB', '_blank')

            ) : type === "ElectionManagement" ? (
                window.open('https://voters.eci.gov.in/signup', '_blank')
            ) : type === "TicketBooking" ? (
                <TicketBooking aid={aid} />
            ) : type === "PassportServices" ? (
                <PassportApplication aid={aid} />
            ) : type === "Income" ? (
                <Income aid={aid} />
            ) : type === "Caste" ? (
                <Caste aid={aid} />
            ) : type === "Nativity" ? (
                <Nativity aid={aid} />
            ) : <></>}
        </div>
    )
}



export default ApplyCertificate1