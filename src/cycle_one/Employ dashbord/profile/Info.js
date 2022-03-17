import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {MdPhotoCamera} from 'react-icons/md'
import {IoNewspaper} from 'react-icons/io5'
import {FaThLarge} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Info = () => {
  return (
    <div className='employInfo'>
      <Container>
        <Row>
            <Col>
               <div className='title'>YOUR INFO</div>
               <div className='info-box'>
                         <div className='change_img'  onClick={()=> document.getElementById("my_file").click()}>
                                <img 
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvUsGOsBcDS6hxduYR8UpkewPhZmi6tHecxjGNYJRCo1kkClxTeDYsSJ2gXfTggvXZU8U&usqp=CAU'
                                />
                               <span> <icon className='camera'> <MdPhotoCamera /></icon> </span>
                          </div>
                          <div className='personal-info'>
                            <div className='property'>NAME : <span className='value' >&nbsp; Philip Weber</span></div>
                            <div className='property'>SALARY : <span className='value' >&nbsp; 2000 $</span></div>
                            <div className='property'>JOIN DATE : <span className='value' >&nbsp;12 MAR 2021</span></div>

                          </div>
                          <div className='assigned-tasks'>
                              <div className='assigned-tasks-title'>ASSIGNED TASKS : </div>
                              <div className='task' > 
                                  <span> <IoNewspaper /> </span>
                                  WORK ORDERS
                              </div>
                              <div className='task' > 
                                  <span> <FaThLarge /> </span>
                                   ASSETS
                              </div>
                          </div>
               </div>
            </Col>
             <Col>
                <div className='title'>TOTAL ASSIGNED WORKORDERS</div>
                <div className='assigned-box'>
                 <div><span>40</span> &nbsp; WORKORDER </div> 
                 <Link to='/employ/workorders'>VIEW ALL</Link>

                </div>


                <div className='title'>TOTAL ASSIGNED ASSETS</div>
                <div className='assigned-box'>
                 <div><span>3</span> &nbsp; ASSETS </div> 
                 <Link to='/employ/employinfo'>VIEW ALL</Link>

                </div>

                <div className='title'>TOTAL WORK HOURS</div>
                <div className='assigned-box'>
                 <div>MAR : 12 h</div> 
                 <div>APR : 22 h</div>

                </div>
            </Col>
        </Row>
        </Container>
      
    
    </div>
  )
}

export default Info