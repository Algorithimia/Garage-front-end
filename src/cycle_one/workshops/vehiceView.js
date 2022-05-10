import React,{useEffect, useState} from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import {HiViewGrid} from 'react-icons/hi'
import { MdViewList} from 'react-icons/md'
import {FaSearch} from 'react-icons/fa'
import { Col, Row } from 'react-bootstrap'
import{getWorkOrders} from '../../store/store slices/workOrderSlices/workOrder'
import { useDispatch,useSelector } from 'react-redux'
import CarForVheicle2 from './components/CarForVheicle2'
import { Link } from 'react-router-dom'
const VehiceView = () => {
    const dispatch = useDispatch()
    const {workorders ,isLoading, error}= useSelector((state)=>state.workOrders)
    const [search , setSearch] = useState('')
    useEffect(() =>{
        dispatch(getWorkOrders());
      
     
    
      },[dispatch])
   // search process 
      const onChange=e=>{setSearch(e.target.value.toLowerCase())}
      const searchResult = workorders.filter((el) => {
   
        if (search === '') {
            return el
        }
      
        else {        
            return ( el.vehicle.name.toLowerCase().includes(search.toLowerCase()) )           
        }
    })

    const renderedVehicles = searchResult.map (workorder=>{
        return (
            <Col lg={6}>
                <div className='vehicles_car'>
                  <CarForVheicle2 workorder={workorder}  />
                </div>
        
        </Col>
        ) 
  })
    return (
        <>
        {isLoading ? <img className='loading-img' src="/images/giphy.gif" /> :
       
        <div className='vehicles_view'>
            <div className='header'>
                GARAGE VEHICLES
                {/* <Link to='/workshop/owner/addvehicle2'>
                <button className='right'>
                     <span><AiFillPlusCircle  /></span>  
                     Add New Vehicle 
                </button>
                <button className='right show_in_mob'>
                     <span><AiFillPlusCircle  /></span>  
                     Add
                </button>
                </Link> */}

            </div>
            <div className='vehicles_second_line'>
              <button className='all'>2100 All </button>
              <button className='active'>100 Active</button>
              <div className='right'>
                  <div className='input_div'>
                  <input placeholder='Search Vehicles'  value={search} onChange={e=>onChange(e)}/>
                    <div className='icon'><FaSearch /></div> 
                  </div>

                  <span className='icons'>
                     <Link to='/workshop/owner/vheiclesview'>
                    <span className='active-icon'>   
                         <HiViewGrid />
                    </span>
                    </Link>
                    <Link to='/workshop/owner/vheiclesListview'>
                    <span className='not-active-icon'>
                         <MdViewList />
                    </span>
                    </Link>
                  </span>

              </div>
          </div>  
          <div className='body'>
              <Row>
                 {renderedVehicles}
                 
              </Row>
         </div>        
            
        </div>}
        </>
    )
}

export default VehiceView
