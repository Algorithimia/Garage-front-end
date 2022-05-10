import React from 'react'
import { Col, Row } from 'react-bootstrap'
 import {FaCar, FaUsers, FaTools} from 'react-icons/fa'
import { MdDeleteSweep } from 'react-icons/md'
 import {RiFileCopy2Fill, RiEditLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import ShowMoreText from 'react-show-more-text'
const CarForVheicle2 = ({workorder}) => {
    const vehicle= workorder.vehicle
    return (
        <div >
            
            <span className='name'>
            {vehicle&&vehicle.name}
            </span>
            <div className='right'>
                <span className='gray' ><MdDeleteSweep /> </span>
                <Link to='/workshop/owner/addvehicle2'><span className='blue'><RiEditLine /></span> </Link>
                <Link to='/workshop/owner/choosegrage'><span className='green'><FaTools /></span> </Link>
            </div>
            <div className='main_info'>
                <div className='line'>
                    <span><FaCar /></span>  &nbsp;  {vehicle.model && vehicle.model.name}  &nbsp;  {vehicle.model.brand && vehicle.model.brand.name} &nbsp;  A7 &nbsp; {vehicle&& vehicle.fuel_type} &nbsp; {vehicle&& vehicle.fuel_indicator}%
                </div>
                <div className='line'>
                <span><RiFileCopy2Fill /></span> &nbsp; 3?? work orders <span className='active'>1 Active</span>
                </div>
                <div className='line'>
                <span> <FaUsers /></span> &nbsp; {workorder&&workorder.customer.name}
                </div>

            </div>
            <div className='more_info'>Engine Number : {workorder && workorder.vehicle.engine_number} | Chassis: {workorder && workorder.vehicle.chassis_number} <br /> Number : {workorder&& workorder.vehicle.id} <br/> {workorder&& workorder.vehicle.kilometer_driven} KM Driven <br/> { workorder.customer.phone ?workorder.customer.phone :' ?? pohone'} - {workorder&& workorder.customer.email} <br/>ADDRESS :{ workorder.customer.address ?workorder.customer.address :'address?'}<br/>TAX NUMBER : {workorder.customer.address?workorder.customer.address:'123??'}
                      <div className='line'></div>
                     </div>
        
        
                 <div className='note'><Row> <Col sm={3}><span>Note</span> </Col> <Col sm={9}> <div className='text'>
                            {workorder.vehicle.note &&  <ShowMoreText
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
                                    {workorder && workorder.vehicle.note}
                               </ShowMoreText> }
                     </div></Col></Row> </div>

        

          
        </div>
    )
}

export default CarForVheicle2
