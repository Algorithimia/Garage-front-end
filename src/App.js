import React from 'react';
import { Route, Routes ,BrowserRouter as Router} from 'react-router-dom'


import Landing_page from "./cycle_one/Landing_page/Landing_page";
import Login_choose from './cycle_one/login-signin/Login_choose';
import Signin_choose from './cycle_one/login-signin/SignIn_choose';
import Login_process from './cycle_one/login-signin/Login_process';
import WorkshopRoutes from './cycle_one/workshops/WorkshopRoutes';
import EmployRoutes from './cycle_one/Employ dashbord/EmployRoutes';
import VehicleOwnerRoutes from './cycle_one/Vehichle/VehicleOwnerRoutes';
import About from './cycle_one/staticPages/About';
import Blog from './cycle_one/staticPages/Blog';
import ContactUs from './cycle_one/staticPages/ContactUs';
import Team from './cycle_one/staticPages/Team';
import Cookies from './cycle_one/staticPages/Cookies';
import TermsService from './cycle_one/staticPages/TermsService';
import FAQ from './cycle_one/staticPages/FAQ';
import Help from './cycle_one/staticPages/Help';
import HowItWorks from './cycle_one/staticPages/HowItWorks';
import Pricing from './cycle_one/staticPages/Pricing';
import Features from './cycle_one/staticPages/Features';


const  App=() => {
  return (
    <>


    

        <Router>

   
           <Routes>
                <Route path="/" element={<Landing_page />} exact />
                <Route path="/login_choose" element={<Login_choose />} exact />
                <Route path="/sign_in_choose" element={<Signin_choose />} exact />
                <Route path="/login_process/*" element={<Login_process />} exact />
                <Route path="/workshop/*" element={<WorkshopRoutes />} exact />
                <Route path="/employ/*" element={<EmployRoutes />} exact />
                <Route path="/vehicleowmer/*" element={<VehicleOwnerRoutes/>} exact />
                  {/* static pages */}
                <Route path="/about" element={<About />} exact />
                <Route path="/contact" element={<ContactUs />} exact />
                <Route path="/blog" element={<Blog />} exact />
                <Route path="/team" element={<Team />} exact />
                <Route path="/cookies" element={<Cookies />} exact />
                <Route path="/service" element={<TermsService />} exact />
                <Route path="/FAQ" element={<FAQ />} exact />
                <Route path="/help" element={<Help />} exact />
                <Route path="/howItWorks" element={<HowItWorks />} exact />
                <Route path="/pricing" element={<Pricing />} exact />
                <Route path="/features" element={<Features />} exact />
               
            </Routes>

        </Router>
          
    
    </>
  );
}

export default App;
