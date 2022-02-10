import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AssignedCheck from './components/AssignedCheck'

const AddNewEmploy = () => {
    return (
        <div className='add_newEmploy'>
            <div className='header'>
            ADD NEW EMPLOYEE
            </div>
            <div className='body'>
            <form>
             <div className='input_row'>
               EMPLOYEE INFO
               <Row>
                   <Col md={6} lg={4}>
                   <div className='main_input'>
                        <label>Employee Name</label>
                        <input type='text' placeholder='Employee Name'/>
                    </div>
                   </Col>
                   <Col md={6} lg={4}>
                   <div className='main_input'>
                        <label>Phone Number</label>
                        <input type='text' placeholder='Phone Number'/>
                    </div>
                   </Col>
                   <Col md={6} lg={4}>
                   <div className='main_input'>
                        <label>Joining Date</label>
                        <input type='text' placeholder='50000 $'/>
                    </div>
                   </Col>
                   <Col md={6} lg={4}>
                   <div className='main_input'>
                        <label>salary</label>
                        <input type='date'/>
                    </div>
                   </Col>
                   <Col md={6} lg={4}>
                   <div className='main_input'>
                        <label>salary</label>
                        <input type='text' placeholder='500 $'/>
                    </div>
                   </Col>
               </Row>
             
             </div>
             <div className='input_row'>
             EMPLOYEE LOGIN INFORMATION
               <Row>
                   <Col md={6} lg={4}>
                   <div className='main_input'>
                        <label>Email ID</label>
                        <input type='text' placeholder='Email ID'/>
                    </div>
                   </Col>
                   <Col md={6} lg={4}>
                   <div className='main_input'>
                        <label>Password</label>
                        <input type='password' placeholder='●●●●●●●●●●●'/>
                    </div>
                   </Col>
                   <Col md={6} lg={4}>
                   <div className='main_input'>
                        <label>Confirm Pasword</label>
                        <input type='password' placeholder='●●●●●●●●●●●'/>
                    </div>
                   </Col>
               </Row>
             
             </div>
             <div className='system_tasks'>
              <div className='title'> SYSTEM TASKS </div>
             <div >
                        <label>Assigned Sections</label>
                        <div className='check_box'>
                            <Row>
                                <Col md={6} lg={3}>
                                
                                 <AssignedCheck type='VEHICLES' /> 
                                 <AssignedCheck type='WORK ORDERS' /> 
                                 <AssignedCheck type='CUSTOMERS' />  
                                </Col>

                                <Col md={6} lg={3}>
                                    <AssignedCheck type='INVENTORY' />  
                                    <AssignedCheck type='EMPLOYEES' />  
                                    <AssignedCheck type='BUSSINESSES' />  
                                </Col>
                                <Col md={6} lg={3}>
                                    <AssignedCheck type='FINANCE' />  
                                    <AssignedCheck type='APPOINTMENT' />  
                                    <AssignedCheck type='MARKETING' />  
                                   
                                </Col>
                                <Col md={6} lg={3}>
                                    <AssignedCheck type='ASSETS' />  
                                    <AssignedCheck type='SETTING' /> 
                                </Col>
                            </Row>
                        </div>
                        <Link to='/workshop/owner/employes'>
                           <input className='btn' type='submit' value='SAVE DETAILS' />
                        </Link>
                       
                    </div>

             </div>
             </form>
            </div>
            
        </div>
    )
}

export default AddNewEmploy