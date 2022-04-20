import React,{useState} from 'react'
import{FaCar} from 'react-icons/fa'
import { Link, Route,Routes } from 'react-router-dom'
import { Col, Row } from "react-bootstrap"
import {RiEditLine}from "react-icons/ri"
import {MdDeleteSweep} from "react-icons/md"
import ShowMoreText from 'react-show-more-text'

const Car = ({view= false, car,isLoading}) => {
    const [show,setShow]=useState(view)
    return (
        <div className="car car_border" onClick={()=>setShow(!show)}>
      { isLoading || !car? 'Loading ..': <>
        <span  >{car && car.name}</span>
        <div className="right_icons">
            <span><MdDeleteSweep /></span>
           <Link to='/workshop/owner/addvehicle'> <span className="blue"><RiEditLine /></span> </Link>
        </div>
        {show && <div className="show">
             {car && <div className='car_info'> <FaCar /> <>{car.model.name} &nbsp; A7 &nbsp;Fuel {car.fuel_indicator}% &nbsp; </>  </div> }
             {car &&<div className='more_info'>Engine Number :   {car.engine_number}  |  {car.chassis_number}  <br /> Number : {car.id} <br/> {car.kilometer_driven} KM Driven  <br/>TAX NUMBER : 123?? 
                   <div className='line'></div>
             
              </div>
               }
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
                                    
                                  {car && <>{car.note}</>}
                               </ShowMoreText>
                  </div></Col></Row> </div>
       </div>}
       </>}
      </div>
    )
}

export default Car
