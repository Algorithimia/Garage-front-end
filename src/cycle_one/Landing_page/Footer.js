import {Link} from 'react-router-dom'
import { Row, Col,Container } from 'react-bootstrap';
const Footer=()=>{
    return(
        <>
            <div className='footer'>
                <Row>
                    <Col lg={4} >
                    <div className='subscribe'>
                        <img  className='grage_logo' src='images/cycle one/GarageWorkLogo.png' />
                        <br/>
                        <span className="social_logo">
                        <img  src='images/cycle one/Icon_ionic-logo-google.png' />
                        </span>
                        <span className="social_logo">
                            <img   src='images/cycle one/Icon_awesome-twitter.png' />
                        </span>
                        <span className="social_logo">        
                        <img  src='images/cycle one/Icon_awesome-facebook-f.png' />
                        </span>
                        <br/>
                        <br/>
                        <input placeholder='@your_email'/>
                        <br/>
                        <button className='dark_button'>Subscribe</button> 
                    </div>   
                    </Col>
                    <Col lg={2}>
                        <div className='fotter_col'>
                        <span className='title'>Quick Links</span>
                        <br />
                        <Link to='/'>Join Us</Link>
                        <br />
                        <Link to='/'>Home</Link>
                        <br />
                        <Link to='/'>How It Works</Link>
                        <br />
                        <Link to='/'>Pricing</Link>
                        <br />
                        <Link to='/'>Features</Link>

                       
                     </div>
                    </Col>
                    <Col lg={2}>
                       <div className='fotter_col'>
                        <span  className='title'>Get To Know Us</span>
                        <br />
                        <Link to='/'>About Us</Link>
                        <br />
                        <Link to='/'>Our Team</Link>
                     </div>
                    </Col>
                    <Col lg={2}>
                     <div className='fotter_col'>
                      <span  className='title'>Other Services</span>
                      <br />
                        <Link to='/sign_in_choose'>Join Us</Link>
                        
                    
                       
                     </div>
                    </Col>
                    <Col lg={2}>
                   <div className='fotter_col'>
                    <span  className='title'>Resources</span>
                    <br />
                        <Link to='/'>Help</Link>
                        <br />
                        <Link to='/'>FAQ</Link>
                        <br />
                        <Link to='/'>Terms Of Services</Link>
                        <br />
                        <Link to='/'>Cookies Policies</Link>
                        <br />
                        

                     </div>
                    </Col>
                </Row>
                <div className="copyright">
                   <span >&copy; All Rights Reserved | Garage.Work</span>
                </div>

            </div>
        </>
    )
}
export default Footer