import React, {useState} from 'react'
import {AiFillMessage} from 'react-icons/ai'
import {GrMail} from 'react-icons/gr'
import {FaSearch} from 'react-icons/fa'
import {GoTriangleDown,GoTriangleUp} from "react-icons/go"
import{BsSortAlphaUpAlt,BsSortAlphaDown, BsSortAlphaUp} from 'react-icons/bs'
import { Link, Route, Routes } from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'



import FilterMarketing from './FilterMarketing'
import MarketingRow from './components/MarketingRow'
import NotifyUserWay from './components/NotifyUserWay'
const Marketing = () => {
    const[tagss, setTags]=useState([])
    const getFilterTags= (tags) => {
        setTags(tags)
        console.log( tagss)

    }
         const rendered_tags= tagss.length >0 ? tagss.map((tag)=><span className='added_tag'>{tag.id} <span className='delete_tag' 
         onClick={(e)=>{
            e.preventDefault();
            {setTags(tagss.filter(t=>t.id!==tag.id))}}
        } ><FaTimes /></span></span>) : ''

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
        <div className='marketing'>
             <div className='header'>
               MARKETING
               <div className='inline-block'>
                  <Link to='/workshop/owner/marketing/notifybyemail'><button className='mail'> <span> <GrMail /> </span>  Email All </button></Link> 
                  <Link to='/workshop/owner/marketing/notifybymessage'> <button className='msg'> <span> <AiFillMessage /> </span> Message All </button></Link>

               </div>

             </div>
             <div className='second_row'>
                 <button className='active'>All</button>
                 <button>with current work orders</button>
                 <div className='inline-block'>
                   <input  placeholder='Search Customers'/>
                   <span><FaSearch/> </span>

                 </div>
                

             </div>


             <div className='third_row'>
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
                        <span className='alpha z_to_a'>
                            <BsSortAlphaUpAlt />
                        </span>
                        <span className='alpha a_to_z'>
                            <BsSortAlphaUp />
                        </span>
                        <div className='right'>
                             <Link to='/workshop/owner/marketing/filtermarketing'><button> {rendered_tags} FILTER</button> </Link>
                             <button>select multiple</button>
                        </div>

                        
         </div>

         <table>
                <thead>
                    <tr>
                        <th > CUSTOMER  <br/> NAME</th>
                        <th> ADDRESS</th>
                        <th> PHONE  <br/> NUMBER</th>
                        <th> EMAIL</th>
                        <th>Work orders </th>
                        
                    </tr>

                    
                </thead>
                <MarketingRow name='Denise Powell' address='Egypt ,Cairo..' phone='025 025 256 3' mail='y@y.com' work_orders='0'/>
                <MarketingRow name='Benjamin Fuller' address='Egypt ,Cairo..' phone='025 025 256 3' mail='y@y.com' work_orders='0'/>
                <MarketingRow name=' Amanda Brewer' address='Egypt ,Cairo..' phone='025 025 256 3' mail='y@y.com' work_orders='0'/>
                <MarketingRow name='Christine Miller' address='Egypt ,Cairo..' phone='025 025 256 3' mail='y@y.com' work_orders='0'/>
                <MarketingRow name='Denise Powell' address='Egypt ,Cairo..' phone='025 025 256 3' mail='y@y.com' work_orders='0'/>
                <MarketingRow name='Denise Powell' address='Egypt ,Cairo..' phone='025 025 256 3' mail='y@y.com' work_orders='0'/>
                <MarketingRow name='Denise Powell' address='Egypt ,Cairo..' phone='025 025 256 3' mail='y@y.com' work_orders='0'/>
                <MarketingRow name='Denise Powell' address='Egypt ,Cairo..' phone='025 025 256 3' mail='y@y.com' work_orders='0'/>
            </table>  
            <Routes>
             <Route path="/filtermarketing" element={<FilterMarketing  getFilterTags={getFilterTags} />}  exact  />
             <Route path="/notifybyemail" element={<NotifyUserWay way='EMAIL' after_send='/workshop/owner/marketing' num='12' />} exact  />
             <Route path="/notifybymessage" element={<NotifyUserWay way='MESSAGE' after_send='/workshop/owner/marketing' num='12' />} exact  />   
            </Routes>  
            
        </div>
    )
}

export default Marketing
