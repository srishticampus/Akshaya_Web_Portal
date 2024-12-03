import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/navbarlogo.png'
import './LandingNavbar.css'
import ReactStars from "react-rating-stars-component";
import { register, resetPassword } from '../Services/CommonServices';
import { toast } from "react-toastify";

function LandingNavbar() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const [data, setData] = useState({
    name: '',
    rating: 0,
    comments: ''
  });

  // Handle input change for name and comments
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleRatingChange = (newRating) => {
    setData((prevData) => ({
      ...prevData,
      rating: newRating
    }));
  };
  const addRating =async () => {
    console.log(data);
    
    try {
        const result = await register( data,'registerFeedback');
        console.log(result);
        if (result.success) {
          
           
            
               toast.success('Rating Added updated successfully');
               setShowModal(false)

        } else {
          console.error(' error:', result);
          toast.error(`Rating Not Added`);
        }
      } catch (error) {
        console.error('Unexpected error:', error);
        toast.error('An unexpected error occurred during Update Profile');
      }
  
  };

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar_bg">
      {/* <div className='container'></div> */}
      <div className="container-fluid">
        <Link to='/admin_home' className="text-decoration-none">
          <div className="navbar_logo">
            <img src={logo} className="img-fluid" alt="logo" />
           
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0 mt-3 landingnavbar_text" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
            <li className="nav-item m-3">
              <Link
                to='/'
                className="nav-link landingnavbar_text"
                aria-current="page"
              
              >
                Home
              </Link>
            </li>
            <li className="nav-item m-3">
              <Link
                to='/about-us'
                className="nav-link"
                aria-current="page"
            
              >
                About
              </Link>
            </li>
            <li className="nav-item m-3">
              <Link
                to='/contact-us'
                className="nav-link"
                aria-current="page"
               
              >
                Contact
              </Link>
            </li>
          
            <li className="nav-item m-3">
              <Link
                to="/services"
                 className="nav-link"
                aria-current="page"
              >
                Services
              </Link>
          
            </li>
            <li className="nav-item m-3">
            <span className="nav-link" role="button" onClick={handleOpenModal}>
                  Feedback
                </span>
          
            </li>
         
            {/* <div className="dropstart" > */}
            <div className="dropdown-center" >
            <li className="nav-item m-3">
              <Link
                to="#"
                className="nav-link "
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                id="text_color_white"
              >
               Login
              </Link>
              <ul className="dropdown-menu landing_dropdown_style " aria-labelledby="navbarDropdown" id='drop_down_show'>
                <li>
                  <Link to="/admin-login" className="dropdown-item">
                    Admin
                  </Link>
                </li>
               
                <li>
                  <Link to="/akshaya-login" className="dropdown-item">
                    Akshaya
                  </Link>
                </li>

                <li>
                  <Link to="/vo-login" className="dropdown-item">
                   Village Office
                  </Link>
                </li>
                <li>
                  <Link to="/staff-login" className="dropdown-item">
                   Office Staff
                  </Link>
                </li>
              </ul>
            </li>
            </div>
          
          </ul>
          
        </div>
      </div>
    </nav>

  

      {/* Modal */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Feedback</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label add-rating">Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="name" 
                      name="name"
                      value={data.name} 
                      onChange={handleInputChange}
                      placeholder="Enter your name" 
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="rating" className="form-label add-rating">Add Rating</label>
                    <ReactStars
                      count={5}
                      size={30}
                      value={data.rating}
                      onChange={handleRatingChange}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="comments" className="form-label add-rating">Add Comments</label>
                    <textarea 
                      className="form-control" 
                      id="comments"
                      name="comments"
                      value={data.comments}
                      onChange={handleInputChange}
                      rows="3" 
                      placeholder="Add your comments"
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                  Close
                </button>
                <button type="button" className="btn green-button" onClick={addRating}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
  </div>
)
  
}

export default LandingNavbar