import React from 'react'
import {BsPencilSquare} from 'react-icons/bs'
import{FaCar} from 'react-icons/fa'
import{MdCreditCard,MdDeleteSweep} from 'react-icons/md'
import { Col, Row } from 'react-bootstrap'



import Part from './components/Part'
import { Link } from 'react-router-dom'
import { AiFillPlusCircle } from 'react-icons/ai'

const SingleWorkOrder = () => {
    return (
        <div className='single_work_order'>
            <div className='first_line'>
            WORK ODER NUMBER
            <div className='right'>
              <Link to='/workshop/owner/createworkeorder'>
                <button className="blue">
                  <span><AiFillPlusCircle  /> </span>Create Work Oder
                </button>
              </Link>
            </div>

            </div>
            <div className='main_info'>
              <Row>
                  <Col md={12} lg={6}> 
                   <div className='car'> 
                     <div className='header'>
                       <span>CAR NAME</span>
                       <Link to='/workshop/owner/createworkeorder'><button className='right'><span><BsPencilSquare /> </span>Edit</button></Link>
                     </div>
                     <div className='car_info'> <FaCar /> &nbsp;  Car &nbsp;  BMW &nbsp;  A7 &nbsp; Fuel 6%</div>
                     <div className='more_info'>Engine Number : 2 | Chassis <br /> Number : 125 <br/> 0 KM Driven <br/> yomna sabry<br/> 012 158 123 - example@gmail.com <br/>ADDRESS : Egypt ,Cairo <br/>TAX NUMBER : 123
                      <div className='line'></div>
                     </div>
                      <div className='note'><Row> <Col sm={3}><span>Note</span> </Col> <Col sm={9}> <div className='text'>Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec nibh rhoncus varius in non lorem. Donec interdum, lectus in convallis pulvinar, enim elit porta sapien, vel finibus erat felis sed neque. Etiam aliquet neque sagittis erat tincidunt aliquam. Vestibulum at neque hendrerit, mollis dolor at, blandit justo. Integer ac interdum purus. In placerat lorem non quam pulvinar molestie ac eget lacus. Proin mollis lobortis porttitor. Nam in fringilla felis. Nunc non magna maximus, pulvinar justo ut, pulvinar lacus. Vivamus semper ex vel felis lobortis, nec feugiat erat pulvinar. Cras eu sem sed tellus sodales pellentesque nec id libero. Vestibulum tincidunt, ipsum vitae finibus tempus, orci mi iaculis lacus, id faucibus erat leo ac nisl. Nullam vel pulvinar nisi, ac fringilla urna.</div></Col></Row> </div>
                   </div>
                   <div className='spare_parts'>
                     <div className='header'>
                       <span>USED SPARE PARTS</span>
                       <Link to='/workshop/owner/selectinventory'><button className='right'>Add</button></Link>
                     </div>
                     <div className='parts'>
                         <div className='part'>
                         PART 1
                         <span className='right'> <Link to='/workshop/owner/purchase/visa'> <span className='yello'><MdCreditCard /></span></Link> <span className='gray'><MdDeleteSweep /></span>  </span>
                          

                         </div>
                         <div className='part'>
                         PART 2
                         <span className='right'> <Link to='/workshop/owner/purchase/visa'><span className='yello'><MdCreditCard /></span> </Link><span className='gray'><MdDeleteSweep /></span>  </span>
                         </div>
                         < Part />

                       </div>
                       

                   </div>
                  </Col>
                  <Col md={12} lg={6}> 
                   <div className='stages'>
                     <div className='header'>
                     WORK ORDER STAGES 
                     <Link to='/workshop/owner/allworkorders/assignEmploye'><button className='right'>Assign</button></Link>
                     <div className='start_date'>Start Date 20 Mar 2021</div>

                     </div>
                     <table>
                        <thead>
                            <tr>
                                <th> EMPLOYEE</th>
                                <th> STAGE</th>
                                <th> HOURS</th>
                               
                            </tr>
                         </thead>
                         <tr>
                            <th > Anthony McCoy</th>
                            <th >repair </th>
                            <th>2 H </th>
                            </tr>
                       
                        <tr>
                            <th > Mike Oliver</th>
                            <th >inspect </th>
                            <th>2 H </th>
                            </tr>
                       
                        <tr>
                            <th > Keanu Vargas</th>
                            <th >stage </th>
                            <th>2 H </th>
                            </tr>
                       
                        <tr>
                            <th > Frank McDonald</th>
                            <th >stage </th>
                            <th>2 H </th>
                            </tr>
                            <tr className='red'>
                              <th > 5 EMPOLYEE</th>
                              <th >3 STAGES </th>
                              <th>12 HOURS </th>
                            </tr>
                        </table>
                        <div className='complete_buton'>
                           <button className='complete'>Mark Completed</button>
                        </div>
                     
                   </div>
                  </Col>

              </Row>
            </div>
            
        </div>
    )
}

export default SingleWorkOrder
