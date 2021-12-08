import { Route, Routes ,BrowserRouter as Router} from 'react-router-dom'


import Landing_page from "./cycle_one/Landing_page/Landing_page";
import Login from './cycle_one/login-signin/Login';
import Signin from './cycle_one/login-signin/SignIn';

const  App=() => {
  return (
    <>

<Router>
    

  

   
           <Routes>
                <Route path="/" element={<Landing_page />} exact />
                <Route path="/login" element={<Login />} exact />
                <Route path="/sign_in" element={<Signin />} exact />
                
               
            </Routes>
     </Router>       
     
    </>
  );
}

export default App;
