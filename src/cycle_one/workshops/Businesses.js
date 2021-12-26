import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Buisness from './components/Buisness'
const Businesses = () => {
    return (
        <div className='businesses'>
          
            <div className='header'>
               All Businesses
               <div className='right'>
                  <input placeholder='Search Businesses'/>
                  <span><FaSearch /></span>

               </div>
            </div>
            <div className='gray_row'>  
                 <Link to='/workshop/owner/businesses'>
                 <div className='left active'>
                    All Businesses
                  </div>
                  </Link>
                  <Link to='/workshop/owner/dealtwithbusinesses'>
                  <div className='center'>
                     Dealt with
                  </div>
                  </Link>
                  <Link to='/workshop/owner/favbusinesses'>
                  <div className='right'>
                    favourite
                  </div>
                  </Link>
                  
                

            </div>

            <div className='body'>
                <Row>
                    <Col lg={4} md={6}>
                     <Buisness favourite={false}/>
                    
                    </Col>
                    <Col lg={4} md={6}>
                     <Buisness favourite={true}/>
                    
                    </Col>

                    <Col lg={4} md={6}>
                     <Buisness  favourite={false}/>
                    
                    </Col>
                    <Col lg={4} md={6}>
                     <Buisness favourite={true}/>
                    
                    </Col>
                    <Col lg={4} md={6}>
                     <Buisness  favourite={false}/>
                    
                    </Col>
                    <Col lg={4} md={6}>
                     <Buisness  favourite={true}/>
                    
                    </Col>
                    <Col lg={4} md={6}>
                     <Buisness  favourite={false}/>
                    
                    </Col>

                </Row>
 

            </div>
        </div>
    )
}

export default Businesses
