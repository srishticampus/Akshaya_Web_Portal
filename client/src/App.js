
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
          {/* Admin  */}
          <Route path='/admin-login' element={[<LandingNavbar />, <AdminLogin />, <Footer />]} />
          <Route path='/admin-resetpwd' element={<AdminMain data="admin-resetpwd"/>} />
          <Route path='/admin-forgotpwd' element={[<LandingNavbar />, <ForgotPwd />, <Footer />]} />
          <Route path='/admin-home' element={<AdminMain data="admindashboard"/>} />


          {/* Akshaya  */}

          <Route path='/akshaya-signup' element={[<LandingNavbar />, <Signup />, <Footer />]} />
          <Route path='/akshaya-login' element={[<LandingNavbar />, <AkshayaLogin />, <Footer />]} />
          <Route path='/akshaya-home' element={<AkshayaMain data="akshaya-home"/>}/>
         <Route path='/akshaya-staff' element={<AkshayaMain data="akshaya-staff"/>}/>

          {/* Village Office  */}

          <Route path='/vo-signup' element={[<LandingNavbar />, <VOSignup />, <Footer />]} />
          <Route path='/vo-login' element={[<LandingNavbar />, <VOLogin />, <Footer />]} />
          <Route path='/vo-fogotpwd' element={[<LandingNavbar />, <VOForgotPwd />, <Footer />]} />
          <Route path='/vo-resetpwd/:id' element={[<LandingNavbar />, <VOResetPwd />, <Footer />]} />
          <Route path='/vo-home' element={<VOMain data="vo-home"/>}/>
         <Route path='/vo-staff' element={<VOMain data="vo-staff"/>}/>
         <Route path='/vo-add-staff' element={<VOMain data="vo-add-staff"/>}/>

        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
