import React,{useEffect, useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import {AiFillPlusCircle} from "react-icons/ai"
import User from './components/User'
import Car from './components/Car'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {getcustommers} from '../../store/store slices/workshopCustommerSlice'
const CustomerVehicles = () => {
    const dispatch = useDispatch()
    let { id }  = useParams();
    const {custommers, isLoading, error}= useSelector((state)=>state.customers)
    useEffect(() =>{
        dispatch(getcustommers());
      },[dispatch])
    const customer =custommers&& custommers.find(custommer => custommer.id == id)
     let renderedVehicles= customer&& customer.vehicles.map(vehicle=>{
         return     <Car view='true'  car={vehicle} isLoading={isLoading}/>
     })
    return (
        <div className='view_vehicle'>
            <div className='header'>
               
              <Link to='/workshop/owner/addvehicle'><button className="blue"><span><AiFillPlusCircle  /> </span>Add New Vehicle</button></Link>
            </div>
            <div className='secod_row'>
            <Row>
                <Col lg={6}>
                    <User custommer={ customer} isLoading={isLoading} />
                </Col>
                <Col xs={12}lg={6}>
                 <div className='car_view'> 
                     {/* <Car view='true'  car={workorder && workorder.vehicle} isLoading={isLoading}/> */}
                     {renderedVehicles}
                 </div>
                </Col>
               
            </Row>
            </div>  

        </div>
    )
}


export default CustomerVehicles