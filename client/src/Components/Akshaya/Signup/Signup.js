import React, { useState } from 'react'
import { VscEyeClosed } from "react-icons/vsc";
import { toast } from "react-toastify";
import '../../LandingPage/LandingNavbar.css'
import { VscEye } from "react-icons/vsc";
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom';
import { register, registerWithFile } from '../../Services/CommonServices';
function Signup() {
    const [data, setData] = useState('');

    const [showPassword, setShowPassword] = useState(false)
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();


    const panchayaths = {
        Thiruvananthapuram: [
            "Adimalathura",
            "Akathumuri",
            "Attingal",
            "Balaramapuram",
            "Chirayinkeezhu",
            "Chullimanoor",
            "Enchakkal",
            "Kadavoor",
            "Kallambalam",
            "Karamana",
            "Kazhakkoottam",
            "Kilimanoor",
            "Kottukal",
            "Mangalapuram",
            "Manvila",
            "Marappalam",
            "Mukhathala",
            "Nedumangad",
            "Neyyattinkara",
            "Pangode",
            "Puthenthope",
            "Sreekariyam",
            "Thiruvallam",
            "Thiruvananthapuram",
            "Vellanad",
            "Venganoor",
            "Vilappilsala"
        ],
        Kollam: [
            "Alumoodu",
            "Chathannoor",
            "Kollam",
            "Kottarakara",
            "Paravur",
            "Punalur",
            "Sasthamkotta",
            "Anchal",
            "Chavara",
            "Ittiva",
            "Kundara",
            "Mukhathala",
            "Paravur",
            "Perumpuzha",
            "Puthenthope",
            "Thazhava",
            "Thirumullavaram"
        ],
        Pathanamthitta: [
            "Adoor",
            "Aranmula",
            "Erumeli",
            "Konni",
            "Muthoor",
            "Pandalam",
            "Ranni",
            "Thiruvalla",
            "Vachira",
            "Vennikulam",
            "Kalloorkad",
            "Kozhencherry"
        ],
        Alappuzha: [
            "Alappuzha",
            "Cherthala",
            "Kuttanadu",
            "Mannancherry",
            "Mavelikkara",
            "Punnamada",
            "Rayon",
            "Thakazhi",
            "Thiruvizha",
            "Uzhavoor"
        ],
        Kottayam: [
            "Changanassery",
            "Kottayam",
            "Kumarakom",
            "Puthuppally",
            "Ramapuram",
            "Thiruvarppu",
            "Vellangalloor"
        ],
        Idukki: [
            "Adimali",
            "Cheruthoni",
            "Erattupetta",
            "Kattappana",
            "Kumily",
            "Munnar",
            "Peerumade",
            "Thodupuzha",
            "Vandiperiyar"
        ],
        Ernakulam: [
            "Aluva",
            "Angamaly",
            "Ernakulam",
            "Kochi",
            "Muvattupuzha",
            "North Paravur",
            "Perumbavoor",
            "Puthencruz",
            "Thrippunithura"
        ],
        Thrissur: [
            "Chalakudy",
            "Guruvayur",
            "Irinjalakuda",
            "Kodungallur",
            "Koratty",
            "Mukundapuram",
            "Ollur",
            "Pudukkad",
            "Thrissur"
        ],
        Palakkad: [
            "Chittoor",
            "Cochin",
            "Palakkad",
            "Sreekrishnapuram",
            "Sreekrishnapuram",
            "Tirur"
        ],
        Malappuram: [
            "Areekode",
            "Kottakkal",
            "Malappuram",
            "Mankada",
            "Nilambur",
            "Perinthalmanna",
            "Tirur"
        ],
        Kozhikode: [
            "Kozhikode",
            "Koyilandy",
            "Mukkom",
            "Naduvattam",
            "Thamarassery",
            "Vadakara",
            "Vatakara"
        ],
        Wayanad: [
            "Kalpetta",
            "Mananthavady",
            "Sultan Bathery",
            "Vythiri"
        ],
        Kannur: [
            "Kannur",
            "Kasaragod",
            "Kuthuparamba",
            "Mattanur",
            "Thalassery",
            "Taliparamba"
        ],
        Kasaragod: [
            "Badiadkka",
            "Brahmavar",
            "Kasargod",
            "Kumbla",
            "Mangalpady",
            "Nileshwar"
        ]
    };
    const taluks = {
        Thiruvananthapuram: [
            "Thiruvananthapuram",
            "Nedumangad",
            "Vamanapuram",
            "Kattakkada",
            "Attingal",
            "Chirayinkeezhu",
            "Neyyattinkara",
            "Parassala",
            "Kumarapuram"
        ],
        Kollam: [
            "Kollam",
            "Kottarakara",
            "Paravur",
            "Punalur",
            "Chathannoor",
            "Anchal",
            "Sasthamkotta"
        ],
        Pathanamthitta: [
            "Pathanamthitta",
            "Adoor",
            "Konni",
            "Ranni",
            "Thiruvalla",
            "Muthoor"
        ],
        Alappuzha: [
            "Alappuzha",
            "Cherthala",
            "Kuttanadu",
            "Mavelikkara",
            "Changanassery"
        ],
        Kottayam: [
            "Kottayam",
            "Changanassery",
            "Puthuppally",
            "Kumarakom",
            "Mutholy"
        ],
        Idukki: [
            "Idukki",
            "Kattappana",
            "Peerumade",
            "Thodupuzha",
            "Munnar"
        ],
        Ernakulam: [
            "Ernakulam",
            "Aluva",
            "Kochi",
            "Muvattupuzha",
            "North Paravur",
            "Perumbavoor"
        ],
        Thrissur: [
            "Thrissur",
            "Chalakudy",
            "Guruvayur",
            "Kodungallur",
            "Irinjalakuda"
        ],
        Palakkad: [
            "Palakkad",
            "Chittoor",
            "Ottappalam",
            "Mannarkkad",
            "Kollengode"
        ],
        Malappuram: [
            "Malappuram",
            "Perinthalmanna",
            "Kondotty",
            "Areekode",
            "Mankada"
        ],
        Kozhikode: [
            "Kozhikode",
            "Koyilandy",
            "Thamarassery",
            "Vadakara",
            "Balussery"
        ],
        Wayanad: [
            "Kalpetta",
            "Mananthavady",
            "Sultan Bathery",
            "Vythiri"
        ],
        Kannur: [
            "Kannur",
            "Thalassery",
            "Kuthuparamba",
            "Iritty",
            "Payyannur"
        ],
        Kasaragod: [
            "Kasaragod",
            "Kumbla",
            "Badiadka",
            "Mangalpady",
            "Nileshwar"
        ]
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleChange = (e) => {
        const { name, value,file } = e.target;
      
        setData({
            ...data,
            [name]: value,
        });
    
        // }
    };
    const handleImageChange = (e) => {
        console.log("in file", e.target.files[0]);
        
        const file = e.target.files[0];
        setData({
          ...data,
          certificate: file,
        });
      };

    const validate = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        const phoneRegex = /^\d{10}$/;

        if (!data.email) {
            console.log("here");

            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(data.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!data.regNo) {

            newErrors.regNo = 'Registeration Number is required';
        } if (!data.district) {
            newErrors.district = 'District is required';
        }
        if (!data.location) {
            newErrors.location = 'Location is required';
        } 
        
        if (!data.contact) {
            newErrors.contact = 'Phone Number is required';
        } 
        else if (!phoneRegex.test(data.contact)) {
            newErrors.contact = 'Phone Number Must Contain 10 digits ';
        }
        if (!data.panchayath) {
            newErrors.panchayath = 'Panchayath is required';
        }
       
        if (!data.pincode) {
            newErrors.pincode = 'Pincode is required';
        }
        if (!data.cpassword) {
            newErrors.cpassword = 'Confirm Password is required';
        }
        if (!data.certificate) {
            newErrors.certificate = 'Certificate is required';
        }
        if (!data.password) {
            newErrors.password = 'Password is required';
        } else if (!passwordRegex.test(data.password)) {
            newErrors.password = 'Password Must Contain 1 Uppercase,1 Symbol and 1 Number with minimum 6 characters';
        }
        else if (data.password != data.cpassword) {
            newErrors.password = 'Password and Confirm Password must be the same !';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleLogin = async (e) => {
        e.preventDefault()
        console.log(errors);

        console.log("api called", validate());

        if (!validate()) {
            toast.error('Please fix the errors in the form.');
            return;
        }

        try {
            console.log(data);
            
            const result = await registerWithFile(data, 'registerAkshaya');

            if (result.success) {
                console.log(result);

                toast.success('Registration successful!');
                navigate(`/akshaya-card/${result.user._id}`);


            } else {
                console.error('Registration error:', result);
                toast.error(result.message);
            }
        } catch (error) {
            console.error('Unexpected error:', error);
            toast.error('An unexpected error occurred during Registration');
        }
    };
    return (
        <div className='container'>

            <h2 className='akshaya-signup-mainText'>  Sign <span className='akshaya-signup-loginText'> Up !</span></h2>
            <div className='akshaya-signup-mainDiv'>

                <form onSubmit={handleLogin}>
                    <div className='row'>
                        <p>Akshaya Center</p>
                        <div className='col-md-5 p-2 '>
                            <input type="text" placeholder='Registration Number' className='form-control p-2' name='regNo' onChange={handleChange}></input>
                            {errors.regNo && <div id="nameError" className="invalid-feedback">{errors.regNo}</div>}
                        </div>
                        <div className='col-md-5 p-2 '>

                            <input type="text" placeholder='E-Mail' className='form-control p-2' name='email' onChange={handleChange}></input>

                            {errors.email && <div id="nameError" className="invalid-feedback">{errors.email}</div>}
                        </div>

                    </div>
                    <div className='row'>

                       
                        <div className='col-md-5 p-2 '>

                            <input type="text" placeholder='Phone Number' className='form-control p-2' name='contact' onChange={handleChange}></input>

                            {errors.contact && <div id="nameError" className="invalid-feedback">{errors.contact}</div>}
                        </div>

                    </div>
                    <div className='row'>
                        <p>Location</p>
                        <div className='col-md-5 p-2 '>
                            <input type="text" placeholder='Location' className='form-control p-2' name='location' onChange={handleChange}></input>

                            {errors.location && <div id="nameError" className="invalid-feedback">{errors.location}</div>}

                        </div>
                        <div className='col-md-5 p-2 '>
                            <select placeholder='District' className='form-control p-2' name='district' onChange={handleChange} value={data.district}>
                                <option value="">District</option>

                                <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                                <option value="Kollam">Kollam</option>
                                <option value="Pathanamthitta">Pathanamthitta</option>
                                <option value="Alappuzha">Alappuzha</option>
                                <option value="Kottayam">Kottayam</option>
                                <option value="Idukki">Idukki</option>
                                <option value="Ernakulam">Ernakulam</option>
                                <option value="Thrissur">Thrissur</option>
                                <option value="Palakkad">Palakkad</option>
                                <option value="Malappuram">Malappuram</option>
                                <option value="Kozhikode">Kozhikode</option>
                                <option value="Wayanad">Wayanad</option>
                                <option value="Kannur">Kannur</option>
                                <option value="Kasaragod">Kasaragod</option>
                            </select>

                            {errors.district && <div id="nameError" className="invalid-feedback">{errors.district}</div>}
                        </div>

                    </div>
                    <div className='row'>

                        <div className='col-md-5 p-2 '>
                          
                            <select className='form-control p-2' name='panchayath' onChange={handleChange} value={data.panchayath}>


                                <option value="">Panchayath</option>
                                {panchayaths[data.district]?.map((panchayath, index) => (
                                    <option value={panchayath}>   {panchayath}</option>
                                ))}
                            </select>
                            {errors.panchayath && <div id="nameError" className="invalid-feedback">{errors.panchayath}</div>}
                        </div>

                    </div>
                  
                    <div className='row'>

                        <div className='col-md-5 p-2 '>
                            <p>Pincode</p>
                            <input type="text" placeholder='pincode' className='form-control p-2' name='pincode' onChange={handleChange}></input>

                            {errors.pincode && <div id="nameError" className="invalid-feedback">{errors.pincode}</div>}
                        </div>
                        <div className='col-md-5 p-2 '>
                            <p>Document</p>
                            <input type="file" className='form-control p-2' name='certificate' onChange={handleImageChange}></input>

                            {errors.certificate && <div id="nameError" className="invalid-feedback">{errors.certificate}</div>}
                        </div>
                    </div>

                    <div className='row'>

                        <div className='col-md-5 p-2 '>
                            <div><p>Password</p></div>
                            <div style={{ position: 'relative' }}>
                                <input type={showPassword ? "text" : "password"}
                                    placeholder='Password'
                                    name="password"
                                    onChange={handleChange}
                                    className='form-control p-2 mt-4'
                                    style={{ paddingRight: '40px' }} >

                                </input>
                                <div className="vo-signup-password-toggle-icon" onClick={togglePasswordVisibility}>
                                    {showPassword ? <VscEyeClosed /> : <VscEye />}
                                </div>

                            </div>
                            {errors.password && <div id="nameError" className="invalid-feedback">{errors.password}</div>}

                        </div>
                        <div className='col-md-5 p-2 '>
                            <p> &nbsp;</p>
                            <div style={{ position: 'relative' }}>
                                <input type={showPassword ? "text" : "password"}
                                    placeholder='Confirm Password'
                                    name="cpassword"
                                    onChange={handleChange}
                                    className='form-control p-2 mt-4'
                                    style={{ paddingRight: '40px' }} >

                                </input>
                                <div className="vo-signup-password-toggle-icon" onClick={togglePasswordVisibility}>
                                    {showPassword ? <VscEyeClosed /> : <VscEye />}
                                </div>

                            </div>
                            {errors.cpassword && <div id="nameError" className="invalid-feedback">{errors.cpassword}</div>}
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-success vo-signup-button"
                    >Next</button>
                    <div className="mt-3 container vo-signup-link ">
                        Already have an account ? &nbsp;
                        <Link className="vo-signup-login" to="/vo-login">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup