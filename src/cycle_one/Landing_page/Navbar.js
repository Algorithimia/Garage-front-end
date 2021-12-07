import { Row, Col } from 'react-bootstrap';
const Nav = ()=>{
    return(
     <>
        <div className='Land_nav'>
         <Row>
          <Col sm={3}>
            <img className='Land_logo' src='images/cycle one/GarageWorkLogo.png' />
          </Col>
          <Col sm={7}>
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
                  Contact Us
                </span>
             
          
           </div>  
          </Col>
          <Col sm={2}>
           <div className='right'>
           <button className='dark_button'>Login</button>
           </div>
          </Col>
         </Row>

        </div>
    </>
    )
}
export default Nav