import { Route, Routes ,BrowserRouter as Router} from 'react-router-dom'


import Landing_page from "./cycle_one/Landing_page/Landing_page";
import Login_choose from './cycle_one/login-signin/Login_choose';
import Signin_choose from './cycle_one/login-signin/SignIn_choose';
import Login_process from './cycle_one/login-signin/Login_process';
import WorkshopRoutes from './cycle_one/workshops/WorkshopRoutes';

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
               
            </Routes>

        </Router>
          
    
    </>
  );
}

export default App;
