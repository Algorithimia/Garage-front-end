import React from 'react'
import { Col, Row } from 'react-bootstrap'

import {FaCar} from 'react-icons/fa'
import {AiFillPlusCircle} from 'react-icons/ai'
 
import Part from './components/Part'
import UsedPaymentMethods from './components/UsedPaymentMethods'
import BoughtFrom from './components/BoughtFrom'
import { Link , useLocation} from 'react-router-dom'
const ViewSingleItemInventory = () => {
    let location = useLocation()
    let part=location.state.part
    return (
        <div className='single_item_in_inventory'>
            <div className='header'>
            INVENTORY
            <div className='right'>
                 <Link to='/workshop/owner/buyspareparts'> <button className='light_blue'> <span><AiFillPlusCircle  /> </span> Add New Purchase</button></Link>
                 <Link to='/workshop/owner/addsparepart'> <button className='dark_blue'> <span><AiFillPlusCircle  /> </span> Add New Part</button></Link>
               
            </div>
            </div>
            <div className='body'>
            <Row>
                <Col md={12} lg={6}>
                    <div className='spare_part'>
                        <span>SPARE PART NMBER</span>
                        <Part  sparePart={part}/>
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
                       <Link to='/workshop/owner/vehicle2'>
                        <button className='right'>ASSIGN</button>
                       </Link>
                       <div className='cars'>
                           <span><FaCar /></span>
                          
                           NOT ASSIGNED TO 
                           <br/>
                           ANY CARS

                       </div>

                    </div>

                </div>
                </Col>
            </Row>
           </div> 
        </div>
    )
}

export default ViewSingleItemInventory
