import React from 'react'
import './Service.css'
import icon1 from './ServiceIcons/1.png'
import icon2 from './ServiceIcons/2.png'
import icon3 from './ServiceIcons/3.png'
import icon4 from './ServiceIcons/4.png'
import icon5 from './ServiceIcons/5.png'
import icon6 from './ServiceIcons/6.png'

function Service() {
  return (
    <>
      <div className='container'>
        <h1 className='service_heading'>Services</h1>
        <p className='head_para'>Streamlining everything from property management to Aadhaar, PAN, passport services, and more—all in one place!</p>

        <div className='row mb-5'>
          <div className='col-sm-4'>
            <div className='card'>
              <div className='card-header'>
                <img src={icon1} alt='img1'></img>
              </div>
              <div className='card-body'>
                <h1 className='card-title'>Property & Land Management</h1>
                <p className='para'>Easily access and manage property and land records, including ownership details and land disputes, through a user-friendly interface.</p>
              </div>

              <div className='card-footer'>
                <button className='btn' id='button_color'>Read More &gt;</button>
              </div>
            </div>
          </div>
          <div className='col-sm-4'>
            <div className='card'>
              <div className='card-header'>
                <img src={icon2} alt='img1'></img>
              </div>
              <div className='card-body'>
                <h1 className='card-title'>Adhaar Enrollment & Updation</h1>
                <p className='para'>Whether you're enrolling for a new Aadhaar card or updating existing details, Akshaya provides a smooth and efficient process to ensure your information is always accurate and...</p>
              </div>
              <div className='card-footer'>
                <button className='btn' id='button_color'>Read More &gt;</button>
              </div>
            </div>
          </div>
          <div className='col-sm-4'>
            <div className='card'>
              <div className='card-header'>
                <img src={icon3} alt='img1'></img></div>
              <div className='card-body'>
                <h1 className='card-title'>Election management Work</h1>
                <p className='para'>Stay on top of voter registration, verify your election details, and ensure your voice is heard with Akshaya’s easy election management services.</p>
              </div>
              <div className='card-footer'>
                <button className='btn' id='button_color'>Read More &gt;</button>
              </div>
            </div>
          </div>
        </div>
        <div className='row mb-5'>
          <div className='col-sm-4'>
            <div className='card'>
              <div className='card-header'>
                <img src={icon1} alt='img1' />
              </div>
              <div className='card-body'>
                <h1 className='card-title'>Property & Land Management</h1>
                <p className='para'>Easily access and manage property and land records, including ownership details and land disputes, through a user-friendly interface.</p>
              </div>
              <div className='card-footer'>
                <button className='btn' id='button_color'>Read More &gt;</button>
              </div>
            </div>
          </div>

          <div className='col-sm-4'>
            <div className='card'>
              <div className='card-header'>
                <img src={icon2} alt='img1' />
              </div>
              <div className='card-body'>
                <h1 className='card-title'>Aadhaar Enrollment & Updation</h1>
                <p className='para'>Whether you're enrolling for a new Aadhaar card or updating existing details, Akshaya provides a smooth and efficient process to ensure your information is always accurate.</p>
              </div>
              <div className='card-footer'>
                <button className='btn' id='button_color'>Read More &gt;</button>
              </div>
            </div>
          </div>

          <div className='col-sm-4'>
            <div className='card'>
              <div className='card-header'>
                <img src={icon3} alt='img1' />
              </div>
              <div className='card-body'>
                <h1 className='card-title'>Election Management Work</h1>
                <p className='para'>Stay on top of voter registration, verify your election details, and ensure your voice is heard with Akshaya’s easy election management services.</p>
              </div>
              <div className='card-footer'>
                <button className='btn' id='button_color'>Read More &gt;</button>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-4'>
            <div className='card'>
              <div className='card-header'>
                <img src={icon4} alt='img1' />
              </div>
              <div className='card-body'>
                <h1 className='card-title'>PAN Card Service</h1>
                <p className='para'>Apply for a new PAN card or update your existing details with ease. Akshaya streamlines the process, ensuring that you receive your PAN without hassle.</p>
              </div>
              <div className='card-footer'>
                <button className='btn' id='button_color'>Read More &gt;</button>
              </div>
            </div>
          </div>

          <div className='col-sm-4'>
            <div className='card'>
              <div className='card-header'>
                <img src={icon5} alt='img1' />
              </div>
              <div className='card-body'>
                <h1 className='card-title'>Ticket Booking</h1>
                <p className='para'>From travel to events, book tickets effortlessly through the portal, saving time and effort with a user-friendly interface.</p>
              </div>
              <div className='card-footer'>
                <button className='btn' id='button_color'>Read More &gt;</button>
              </div>
            </div>
          </div>

          <div className='col-sm-4'>
            <div className='card'>
              <div className='card-header'>
                <img src={icon6} alt='img1' />
              </div>
              <div className='card-body'>
                <h1 className='card-title'>Passport Service</h1>
                <p className='para'>Apply for a new passport, renew your existing one, or track the status of your application. Akshaya ensures a smooth and transparent process.</p>
              </div>
              <div className='card-footer'>
                <button className='btn' id='button_color'>Read More &gt;</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Service