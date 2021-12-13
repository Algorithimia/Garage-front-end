import { Col, Row } from 'react-bootstrap'
import { Route, Routes} from 'react-router-dom'

import Owner_login from './Owner-login'
import Owner_register from './Owner-register'
import Process_nav from './Process_nav'
import Right_Section from './Process_right_section'
import Confirmation_code from './Confirmation-code'
import Forgot_password_email from './Forgot_password_email '
import Reset_password from './Reset_password'
import Reset_code from './Reset_code'
const Login_process=()=>{
    return(
        <>
         <div className='Login_process'>
         <Row>
             <Col sm={8}>
                <Process_nav />
             </Col>
             <Col sm={4}>
               <Right_Section />
             </Col>
          
         </Row>
        
        
       
       
        <Routes>
           
            <Route path="/owner_login" element={<Owner_login /> } exact  />
            <Route path="/owner_sign_in" element={<Owner_register />}  exact  />
            <Route path="/confirmation" element={<Confirmation_code />}  exact  />
            <Route path="/forget" element={<Forgot_password_email />}  exact  />
            <Route path="/reset" element={<Reset_password />}  exact  />
            <Route path="/resetcode" element={<Reset_code />}  exact  />
            
            
        </Routes>
   
      


         </div>
        </>
    )
}
export default Login_process