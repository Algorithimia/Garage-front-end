import React , {useState} from 'react';
import { Row, Col,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Process_nav =()=>{



    return (

        <>
        <div>
          <div className='navv process_nav'>
         <Row>
          <Col md={12}lg={3}>
            <Link to='/'>
               <img className='Land_logo' src='/images/cycle one/GarageWorkLogo.png' />
            </Link>
          </Col>
          <Col md={8} lg={7}>
           <div className='options'>
            
                 <Link to='/'>
                <span className='option active'>
                  Home
                </span>
                </Link>
                <Link to='/about'>
                <span className='option'>
                   About
                </span>
                </Link>
                <Link to='/blog'>
                <span className='option'>
                  Blog
                </span>
                </Link>
                <Link to='/contact'>
                <span className='option'>
                  Contact_Us
                </span>
                </Link>
          
             
          
           </div>  
          </Col>
         
         </Row>

        </div>
        </div>  
        </>
    )
}
export default Process_nav