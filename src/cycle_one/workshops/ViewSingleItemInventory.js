import React from 'react'
import { Col, Row } from 'react-bootstrap'

import {FaCar} from 'react-icons/fa'

import Part from './components/Part'
import UsedPaymentMethods from './components/UsedPaymentMethods'
import BoughtFrom from './components/BoughtFrom'
import { Link } from 'react-router-dom'
const ViewSingleItemInventory = () => {
    return (
        <div className='single_item_in_inventory'>
            <div className='header'>
            INVENTORY
            </div>
            <Row>
                <Col md={12} lg={6}>
                    <div className='spare_part'>
                        <span>SPARE PART NMBER</span>
                        <Part />
                        <div className='line'></div>
                        <div className='payment_methods'>
                             USED PAYMENT METHODS

                             <UsedPaymentMethods method='visa' payed='40' date='12/6' id={<div>            &nbsp;●●●●&nbsp; ●●●●  &nbsp; ●●●● &nbsp; 4567</div>} />
                             <UsedPaymentMethods method='paypal' payed='30' date='12/6'  id='mail@example.com'  />
                         



                        </div>

                    </div>
                
                </Col>
                <Col md={12} lg={6}>
                    <BoughtFrom />

                <div className='assigned_cars'>
                    <div className='first_line'>
                       CAR NAME
                       <Link to='/'>
                        <button className='right'>ASSIGN</button>
                       </Link>
                       <div className='cars'>
                           <FaCar />
                           <br/>
                           NOT ASSIGNED TO 
                           <br/>
                           ANY CARS

                       </div>

                    </div>

                </div>
                </Col>
            </Row>
        </div>
    )
}

export default ViewSingleItemInventory
