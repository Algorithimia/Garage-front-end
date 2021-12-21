import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Employ from './components/Employ'
import {AiFillPlusCircle} from "react-icons/ai"
import {FaSearch} from'react-icons/fa'
import { Link } from 'react-router-dom'

const Employes = () => {
    return (
        <div className='employs'>
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
                <Col>
                    <Employ />
                </Col>
                <Col>
                <Employ />
                </Col>
            </Row>
           </div> 
            
        </div>
    )
}

export default Employes
