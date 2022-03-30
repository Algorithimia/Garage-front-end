import React, { useState,useEffect, useRef } from 'react';
import {FaSearch} from'react-icons/fa'
import {AiFillPlusCircle} from "react-icons/ai"
import {GoTriangleDown,GoTriangleUp} from "react-icons/go"
import { Link, Route,Routes } from 'react-router-dom'


import WorkOrder from './WorkOrder'
import FilterWorkOrders from "./FilterWorkOrders"
import AssignEmploye from './AssinEmploye'

import { useDispatch,useSelector } from 'react-redux'
import{getWorkOrders} from '../../store/store slices/workOrderSlices/workOrder'
const AllWorkOrders = () => {
    const dispatch = useDispatch()
    const {workorders , isLoading ,error}= useSelector((state)=>state.woekOrders)
    const [entries, setEntries] = useState(0);
    const [date, setDate] =  useState(0);
  
    const upEntries=()=>{
       setEntries(parseInt(entries)+1)
    }
    const downEntries=()=>{
       setEntries(parseInt(entries)-1)
    }
    const upDate=()=>{
        setDate(parseInt(date)+1)

      
     }
     const downDate=()=>{
        setDate(parseInt(date)-1)
      
     }
     useEffect(() =>{
        dispatch(getWorkOrders());
       
    
      },[dispatch])
      const renderedWorkorders= workorders.map((workorder)=>{
          return ( <WorkOrder status={workorder.status}  stage='STAGE'  num={workorder.id} date={workorder.created_at} customerName={workorder.customer.name} workItem='Gear Replacement' employName='Sam'   />)
      })
    return (
        <div className='work_orders'>
            <div className='head_section'>
                <div className='first_line'>
                    <span>ALL WORK ORDERS</span>
                    <div className="right">
                        <div className='inline-block'><Link to='/workshop/owner/allworkorders/filter'><button className="light_blue">FILTER</button></Link></div>
                        <div className='inline-block show_desktop'><Link to='/workshop/owner/createworkeorder'><button className="blue"><span><AiFillPlusCircle  /> </span>Create Work Oder</button></Link></div>
                        <div className='inline-block show_mob'><Link to='/workshop/owner/createworkeorder'><button className="blue"><span><AiFillPlusCircle  /> </span>Create</button></Link></div>
                    </div>
                </div>
                <div className="second_line">
                    <div className='inline-block input_block'>
                       <span>
                       Show Entries
                       </span>
                       <input type='number'  onChange={(e)=> setEntries(e.target.value)} value={entries}/>
                       <div className="change_number">
                        <div className='change' onClick={upEntries}>   
                         <GoTriangleUp />
                        </div>
                        <div className="up change" onClick={downEntries}>
                         <GoTriangleDown />
                        </div>
                       </div>
                       
                    </div>
                    <div className='inline-block input_block'>
                        <span>
                        Date
                        </span>
                        <input type='number'  value={date} onChange={(e)=> setDate(e.target.value)}/>
                        <div className="change_number">
                            <div className='change' onClick={upDate}>
                             <GoTriangleUp />
                            </div>
                            <div className="up change" onClick={downDate}>
                             <GoTriangleDown />
                            </div>
                        </div>
                        </div>
                    <div className="right">
                    <input  placeholder="Search Repair Order" />
                    <div className='icon'><FaSearch /></div> 
                    </div>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th> STATUS</th>
                        <th> (WO)<br/> STAGE</th>
                        <th> (WO) <br/> NUM</th>
                        <th> (WO) <br/>DATE</th>
                        <th>CUSTOMER <br/>NAME </th>
                        <th> WORK <br/>ITEM</th>
                        <th> EMPLOYEE <br/>NAME</th>
                    </tr>
                </thead>
              
                <WorkOrder status='created'  stage='STAGE'  num='451' date='12/6' customerName='Denise Powell' workItem='Gear Replacement' employName='Sam'   />

                <WorkOrder status='Progress'  stage='STAGE'  num='420' date='12/6' customerName='Benjamin Fuller' workItem='TIRE Replacement' employName='harry'   />
                <WorkOrder status='completed'  stage='STAGE'  num='560' date='12/6' customerName='Christine Miller' workItem='Gear Replacement' employName='rose'   />
                <WorkOrder status='created'  stage='STAGE'  num='451' date='12/6' customerName='Denise Powell' workItem='Gear Replacement' employName='Sam'   />

                <WorkOrder status='Progress'  stage='STAGE'  num='420' date='12/6' customerName='Benjamin Fuller' workItem='TIRE Replacement' employName='harry'   />
                <WorkOrder status='completed'  stage='STAGE'  num='560' date='12/6' customerName='Christine Miller' workItem='Gear Replacement' employName='rose'   />
                   
            </table>
            <Routes>
                    <Route path="/filter" element={<FilterWorkOrders />} exact  />
                    <Route path="/assignEmploye" element={<AssignEmploye />} exact  />

            </Routes>
        </div>
    )
}

export default AllWorkOrders
