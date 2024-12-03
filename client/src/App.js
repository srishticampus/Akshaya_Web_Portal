
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import ScrollToTop from './Components/LandingPage/ScrollToTop';
import LandingNavbar from './Components/LandingPage/LandingNavbar';
import AdminLogin from './Components/Admin/AdminLogin';
import Footer from './Components/LandingPage/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminDashboard from './Components/Admin/AdminDashBoard/AdminDashboard';
import ResetPwd from './Components/Admin/ResetPwd/ResetPwd';
import ForgotPwd from './Components/Admin/ForgotPwd/ForgotPwd';
import Signup from './Components/Akshaya/Signup/Signup';
import VOSignup from './Components/VillageOffice/Signup/VOSignup';
import VOLogin from './Components/VillageOffice/Signup/VOLogin';
import TopComponent from './Components/LandingPage/TopComponent';
import About from './Components/LandingPage/About';
import BottomComponent from './Components/LandingPage/BottomComponent';
import Service from './Components/LandingPage/Service';
import VOForgotPwd from './Components/VillageOffice/Signup/PwdReset/VOForgotPwd';
import VOResetPwd from './Components/VillageOffice/Signup/PwdReset/VOResetPwd';
import AkshayaLogin from './Components/Akshaya/Login/AkshayaLogin';
import AdminHome from './Components/Admin/AdminDashBoard/AdminHome';
import AdminNavber from './Components/Admin/AdminDashBoard/AdminNavber';
import AdminMain from './Components/Admin/AdminDashBoard/AdminMain';
import VOMain from './Components/VillageOffice/Dashboard/VOMain'
import AkshayaMain from './Components/Akshaya/Dashboard/AkshayaMain';
import StaffLogin from './Components/Staff/StaffLogin';
import StaffMain from './Components/Staff/Dashboard/StaffMain';
import AddCard from './Components/Akshaya/Signup/AddCard';
import ContactUs from './Components/LandingPage/ContactUs';

function App() {
  return (
    <BrowserRouter 
    basename='akshaya' >
      <ScrollToTop />
      <ToastContainer
        autoClose={3000}  // 3 seconds default close time
        hideProgressBar={true}  // Hide progress bar globally
        position="top-right"  // Default position for all toasts
      />
      <div className="App">
        <Routes>
          <Route path='/' element={[<LandingNavbar />,<TopComponent/>,<About/>,<Service/>,<BottomComponent/>,<Footer/>]} />
          <Route path='/about-us' element={[<LandingNavbar />,<About/>,<Footer/>]} />
          <Route path='/services' element={[<LandingNavbar />,<Service/>,<Footer/>]} />

          <Route path='/contact-us' element={[<LandingNavbar />,<ContactUs/>,<Footer/>]} />


          {/* Admin  */}
          <Route path='/admin-login' element={[<LandingNavbar />, <AdminLogin />, <Footer />]} />
          <Route path='/admin-resetpwd' element={<AdminMain data="admin-resetpwd"/>} />
          <Route path='/admin-forgotpwd' element={[<LandingNavbar />, <ForgotPwd />, <Footer />]} />
          <Route path='/admin-home' element={<AdminMain data="admindashboard"/>} />
          <Route path='/admin-view-akshaya' element={<AdminMain data="admin-view-akshaya"/>}/>
          <Route path='/admin-view-vo' element={<AdminMain data="admin-view-vo"/>}/>
          <Route path='/admin-complaints' element={<AdminMain data="admin-complaints"/>}/>
          <Route path='/admin-faqs' element={<AdminMain data="admin-faqs"/>}/>
          <Route path='/admin-edit-faqs' element={<AdminMain data="admin-edit-faqs"/>}/>
          <Route path='/admin-add-faqs' element={<AdminMain data="admin-add-faqs"/>}/>
          <Route path='/admin-view-staff' element={<AdminMain data="admin-view-staff"/>}/>
          <Route path='/admin-feedback' element={<AdminMain data="admin-feedback"/>}/>


          {/* Akshaya  */}

          <Route path='/akshaya-signup' element={[<LandingNavbar />, <Signup />, <Footer />]} />
          <Route path='/akshaya-login' element={[<LandingNavbar />, <AkshayaLogin />, <Footer />]} />
          <Route path='/akshaya-card/:id' element={[<LandingNavbar />, <AddCard />, <Footer />]} />

          <Route path='/akshaya-home' element={<AkshayaMain data="akshaya-home"/>}/>
         <Route path='/akshaya-staff' element={<AkshayaMain data="akshaya-staff"/>}/>

         <Route path='/akshaya-apply-certificate' element={<AkshayaMain data="akshaya-apply-certificate"/>}/>
         <Route path='/akshaya-add-complaint' element={<AkshayaMain data="akshaya-add-complaint"/>}/>
         <Route path='/apply-certificate' element={<AkshayaMain data="apply-certificate"/>}/>
         <Route path='/appconfirm/:appNo' element={<AkshayaMain data="appconfirm"/>}/>
         <Route path='/tax-payment/:id' element={<AkshayaMain data="tax-payment"/>}/>
         <Route path='/akshaya-complaints' element={<AkshayaMain data="akshaya-complaints"/>}/>
          <Route path='/akshaya-feedback' element={<AkshayaMain data="akshaya-feedback"/>}/>
          <Route path='/akshaya-resetpwd' element={<AkshayaMain data="akshaya-resetpwd"/>}/>


          {/* Village Office  */}

          <Route path='/vo-signup' element={[<LandingNavbar />, <VOSignup />, <Footer />]} />
          <Route path='/vo-login' element={[<LandingNavbar />, <VOLogin />, <Footer />]} />
          <Route path='/vo-fogotpwd' element={[<LandingNavbar />, <VOForgotPwd />, <Footer />]} />
          <Route path='/vo-resetpwd/:id' element={[<LandingNavbar />, <VOResetPwd />, <Footer />]} />
          <Route path='/vo-home' element={<VOMain data="vo-home"/>}/>
         <Route path='/vo-staff' element={<VOMain data="vo-staff"/>}/>
         <Route path='/vo-add-staff' element={<VOMain data="vo-add-staff"/>}/>
         <Route path='/vo-view-apps' element={<VOMain data="vo-view-apps"/>}/>
         <Route path='/vo-view-details/:id' element={<VOMain data="vo-view-details"/>}/>
         <Route path='/view-apps-cert' element={<VOMain data="view-apps-cert"/>}/>
         <Route path='/vo-view-generate/:id' element={<VOMain data="vo-view-generate"/>}/>
         <Route path='/vo-view-complaints' element={<VOMain data="vo-view-complaints"/>}/>
         <Route path='/vo-resetpwd' element={<VOMain data="vo-resetpwd"/>}/>


{/* Staff */}
         <Route path='/staff-login' element={[<LandingNavbar />, <StaffLogin />, <Footer />]} />
         <Route path='/staff-home' element={<StaffMain data="staff-home"/>}/>
         <Route path='/staff-view-details/:id' element={<StaffMain data="staff-view-details"/>}/>
         <Route path='/staff-applications' element={<StaffMain data="staff-applications"/>}/>
         <Route path='/staff-view-tax-reqs' element={<StaffMain data="staff-view-tax-reqs"/>}/>

         <Route path='/staff-view-aprvd-details/:id' element={<StaffMain data="staff-view-aprvd-details"/>}/>
         <Route path='/staff-view-tax-details/:id' element={<StaffMain data="staff-view-tax-details"/>}/>

        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
