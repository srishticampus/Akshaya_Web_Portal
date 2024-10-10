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
        <div className='row mb-5 '>
          <div className='mycard col-sm-4'>
            <div className='card border-0'>
              <div className='mycardheader card-header border-0'>
                <img src={icon1} alt='img1' />
              </div>
              <div className='card-body border-0'>
                <h1 className='card-title'>Property & <br /> Land Management</h1>
                <p className='Service_para'>Easily access and manage property and land records, including ownership details and land disputes, through a user-friendly interface.</p>
                <button className='btn button_color mt-3'>Read More &nbsp; &gt;</button>
              </div>
            </div>
          </div>
          <div className='mycard col-sm-4'>
            <div className='card border-0' id='Service_card'>
              <div className='mycardheader card-header border-0'>
                <img src={icon2} alt='img2' />
              </div>
              <div className='card-body border-0'>
                <h1 className='card-title'>Aadhaar Enrollment & Updation</h1>
                <p className='Service_para'>Whether you're enrolling for a new Aadhaar card or updating existing details, Akshaya provides a smooth and efficient process to ensure your information is always accurate.</p>
                <button className='btn button_color'>Read More &nbsp; &gt;</button>
              </div>

            </div>
          </div>

          <div className='mycard col-sm-4'>
            <div className='card border-0' id='Service_card'>
              <div className='mycardheader card-header border-0'>
                <img src={icon3} alt='img3' />
              </div>
              <div className='card-body border-0'>
                <h1 className='card-title'>Election Management <br /> Work</h1>
                <p className='Service_para'>Stay on top of voter registration, verify your election details, and ensure your voice is heard with Akshaya’s easy election management services.</p>
                <button className='btn button_color mt-3'>Read More &nbsp; &gt;</button>
              </div>

            </div>
          </div>
        </div>

        <div className='row'>
          <div className='mycard col-sm-4'>
            <div className='card border-0' id='Service_card'>
              <div className='mycardheader card-header border-0'>
                <img src={icon4} alt='img1' />
              </div>
              <div className='card-body border-0'>
                <h1 className='card-title'>PAN Card Service</h1>
                <p className='Service_para'>Apply for a new PAN card or update your existing details with ease. Akshaya streamlines the process, ensuring that you receive your PAN without hassle.</p>
                <button className='btn button_color'>Read More &nbsp; &gt;</button>
              </div>

            </div>
          </div>

          <div className='mycard col-sm-4'>
            <div className='card border-0' id='Service_card'>
              <div className='mycardheader card-header border-0'>
                <img src={icon5} alt='img1' />
              </div>
              <div className='card-body'>
                <h1 className='card-title'>Ticket Booking</h1>
                <p className='Service_para'>From travel to events, book tickets effortlessly through the portal, saving time and effort with a user-friendly interface.</p>
                <button className='btn button_color'>Read More &nbsp; &gt;</button>
              </div>

            </div>
          </div>

          <div className='mycard col-sm-4'>
            <div className='card border-0 ' id='Service_card'>
              <div className='mycardheader card-header border-0'>
                <img src={icon6} alt='img1' />
              </div>
              <div className='card-body border-0'>
                <h1 className='card-title'>Passport Service</h1>
                <p className='Service_para'>Apply for a new passport, renew your existing one, or track the status of your application. Akshaya ensures a smooth and transparent process.</p>
                <button className='btn button_color'>Read More &gt;</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service