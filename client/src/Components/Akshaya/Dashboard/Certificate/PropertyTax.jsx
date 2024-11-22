import React, { useEffect, useState } from 'react'
import { VscEyeClosed } from "react-icons/vsc";
import { toast } from "react-toastify";
import '../../../LandingPage/LandingNavbar.css'
import { VscEye } from "react-icons/vsc";
import '../../Signup/Signup.css'
import './Certificate.css'
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { register,ViewById } from '../../../Services/CommonServices';

function PropertyTax({aid}) {

console.log(aid);

    const [data, setData] = useState({
        applicationType:'Property Tax',
        applicantId:aid
    });
console.log(data);

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const [village, setVillage] = useState([]);
    const fetchdata = async () => {
      try {
          const result = await ViewById('viewVillageByDistrict',data.district);
  
          if (result.success) {
              console.log(result);
              setVillage(result.user||[]);
          }
      } catch (error) {
          console.error('Unexpected error:', error);
          toast.error('An unexpected error occurred during login');
      }
  };
    useEffect(() => {
    
      fetchdata();
  }, [data.district]);

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

  
    const handleChange = (e) => {
        const { name, value, file } = e.target;

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

        if (!data.ward) {
            console.log("here");

            newErrors.ward = 'Ward No is required';
        }
        if (!data.door) {

            newErrors.door = 'Door No. is required';
        } 
        if (!data.localbody) {
            newErrors.localbody = 'Localbody is required';
        }

        if (!data.areaType) {
            newErrors.areaType = 'Area Type is required';
        }
        
        if (!data.vo) newErrors.vo = 'Village Office is required';

        if (!data.district) newErrors.district = 'District is required';
        if (!data.subno) {
            newErrors.subno = 'Sub No is required';
        }
        if (!data.year) {
            newErrors.year = ' Ward Year is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleLogin = async (e) => {
        e.preventDefault()
        console.log(errors);
// data.applicantId=aid
        console.log("api called", validate());

        if (!validate()) {
            toast.error('Please fix the errors in the form.');
            return;
        }

        try {
            console.log(data);

            const result = await register(data, 'registerApplication');

            if (result.success) {
                console.log(result);
              if(result.gotTax){
                navigate(`/tax-payment/${result.tax.appNo}`)
              }
                toast.success('Application Send successful!');
               


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
            <div className='row'>
                <div className="row position-relative">
                    <div className="col-3">
                        <h2 className="apply-cert-mainText1">Apply Certificates</h2>
                    </div>
                    <div className="col-6 ms-auto text-end position-relative apply-cert-mainText1">

                    </div>
                </div>

            </div>

            <h2 className='applicant-mainTextProp'>  Property & Land Management</h2>
            <div className='apply-cert-mainDiv'>

                <form onSubmit={handleLogin}>
                    <div className='row'>
                        <p>District</p>
                        <div className='col-md-6 p-2 '>
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
                   

                       
            <div className='col-md-6 p-2'>
            
            
            <select placeholder='District' className='form-control p-2' name='vo' onChange={handleChange} value={data.vo}>
                <option value="">Village Office</option>
{village.length>0?village.map(x=>{

return(<>
                <option value={x._id}>{x.village}</option>
               
                </>
)
              }):<></>
            }
              </select>
              {errors.vo && <div id="nameError" className="invalid-feedback">{errors.vo}</div>}

            
          </div>
          </div>
                    <div className='row'>


                    <div className='col-md-10 p-2 '>
                        <p>Local Body Type</p>
                        <select placeholder='areaType' className='form-control p-2' name='areaType' onChange={handleChange} value={data.areaType}>
                                <option value="">Local Body Type</option>

                                <option value="Panchayath">Panchayath</option>
                                <option value="Corperation">Corperation</option>
                            </select>
                            {errors.areaType && <div id="nameError" className="invalid-feedback">{errors.areaType}</div>}
                       

                        </div>

                    </div>
                    <div className='row'>
                        <p>Local Body</p>
                        <div className='col-md-10 p-2 '>
                        <select className='form-control p-2' name='localbody' onChange={handleChange} value={data.localbody}>


<option value="">Choose the local body</option>
{data.areaType === 'Panchayath' ? panchayaths[data.district]?.map((panchayath, index) => (
    <option value={panchayath}>{panchayath}</option>
)) : (
    corporations[data.district]?.map((panchayath, index) => (
        <option value={panchayath}>{panchayath}</option>)))}
</select>
{errors.localbody && <div id="nameError" className="invalid-feedback">{errors.localbody}</div>}
</div>


                    </div>


                    <div className='row'>

                    <div className='col-md-10 p-2 '>
                    <p>Ward Year</p>

                            <select placeholder='District' className='form-control p-2' name='year' onChange={handleChange} value={data.year}>
                                <option value="">Ward Year</option>

                                <option value="2007">2007</option>
                                <option value="2008">2008</option>
                                <option value="2012">2010</option>
                                <option value="2012">2012</option>
                                <option value="2015">2015</option>
                                <option value="2018">2018</option>
                                <option value="2020">2020</option>
                                <option value="2023">2023</option>
                                
                            </select>

                            {errors.year && <div id="nameError" className="invalid-feedback">{errors.year}</div>}
                        </div>
                    </div>
                    <div className='row'>
                    <p>Ward No / Door No /Sub No</p>
<div className='col-md-4 p-2 '>


<input type="text" placeholder='Ward No' className='form-control p-2' name='ward' onChange={handleChange}></input>

        {errors.ward && <div id="nameError" className="invalid-feedback">{errors.ward}</div>}
    </div>
    <div className='col-md-4 p-2 '>
      
<input type="text" placeholder='Door No' className='form-control p-2' name='door' onChange={handleChange}></input>

        {errors.door && <div id="nameError" className="invalid-feedback">{errors.door}</div>}
    </div>
    <div className='col-md-4 p-2 '>
      
<input type="text" placeholder='Sub No' className='form-control p-2' name='subno' onChange={handleChange}></input>

        {errors.subno && <div id="nameError" className="invalid-feedback">{errors.subno}</div>}
    </div>
</div>

                    <button
                        type="submit"
                        className="btn btn-success vo-signup-button"
                    
                    >Next</button>
                  
                </form>
            </div>
        </div>
    )
}

export default PropertyTax