import React,{useEffect, useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Buisness from './components/Buisness'
import { useDispatch,useSelector } from 'react-redux'
 import {getAllbusiness} from '../../store/store slices/businessesSlice'
const Businesses = () => {
    const {bussinesses, isLoading, error} = useSelector((state)=>state.businesses)
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(getAllbusiness());
      },[dispatch])
      let renderedBusinesses = bussinesses.map(business => 
        
       { return  <Col lg={4} md={6}>
                    <Buisness business={business}/>
                  </Col>
        
        }
        )

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
                    {renderedBusinesses}
                </Row>
 

            </div>
        </div>
    )
}

export default Businesses
