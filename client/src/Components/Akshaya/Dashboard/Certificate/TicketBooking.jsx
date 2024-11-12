import React from 'react'
import './Certificate.css'
import { useNavigate } from 'react-router-dom'
function TicketBooking() {
  const navigate = useNavigate()

  return (
    <div>


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

        <h2 className='applicant-mainTextProp'> TICKET BOOKING </h2>
        <div className='apply-cert-mainDiv'>

          <form >
            <div className='row'>
              <div className='col'>
                <button
                  type="submit"
                  className="btn ticket-booking"
                  onClick={() => {
                    window.open('https://www.irctc.co.in/nget/train-search', '_blank')
                    navigate('/akshaya-apply-certificate')
                  }
                  }
                >Train Ticket</button>
              </div>
              <div className='col'>
                <button
                  type="submit"
                  className="btn ticket-booking"
                  onClick={() => {
                    window.open('https://www.ixigo.com/flights?utm_source=Google_Search&utm_medium=paid_search_google_sweet16&utm_campaign=Generic_Search_Desktop_Sept&gad_source=1&gclid=Cj0KCQiArby5BhCDARIsAIJvjIQw-jcrrjor3E8NmpndAYp-LHIKe0KdJ5EA_krmDavbQV84jVgSXagaAklEEALw_wcB&loginVisible=true', '_blank')
                    navigate('/akshaya-apply-certificate')
                  }

                  } >Flight Ticket</button>
              </div>
            </div>
            <div className='row'>
              <div className='col'>

                <button
                  type="submit"
                  className="btn ticket-booking"
                  onClick={() => {
                    window.open('https://in.bookmyshow.com/explore/home/trivandrum', '_blank')
                    navigate('/akshaya-apply-certificate')
                  }
                  }
                >Movie Ticket</button>
              </div>
              <div className='col'>
                <button
                  type="submit"
                  className="btn ticket-booking"
                  onClick={() => {
                    window.open('https://onlineksrtcswift.com/', '_blank')
                    navigate('/akshaya-apply-certificate')
                  }
                  }

                >KSRTC Ticket</button>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <button
                  type="submit"
                  className="btn ticket-booking"
                  onClick={() => {
                    window.open('https://www.makemytrip.com/hotels/', '_blank')
                    navigate('/akshaya-apply-certificate')
                  }
                  }

                >Hotel Room</button>
              </div>
              <div className='col'>
                <button
                  type="submit"
                  className="btn ticket-booking"
                  onClick={() => {
                    window.open('https://www.redbus.in/', '_blank')
                    navigate('/akshaya-apply-certificate')
                  }
                  }


                >Bus Ticket</button>
              </div>
            </div>











            <button
              type="submit"
              className="btn btn-success vo-signup-button"
            >Next</button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default TicketBooking