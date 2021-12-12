import { Row, Col,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Process_nav =()=>{
    return (

        <>
        <div>
          <div className='navv'>
         <Row>
          <Col sm={12}lg={3}>
            <Link to='/'>
               <img className='Land_logo' src='/images/cycle one/GarageWorkLogo.png' />
            </Link>
          </Col>
          <Col sm={8} lg={7}>
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
                  Contact_Us
                </span>
             
          
           </div>  
          </Col>
         
         </Row>

        </div>
        </div>  
        </>
    )
}
export default Process_nav