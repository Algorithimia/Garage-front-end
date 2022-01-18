
import { Row, Col,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Login_type from "./Login_type"
const Login_choose=()=>{
    return(
    <>
     <div className='log-sign'>
        <div className='log-sign_image'>
         <div className='opacity'>
         <Container>
            <Row className="justify-content-md-center">
              <Col md='6'>
                <Login_type
                    title='Vehicle Owner' 
                    p='vehicle owner seeking maintenance for his vehicle or using other services' 
                    button_text='Login'
                    logo_url="images/cycle one/service_icons/Rectangle 101.png"
                    background_color='#71A43F'
                    link='/login_process'
            
                />
              </Col>
              <Col md='6'>
                    <Login_type
                        title='Garage Owner/Employee' 
                        p='Garage or Spare Part Shop Owner or a Company who owns one or more garages or outlets' 
                        button_text='Login'
                        logo_url="images/cycle one/service_icons/icon_2.png"
                        background_color='#4390E0'
                        link='/login_process/owner_login'
                />
             </Col> 
            </Row>
         </Container>
        </div>
        </div>
        <div className='logo'>
            <Link to='/'>
            <img src='images/cycle one/GarageWorkLogo@2x.png' />
            </Link>
        </div>
        
     </div>
    </> 
    )
}
export default Login_choose