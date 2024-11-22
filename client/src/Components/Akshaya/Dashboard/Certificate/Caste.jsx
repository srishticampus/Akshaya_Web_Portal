import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import '../../../LandingPage/LandingNavbar.css';
import '../../Signup/Signup.css';
import './Certificate.css';
import { registerWithFile, ViewById } from '../../../Services/CommonServices';
import { viewCount } from '../../../Services/AdminService';
import { useNavigate } from 'react-router-dom';

function Caste({ aid }) {
  const [data, setData] = useState({
    applicationType: 'Caste Certificate',
    applicantId: aid,
    
    proofs: [],
    casteCategory: '',
    subCaste: ''
  });
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
  if(data.district)
    fetchdata();
}, [data.district]);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setData(prevState => ({
      ...prevState,
      proofs: checked
        ? [...prevState.proofs, name]
        : prevState.proofs.filter(proof => proof !== name)
    }));
  };

  const proofOptions = ['Ration Card', 'Aadhar Card', 'Birth Certificate', 'Caste Certificate of Parent', 'Voter ID'];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setData({ ...data, [e.target.name]: file });
  };

  const validate = () => {
    const newErrors = {};
    if (!data.relationName) newErrors.relationName = "Father's/Mother's Name is required";
    if (!data.aadhar) newErrors.aadhar = 'Aadhar Number is required';
    if (!data.address) newErrors.address = 'Address is required';
    if (!data.vo) newErrors.vo = 'Village Office is required';

    if (!data.district) newErrors.district = 'District is required';

    if (!data.casteCategory) newErrors.casteCategory = 'Caste Category is required';
    if (!data.subCaste) newErrors.subCaste = 'Sub-Caste is required';
    if (data.proofs.length === 0) newErrors.proofs = 'Please select at least one proof';
    if (!data.doc1) newErrors.doc1 = 'At least one document is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
const navigate=useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error('Please fix the errors in the form.');
      return;
    }
    try {
      const result = await registerWithFile(data, 'registerApplicationwithFile');
      if (result.success) 
        navigate(`/appconfirm/${result.user.appNo}`);
            else toast.error(result.message);
    } catch (error) {
      toast.error('An unexpected error occurred during Registration');
    }
  };

  return (
    <div className='container'>
      <h2 className='applicant-mainTextProp'>Caste Certificate Application</h2>
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
              <span>Father's/Mother's Name</span>
              <input
                type="text"
                placeholder="Father's/Mother's Name"
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
              <input
                type="text"
                placeholder='Address'
                className='form-control p-2'
                name='address'
                onChange={handleChange}
              />
              {errors.address && <div className="invalid-feedback">{errors.address}</div>}
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6 p-2'>
              <span>Caste Category</span>
              <input
                type="text"
                placeholder="Caste Category (e.g., SC, ST, OBC)"
                className='form-control p-2'
                name='casteCategory'
                onChange={handleChange}
              />
              {errors.casteCategory && <div className="invalid-feedback">{errors.casteCategory}</div>}
            </div>

            <div className='col-md-6 p-2'>
              <span>Sub-Caste</span>
              <input
                type="text"
                placeholder="Sub-Caste"
                className='form-control p-2'
                name='subCaste'
                onChange={handleChange}
              />
              {errors.subCaste && <div className="invalid-feedback">{errors.subCaste}</div>}
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

          <button type="submit" className="btn btn-success vo-signup-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Caste;
