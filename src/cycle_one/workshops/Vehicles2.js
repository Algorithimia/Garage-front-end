import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillPlusCircle} from "react-icons/ai"
import {HiViewGrid} from 'react-icons/hi'
import { MdViewList} from 'react-icons/md'
import {FaSearch} from 'react-icons/fa'
import { Col, Row } from 'react-bootstrap'


import CarForVheicle2 from './components/CarForVheicle2'

const Vehicles2 = () => {
    return (
        <div className='vehicle2'>
           <div className='header'>
           SEARCH VEHICLES

           <Link to='/workshop/owner/addvehicle2' >
            <button className='right'> <span> <AiFillPlusCircle /> </span>  Add New Vehicle</button>
           </Link>
          </div>   
          <div className='second_line'>
              <button className='all'>2100 All </button>
              <button className='active'>100 Active</button>
              <div className='right'>
                  <div className='input_div'>
                  <input placeholder='Search Vehicles' />
                    <div className='icon'><FaSearch /></div> 
                  </div>

                  <span className='icons'>

                    <span className='grid'>   
                         <HiViewGrid />
                    </span>

                    <span className='list'>
                         <MdViewList />
                    </span>
                  </span>

              </div>
          </div>  
          <div className='body'>
              <Row>
                  <Col lg={6}>
                      <CarForVheicle2 />
                  
                  </Col>
                  <Col lg={6}>
                  <CarForVheicle2 />
                  
                  </Col>
                 
              </Row>
         </div>        
        </div>
    )
}

export default Vehicles2
