import React , {useState} from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import {GoTriangleDown,GoTriangleUp} from "react-icons/go"
import {AiFillPlusCircle} from "react-icons/ai"
import {FaSearch} from 'react-icons/fa'

import AssetsRow from './AssetsRow'

const EmployAssets = () => {

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
        <div className='assets'>
             <div className='header'>
                 ASSIGNED ASSETS
              

             </div>
             <div className='second_row'>
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
                       
                     <div className='search'>
                         <input placeholder='Search Assets' />
                         <span> <FaSearch /> </span>

                     </div>

                        
         </div>
         <table>
                <thead>
                    <tr>
                        <th> ASSET  <br/> TYPE </th>
                        <th> ASSET <br/> NUMBER</th>
                        <th> ASSET <br/> NAME</th>
                        <th>DATE </th>
                        <th> </th>
                        <th> </th>
                        <th> </th>
                        <th> </th>
                        <th> </th>
                        <th>  </th>
                    </tr>

                    
                </thead>
                <AssetsRow type='SPARE PART' num='1342' name='Eget nisi'assignment='EMPLOYEE NAME' date='12/6'/>
                <AssetsRow type='ASSET TYPE' num='1342' name='Eget nisi'assignment='EMPLOYEE NAME' date='12/6'/>
                <AssetsRow type='SPARE PART' num='1342' name='Eget nisi'assignment='EMPLOYEE NAME' date='12/6'/>
                <AssetsRow type='ASSET TYPE' num='1342' name='Eget nisi'assignment='EMPLOYEE NAME' date='12/6'/>
                <AssetsRow type='SPARE PART' num='1342' name='Eget nisi'assignment='EMPLOYEE NAME' date='12/6'/>
                <AssetsRow type='ASSET TYPE' num='1342' name='Eget nisi'assignment='EMPLOYEE NAME' date='12/6'/>
                <AssetsRow type='SPARE PART' num='1342' name='Eget nisi'assignment='EMPLOYEE NAME' date='12/6'/>
                <AssetsRow type='ASSET TYPE' num='1342' name='Eget nisi'assignment='EMPLOYEE NAME' date='12/6'/>
                
          </table>     
        
        </div>
    )
}

export default EmployAssets