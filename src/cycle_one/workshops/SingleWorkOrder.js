import React, { useEffect, useState } from 'react'
import {BsPencilSquare} from 'react-icons/bs'
import{FaCar} from 'react-icons/fa'
import{MdCreditCard,MdDeleteSweep} from 'react-icons/md'
import { Col, Row } from 'react-bootstrap'



import Part from './components/Part'
import { Link, useParams } from 'react-router-dom'
import { AiFillPlusCircle } from 'react-icons/ai'
import ShowMoreText from 'react-show-more-text'
import { useDispatch, useSelector } from 'react-redux'
import{getWorkOrders} from '../../store/store slices/workOrderSlices/workOrder'


const SingleWorkOrder = () => {
  const dispatch = useDispatch()
  const {workorders , isLoading ,error}= useSelector((state)=>state.workOrders)
  const [showAlert, setShowAlert]= useState(true)
  useEffect(() =>{
    dispatch(getWorkOrders());
    const timeId = setTimeout(() => {
        // After 3 seconds set the showAlert value to false
        setShowAlert(false)
       
      }, 5000)
  
      return () => {
        clearTimeout(timeId)
      }
   

  },[dispatch])
  let { id }  = useParams();
  const workorder =workorders&& workorders.find(order => order.id == id)
 
 const renderedSpareParts=  workorder&&  workorder.used_spare_parts && workorder.used_spare_parts.map((sparePart)=>{
   return <Part sparePart={sparePart} key={sparePart.id} /> 
 }
 
 )
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
                       <span>{workorder && workorder.vehicle.name}</span>
                       <Link to='/workshop/owner/createworkeorder'><button className='right'><span><BsPencilSquare /> </span>Edit</button></Link>
                     </div>
                     <div className='car_info'> <FaCar /> &nbsp;  {workorder && workorder.vehicle.model.name}  &nbsp;  {workorder && workorder.vehicle.model.brand.name} &nbsp;  A7 &nbsp; {workorder&& workorder.vehicle.fuel_type} &nbsp; {workorder&& workorder.vehicle.fuel_indicator}%</div>
                     <div className='more_info'>Engine Number : {workorder && workorder.vehicle.engine_number} | {workorder && workorder.vehicle.chassis_number} <br /> Number : {workorder&& workorder.vehicle.id} <br/> {workorder&& workorder.vehicle.kilometer_driven} KM Driven <br/> {workorder&& workorder.customer.name}<br/> {workorder&& workorder.customer.phone} - {workorder&& workorder.customer.email} <br/>ADDRESS : Egypt ,Cairo <br/>TAX NUMBER : 123
                      <div className='line'></div>
                     </div>
                      <div className='note'><Row> <Col sm={3}><span>Note</span> </Col> <Col sm={9}> <div className='text'>
                               <ShowMoreText
                                      /* Default options */
                                      lines={2}
                                      more="Show more"
                                      less="Show less"
                                      className="content-css"
                                      anchorClass="my-anchor-css-class"
                                      // onClick={this.executeOnClick}
                                      expanded={false}
                                      width={280}
                                      truncatedEndingComponent={"... "}
                                  >
                                   {workorder&& workorder.order_remark}
                               </ShowMoreText>
                        
                        </div></Col></Row> </div>
                   </div>
                   <div className='spare_parts'>
                     <div className='header'>
                       <span>USED SPARE PARTS</span>
                       <Link to={`/workshop/owner/selectinventory/${id}`}><button className='right'>Add</button></Link>
                     </div>
                     <div className='parts'>
                         {renderedSpareParts}
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
