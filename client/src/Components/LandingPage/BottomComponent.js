import React from 'react'
import './BottomComponent.css'
import img from '../../Assets/rating.png'
function BottomComponent() {
  return (
    <div className='bottom-maindiv'>
         <div className='bottom-topDiv'><p className='bottom-bottompara1 '>"Empowering you with seamless solutions for life’s essential tasks, 
         so you can <br/>focus on what truly matters."</p></div>
        <div className='bottom-div'>
         
    
      
   
    <div className='bottom-bottomDiv'>
    <div class="container">
  <div class="row bottom-bottomCardrow">
    <div class="col bottom-bottomCardbody ">
    <img src={img}/>
    <p className='mt-3 text-justify'>"Booked my train ticketseasily through them,
       and the process was smooth. Great customer support!"</p>
   
   <p className='mt-3'><span className='fw-bold'>Abiniya </span>  -  June 28, 2018</p> </div>
    <div class="col bottom-bottomCardbody ">
    <img src={img}/>

      <p className='mt-3 text-justify'>"Their PAN card services were fast and reliable—saved me a lot of time.
         I'll definitely use their services again!"</p>
         <p className='mt-3'><span className='fw-bold'>Mahesh </span> -  July 18, 2018</p>
    </div>
  
    <div class="col bottom-bottomCardbody ">
    <img src={img}/>
<p className='mt-3 text-justify'>"Exceptional service! They handled my Aadhaar
     update quickly and without any hassle. Highly recommended!"</p>
     <p className='mt-3'><span className='fw-bold'>Antony </span>  -  June 28, 2018</p>
    </div>
   
  </div>
</div>
</div>
    </div>
    </div>
  )
}

export default BottomComponent