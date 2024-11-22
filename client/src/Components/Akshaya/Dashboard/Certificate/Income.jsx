import React, { useEffect, useState } from 'react';
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { toast } from "react-toastify";
import '../../../LandingPage/LandingNavbar.css';
import '../../Signup/Signup.css';
import './Certificate.css';
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { registerWithFile, ViewById } from '../../../Services/CommonServices';

function Income({ aid }) {
  const [village, setVillage] = useState([]);

    const [data, setData] = useState({
      applicationType: 'Income Certificate',
      applicantId: aid,
      proofs: [],
      sourceOfIncome: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setData({ ...data, [name]: value });
    };
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
    const handleCheckboxChange = (e) => {
      const { name, checked } = e.target;
      setData(prevState => ({
        ...prevState,
        proofs: checked
          ? [...prevState.proofs, name]
          : prevState.proofs.filter(proof => proof !== name)
      }));
    };
  
    const proofOptions = ['Salary Certificate','Aadhar Card','Income Declaration Affidavit', 'Driving License', 'Passport'];
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setData({ ...data, [e.target.name]: file });
    };
  
    const validate = () => {
      const newErrors = {};
      if (!data.relationName) newErrors.relationName = "Father's/Mother's/Husband's Name is required";
      if (!data.aadhar) newErrors.aadhar = 'Aadhar Number is required';
      if (!data.address) newErrors.address = 'Address is required';
      if (!data.income) newErrors.income = 'Annual Income is required';
      if (!data.sourceOfIncome) newErrors.sourceOfIncome = 'Source of Income is required';
      if (data.proofs.length === 1) newErrors.proofs = 'Please select at least two proof';
      if (!data.vo) newErrors.vo = 'Village Office is required';

      if (!data.district) newErrors.district = 'District is required';
      if (!data.doc1) newErrors.doc1 = 'At least one document is required';
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleLogin = async (e) => {
      e.preventDefault();
      console.log(data);
      console.log(errors);

      if (!validate()) {
        toast.error('Please fix the errors in the form.');
        return;
      }
      try {
        const result = await registerWithFile(data, 'registerApplicationwithFile');
        if (result.success){

        navigate(`/appconfirm/${result.user.appNo}`);
        }
        else toast.error(result.message);
      } catch (error) {
        toast.error('An unexpected error occurred during Registration');
      }
    };
  
    return (
      <div className='container'>
        <h2 className='applicant-mainTextProp'>Income Certificate Application</h2>
        <div className='apply-cert-mainDiv'>
          <form onSubmit={handleLogin}>
          <div className='row'>
            <div className='col-md-6 p-2'>
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
  <div className='col-md-6 p-2'>
    <span>Father's/Mother's/Husband's Name</span>
    <input
      type="text"
      placeholder="Father's/Mother's/Husband's Name"
      className='form-control p-2'
      name='relationName'
      onChange={handleChange}
    />
    {errors.relationName && <div className="invalid-feedback">{errors.relationName}</div>}
  </div>

  <div className='col-md-6 p-2'>
    <span>Aadhar Number</span>
    <input
      type="text"
      placeholder='Aadhar Number'
      className='form-control p-2'
      name='aadhar'
      onChange={handleChange}
    />
    {errors.aadhar && <div className="invalid-feedback">{errors.aadhar}</div>}
  </div>
</div>

           
            <div className='row'>
              <p>Address</p>
              <div className='col-md-10 p-2 '>
                <input type="text" placeholder='Address' className='form-control p-2' name='address' onChange={handleChange}></input>
                {errors.address && <div className="invalid-feedback">{errors.address}</div>}
              </div>
            </div>
            <div className='row'>
             
              <div className='col-md-6 p-2 '>
              <span>Annual Income</span>
                <input type="text" placeholder='Annual Income' className='form-control p-2' name='income' onChange={handleChange}></input>
                {errors.income && <div className="invalid-feedback">{errors.income}</div>}
              </div>
      
             
              <div className='col-md-6 p-2 '>
              <span>Source of Income</span>
                <select className='form-control p-2' name='sourceOfIncome' onChange={handleChange} value={data.sourceOfIncome}>
                  <option value="">Select Source of Income</option>
                  <option value="Salary">Salary</option>
                  <option value="Business">Business</option>
                  <option value="Pension">Pension</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Other">Other</option>
                </select>
                {errors.sourceOfIncome && <div className="invalid-feedback">{errors.sourceOfIncome}</div>}
              </div>
            </div>
            <div className='row'>
              <p>Proof Produced</p>
              <div className='col-md-10 p-2 '>
                {proofOptions.map((proof, index) => (
                  <div key={index} className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name={proof}
                      onChange={handleCheckboxChange}
                    />
                    <label className="form-check-label" htmlFor={proof}>{proof}</label>
                  </div>
                ))}
                {errors.proofs && <div className="invalid-feedback">{errors.proofs}</div>}
              </div>
            </div>
            <div className='row'>
              <p>Documents</p>
              <div className='col-md-4 p-2 '>
                <input type="file" className='form-control p-2' name='doc1' onChange={handleImageChange}></input>
                {errors.doc1 && <div className="invalid-feedback">{errors.doc1}</div>}
              </div>
              <div className='col-md-4 p-2 '>
                <input type="file" className='form-control p-2' name='doc2' onChange={handleImageChange}></input>
              </div>
              <div className='col-md-4 p-2 '>
                <input type="file" className='form-control p-2' name='doc3' onChange={handleImageChange}></input>
              </div>
            </div>
            <button type="submit" className="btn btn-success vo-signup-button">Next</button>
          </form>
        </div>
      </div>
    );
}

export default Income;
