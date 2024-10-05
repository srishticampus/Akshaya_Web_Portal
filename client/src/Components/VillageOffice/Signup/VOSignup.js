import React, { useState } from 'react'
import { VscEyeClosed } from "react-icons/vsc";
import { toast } from "react-toastify";
import '../../LandingPage/LandingNavbar.css'
import { VscEye } from "react-icons/vsc";
import './VOSignup.css'
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../Services/CommonServices';
function VOSignup() {
    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        district: '',
        panchayath: '',
        areaType: '',
        taluk: ''
    });

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
    const corporations = {
        Thiruvananthapuram: [
            "Thiruvananthapuram Corporation"
        ],
        Kollam: [
            "Kollam Corporation"
        ],
        Pathanamthitta: [
            "Pathanamthitta Municipality"
        ],
        Alappuzha: [
            "Alappuzha Municipal Corporation"
        ],
        Kottayam: [
            "Kottayam Municipality"
        ],
        Idukki: [
            "Idukki Municipality"
        ],
        Ernakulam: [
            "Kochi Corporation",
            "Thrippunithura Municipality",
            "Aluva Municipality",
            "Perumbavoor Municipality",
            "North Paravur Municipality"
        ],
        Thrissur: [
            "Thrissur Corporation"
        ],
        Palakkad: [
            "Palakkad Municipality"
        ],
        Malappuram: [
            "Malappuram Municipality",
            "Perinthalmanna Municipality",
            "Kondotty Municipality"
        ],
        Kozhikode: [
            "Kozhikode Corporation",
            "Koyilandy Municipality",
            "Vadakara Municipality"
        ],
        Wayanad: [
            "Kalpetta Municipality"
        ],
        Kannur: [
            "Kannur Corporation",
            "Thalassery Municipality",
            "Kuthuparamba Municipality"
        ],
        Kasaragod: [
            "Kasaragod Municipality"
        ]
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'district') {
            setData({ ...data, district: value, panchayath: '' });
        }
        else {
            setData({
                ...data,
                [name]: value,
            });
        }
    };

    const validate = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!data.email) {
            console.log("here");

            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(data.email)) {
            newErrors.email = 'Invalid email format';
        }

        if (!data.password) {
            newErrors.password = 'Password is required';
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
            const result = await login(data, 'adminLogin');

            if (result.success) {
                console.log(result);
                localStorage.setItem('admin', 1)
                toast.success('Login successful!');
                navigate('/admin-home');


            } else {
                console.error('Login error:', result);
                toast.error(result.message);
            }
        } catch (error) {
            console.error('Unexpected error:', error);
            toast.error('An unexpected error occurred during login');
        }
    };
    return (
        <div className='container'>

            <h2 className='vo-signup-mainText'>  Sign <span className='vo-signup-loginText'> Up !</span></h2>
            <div className='vo-signup-mainDiv'>

                <form onSubmit={handleLogin}>
                    <div className='row'>
                        <p>Village Officer</p>
                        <div className='col-md-5 p-2 '>
                            <input type="text" placeholder='Username' className='form-control p-2' name='username' onChange={handleChange}></input>
                            {errors.username && <div id="nameError" className="invalid-feedback">{errors.username}</div>}
                        </div>
                        <div className='col-md-5 p-2 '>
                           
                            <input type="text" placeholder='Username' className='form-control p-2' name='email' onChange={handleChange}></input>

                            {errors.password && <div id="nameError" className="invalid-feedback">{errors.password}</div>}
                        </div>

                    </div>
                    <div className='row'>
                        <p>Location</p>
                        <div className='col-md-5 p-2 '>
                            <select placeholder='areaType' className='form-control p-2' name='areaType' onChange={handleChange} value={data.areaType}>
                                <option value="">Area Type</option>

                                <option value="Panchayath">Panchayath</option>
                                <option value="Corperation">Corperation</option>
                            </select>
                            {errors.areaType && <div id="nameError" className="invalid-feedback">{errors.areaType}</div>}
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
                            <select placeholder='areaType' className='form-control p-2' name='areaType' onChange={handleChange} value={data.panchayath}>
                                <option value="">Taluk</option>
                                {taluks[data.district]?.map((taluk, index) => (
                                    <option value={taluk}>   {taluk}</option>
                                ))}
                            </select>
                            {errors.areaType && <div id="nameError" className="invalid-feedback">{errors.areaType}</div>}
                        </div>


                        <div className='col-md-5 p-2 '>
                            <select placeholder='areaType' className='form-control p-2' name='areaType' onChange={handleChange} value={data.areaType}>


                                <option value="">Choose the local body</option>
                                {data.areaType === 'Panchayath' ? panchayaths[data.district]?.map((panchayath, index) => (
                                    <option value={panchayath}>{panchayath}</option>
                                )) : (
                                    corporations[data.district]?.map((panchayath, index) => (
                                        <option value={panchayath}>{panchayath}</option>)))}
                            </select>
                            {errors.areaType && <div id="nameError" className="invalid-feedback">{errors.areaType}</div>}
                        </div>

                    </div>
                    <div className='row'>

                        <div className='col-md-5 p-2 '>
                            <input type="text" placeholder='Village' className='form-control p-2' name='village' onChange={handleChange}></input>

                            {errors.village && <div id="nameError" className="invalid-feedback">{errors.village}</div>}
                        </div>
                        <div className='col-md-5 p-2 '>
                            <input type="text" placeholder='Landmark' className='form-control p-2' name='landmark' onChange={handleChange}></input>

                            {errors.landmark && <div id="nameError" className="invalid-feedback">{errors.landmark}</div>}
                        </div>
                    </div>
                    <div className='row'>

<div className='col-md-5 p-2 '>
<p>Pincode</p>
    <input type="text" placeholder='pincode' className='form-control p-2' name='pincode' onChange={handleChange}></input>

    {errors.pincode && <div id="nameError" className="invalid-feedback">{errors.pincode}</div>}
</div>
<div className='col-md-5 p-2 '>
<p>Date Of Commencement</p>
    <input type="date"  className='form-control p-2' name='date' onChange={handleChange}></input>

    {errors.date && <div id="nameError" className="invalid-feedback">{errors.date}</div>}
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
                                {errors.password && <div id="nameError" className="invalid-feedback">{errors.password}</div>}

                            </div>
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
                    >SignUp</button>
                    <div className="mt-3 container vo-signup-link ">
                        Already have an account ? &nbsp;
                        <Link className="vo-signup-login" to="/vo-login">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default VOSignup