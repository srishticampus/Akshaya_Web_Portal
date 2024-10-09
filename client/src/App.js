
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
import AdminDashboard from './Components/Admin/AdminDashBoard.js/AdminDashboard';
import ResetPwd from './Components/Admin/ResetPwd/ResetPwd';
import ForgotPwd from './Components/Admin/ForgotPwd/ForgotPwd';
import Signup from './Components/Akshaya/Signup/Signup';
import VOSignup from './Components/VillageOffice/Signup/VOSignup';
import VOLogin from './Components/VillageOffice/Signup/VOLogin';
import TopComponent from './Components/LandingPage/TopComponent';
import About from './Components/LandingPage/About';
import BottomComponent from './Components/LandingPage/BottomComponent';
import Service from './Components/LandingPage/Service';


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
          <Route path='/admin-home' element={[<LandingNavbar />, <AdminDashboard />, <Footer />]} />
          <Route path='/admin-resetpwd' element={[<LandingNavbar />, <ResetPwd />, <Footer />]} />
          <Route path='/admin-forgotpwd' element={[<LandingNavbar />, <ForgotPwd />, <Footer />]} />


          {/* Akshaya  */}

          <Route path='/akshaya-signup' element={[<LandingNavbar />, <Signup />, <Footer />]} />


          {/* Village Office  */}

          <Route path='/vo-signup' element={[<LandingNavbar />, <VOSignup />, <Footer />]} />
          <Route path='/vo-login' element={[<LandingNavbar />, <VOLogin />, <Footer />]} />

        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
