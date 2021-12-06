import { Row, Col } from 'react-bootstrap';
const Nav = ()=>{
    return(
     <>
        <div className='Land_nav'>
         <Row>
          <Col>
            <img className='Land_logo' src='images/cycle one/GarageWorkLogo.png' />
          </Col>
          <Col>
           <div className='options'>
            <Row>
              <Col>
                <span className='option active'>
                  Home
                </span>
              </Col>
              <Col>
                <span className='option'>
                   About
                </span>
              </Col>
              <Col>
                <span className='option'>
                  Blog
                </span>
              </Col>
              <Col>
                <span className='option'>
                  Contact Us
                </span>
              </Col>
            </Row>
           </div>  
          </Col>
          <Col>
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