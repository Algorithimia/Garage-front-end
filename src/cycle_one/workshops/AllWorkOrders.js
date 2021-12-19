import React, { useState,useEffect } from 'react';
import {FaSearch} from'react-icons/fa'
import {AiFillPlusCircle} from "react-icons/ai"
import {GoTriangleDown,GoTriangleUp} from "react-icons/go"
import { Link, Route,Routes } from 'react-router-dom'


import WorkOrder from './WorkOrder'
import FilterWorkOrders from "./FilterWorkOrders"
import AssignEmploye from './AssinEmploye'
const AllWorkOrders = () => {
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
    return (
        <div className='work_orders'>
            <div className='head_section'>
                <div className='first_line'>
                    <span>ALL WORK ORDERS</span>
                    <div className="right">
                        <div className='inline-block'><Link to='/workshop/owner/allworkorders/filter'><button className="light_blue">FILTER</button></Link></div>
                        <div className='inline-block'><Link to='/workshop/owner/createworkeorder'><button className="blue"><AiFillPlusCircle  /> Create Work Oder</button></Link></div>
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
                    <input className="right" placeholder="Search Repair Order" />
                    <div className='icon'><FaSearch /></div> 
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
