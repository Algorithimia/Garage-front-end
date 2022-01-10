import { Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom'
const Nav = ()=>{
    return(
     <>
        <div className='navv'>
         <Row>
          <Col md={12}lg={3}>
            <img className='Land_logo' src='/images/cycle one/GarageWorkLogo.png' />
          </Col>
          <Col md={8} lg={7}>
           <div className='options'>
            
              
                <span className='option active'>
                  Home
                </span>
            
                <span className='option'>
                   About
                </span>
            
                <span className='option'>
                  Blog
                </span>
              
                <span className='option'>
                  Contact-Us
                </span>
             
          
           </div>  
          </Col>
          <Col md={4} lg={2}>
           <div className='right'>
            <Link to='/login_choose'>
              <button className='dark_button'>Login</button>
            </Link>
           </div>
          </Col>
         </Row>

        </div>
    </>
    )
}
export default Nav