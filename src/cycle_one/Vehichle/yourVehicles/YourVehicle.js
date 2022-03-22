import React from 'react'
import SingleCar from './SingleCar'
import { AiFillPlusCircle } from 'react-icons/ai'
import {HiViewGrid} from 'react-icons/hi'
import { MdViewList} from 'react-icons/md'
import {FaSearch} from 'react-icons/fa'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const YourVehicle = () => {
    return (
        <div className='vehicles_view vehicles-ovner-vehicles_view '>
            <div className='header'>
                GARAGE VEHICLES
                <Link to='/workshop/owner/addvehicle2'>
                <button className='right'>
                     <span><AiFillPlusCircle  /></span>  
                     Add New Vehicle 
                </button>
                <button className='right show_in_mob'>
                     <span><AiFillPlusCircle  /></span>  
                     Add
                </button>
                </Link>

            </div>
            <div className='vehicles_second_line'>
              <button className='all'>2100 All </button>
              <button className='active'>100 Active</button>
              <div className='right'>
                  <div className='input_div'>
                  <input placeholder='Search Vehicles' />
                    <div className='icon'><FaSearch /></div> 
                  </div>

                  <span className='icons'>
                     <Link to='/workshop/owner/vheiclesview'>
                    <span className='grid'>   
                         <HiViewGrid />
                    </span>
                    </Link>
                    <Link to='/workshop/owner/vheiclesListview'>
                    <span className='list'>
                         <MdViewList />
                    </span>
                    </Link>
                  </span>

              </div>
          </div>  
          <div className='body'>
              <Row>
                  <Col lg={6}>
                      <div className='vehicles_car'>
                        <SingleCar />
                      </div>
                  
                  </Col>
                  <Col lg={6}>
                      <div className='vehicles_car'>
                        <SingleCar />
                      </div>
                  
                  </Col>
                 
              </Row>
         </div>        
            
        </div>
    )
}


export default YourVehicle