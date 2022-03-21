import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Appointment from './Appointment'
import CurentOrders from './CurentOrders'
import GARAGEWORKSHOPS from './GARAGEWORKSHOPS'
import PROFILE from './PROFILE'
import YourVehicles from './YourVehicles'
import {FaSearch} from 'react-icons/fa'

const Dashbord = () => {
  return (
    <div className='dashbord'>
      <div className='Vehichle-owner-info'>
        <img 
           src='https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?t=st=1647862471~exp=1647863071~hmac=43a6f0207c7a0943ce255a93cd53faefb15dfc19fb5bc1330e4d1eae3ec5e500&w=996'
        />
     
        <span>Vincent Hawkins</span>
         <span className="search-container"> 
         <input className="search" type='search'  placeholder='SEARCH GARAGES'/>
          <span className="icon"> <FaSearch /></span>
         </span>
      
      </div>
      <Row>
        <Col  sm={12} md={12} lg={6}>
          <YourVehicles />
        </Col>
        <Col   sm={12} md={12} lg={6}>
          <GARAGEWORKSHOPS />
        </Col>
        <Col  sm={12} md={12} lg={6}>
          <Appointment/>
        </Col>
  
        <Col sm={12} md={12} lg={6}>
          <CurentOrders />
        </Col>
        <Col sm={12} md={12} lg={6}>
          <PROFILE/>
        </Col>
 
      </Row>
       
    </div>
  )
}

export default Dashbord