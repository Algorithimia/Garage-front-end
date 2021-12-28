import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'


import BusinessDelt from './components/BusinessDelt'
const ChooseGrageFavourite = () => {
    return (
        <div className='opacity' >
           <div className='choose_grage'>
               <div className='header'>
                  CHOOSE THE GARAGE
               </div>
               <div className='search_div'>
                   <input placeholder='search a garage' /> 
                   <span>
                      <FaSearch />
                   </span>

               </div>

           
           
           <div className='gray_row'>  
             <Link to='/workshop/owner/choosegrage'>
             <div className='left '>
                All Businesses
              </div>
              </Link>
              <Link to='/workshop/owner/choosegragedeltwith'>
              <div className='center'>
                 Dealt with
              </div>
              </Link>
              <Link to='/workshop/owner/choosegragefavourite'>
              <div className='right active'>
                favourite
              </div>
              </Link>
              
         </div>
         <div className='body'>
             <Row>
                 <Col lg={4} md={6}>
                   <BusinessDelt favourite />
                 </Col>
                 <Col lg={4} md={6}>
                   <BusinessDelt favourite />
                 </Col>
                 <Col lg={4} md={6}>
                   <BusinessDelt favourite />
                 </Col>

             </Row>
             <Link to='/workshop/owner/addworkordergrage'>
                <button className='right'> 
                Choose &amp; Continue
                </button>
             </Link>

         </div>

        </div>

            
        </div>
    )
}

export default ChooseGrageFavourite
