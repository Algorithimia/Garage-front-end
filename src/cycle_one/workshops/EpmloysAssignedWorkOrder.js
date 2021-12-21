import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {AiFillPlusCircle} from "react-icons/ai"
import {FaSearch, FaCar} from'react-icons/fa'
import { Link } from 'react-router-dom'

import EmployOrder from './components/EmployOrder'
const EpmloysAssignedWorkOrder = () => {
    return (
        <div className='employassignworkorder'>
             <div className='header_employ'>
               EMPLOYEES
               <span className='right'>
                   <div className='input'>
                   <input placeholder='Search Employees' />
                   <div className='icon'><FaSearch /></div> 
                   </div>
                   <Link to='/workshop/owner/addemploy'>
                      <button> <span> <AiFillPlusCircle  /> </span> Add New Employee</button>
                   </Link>
               
               </span>
            </div>
            <div className='body'>
              <Row>
                  <Col sm={6} md={2}>
                      <div className='employ_info'>
                      <img 
                      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvUsGOsBcDS6hxduYR8UpkewPhZmi6tHecxjGNYJRCo1kkClxTeDYsSJ2gXfTggvXZU8U&usqp=CAU'
                       />
                       <div className='bold'>Jerry Watkins</div>
                       Jerry Watkins
                       <div className='work_orders_num'><span> <FaCar />  </span>3 WORK ORDER</div>
                       </div>
                  
                  </Col>
                  
                  <Col sm={6} md={10}>
                    <Row>
                    <Col sm={6} >
                      <EmployOrder />
                     </Col>
                     <Col sm={6} >
                      <EmployOrder />
                     </Col>
                     <Col sm={6} >
                      <EmployOrder />
                     </Col>

                    </Row>
                
                  </Col>
              </Row>
            </div>
            
        </div>
    )
}

export default EpmloysAssignedWorkOrder
