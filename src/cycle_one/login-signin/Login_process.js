import { Col, Row } from 'react-bootstrap'
import { Route, Routes, BrowserRouter as Router} from 'react-router-dom'

import Owner_login from './Owner-login'
import Owner_register from './Owner-register'
import Process_nav from './Process_nav'
import Right_Section from './Process_right_section'

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
             <Col sm={6}> <Owner_login /></Col>
         </Row>
        
        
       
       
        <Routes>
           
            <Route path="/owner_login" element={<Owner_login />} exact  />
            <Route path="/owner_sign_in" element={<Owner_register />}  exact  />
            
            
        </Routes>
      


         </div>
        </>
    )
}
export default Login_process