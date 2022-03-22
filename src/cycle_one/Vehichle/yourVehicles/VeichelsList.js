import React,{useState} from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import { AiFillPlusCircle } from 'react-icons/ai'
import {HiViewGrid} from 'react-icons/hi'
import { MdViewList} from 'react-icons/md'
import {FaSearch} from 'react-icons/fa'
import {GoTriangleDown,GoTriangleUp} from "react-icons/go"





import CarInfoListView from './list/CarInfoListView'

const VeichelsList = () => {
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
        <div className='vehicles_view'>
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
                 <Link to='/vehicleowmer/yourvehicles'>
                <span className='grid'>   
                     <HiViewGrid />
                </span>
                </Link>
                <Link to='/vehicleowmer/yourvehicleslist'>
                <span className='list'>
                     <MdViewList />
                </span>
                </Link>
              </span>

          </div>
      </div> 
      <div className="third_line">
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
                </div>
                <CarInfoListView/>


      </div>
    )
}


export default VeichelsList