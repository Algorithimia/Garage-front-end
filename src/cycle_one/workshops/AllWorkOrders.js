import {AiFillPlusCircle} from "react-icons/ai"
import {GoTriangleDown,GoTriangleUp} from "react-icons/go"
import { Link, Route,Routes } from 'react-router-dom'
import WorkOrder from './WorkOrder'
import FilterWorkOrders from "./FilterWorkOrders"
const AllWorkOrders = () => {
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
                       <input type='number' min={1} max={10} />
                    </div>
                    <div className='inline-block input_block'>
                        <span>
                        Date
                        </span>
                        <input type='number' min={1} max={12} />
                        </div>
                    <input className="right" type='search' placeholder="Search Repair Order" />
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
            </Routes>
        </div>
    )
}

export default AllWorkOrders
