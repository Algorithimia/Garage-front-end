import React,{useState} from 'react'
import {GoTriangleDown,GoTriangleUp} from "react-icons/go"
import{BsSortAlphaUpAlt,BsSortAlphaDown, BsSortAlphaUp} from 'react-icons/bs'

import OverDue from './components/OverDue'
import { Link } from 'react-router-dom'

const SentPayment = () => {

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
        <div className='all_ovser_due sent_payment'>
          <div className='header'>
          SENT PAYMRNTS
         </div>
         <div className='second_line'>
         <Link to='/workshop/owner/alloverdue'><button className='all'>All</button></Link>
           <button className='over_due'>Overdue</button>
         </div>
         <div className='third_line'>
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
                        <Link to='/workshop/owner/filtersentpayment'><button className='right'>FILTER</button> </Link>

                        
         </div>
         <div className='fourth_line'>
         <table>
                <thead>
                    <tr>
                        <th> PAYMENT TYPE</th>
                        <th> DATE</th>
                        <th> INVOICE  <br/> NUMBER</th>
                        <th> BUSINESS  <br/>INFO</th>
                        <th>TOTAL </th>
                        <th> PAID</th>
                        <th> DUE</th>
                    </tr>

                    
                </thead>

               <OverDue  payment_type='CASH' date='12/6' inovice_number= '451'
                buisiness_info={<div><span>name</span><br/> <span>125 358 369</span></div>} 
                total='822' paid='80,451' due='80,451' />

                <OverDue  payment_type='CREDIT' date='12/6' inovice_number= '451'
                           buisiness_info={<div><span>name</span><br/> <span>125 358 369</span></div>} 
                           total='822' paid='80,451' due='80,451' />


                <OverDue  payment_type='NONE' date='12/6' inovice_number= '451'
                           buisiness_info={<div><span>name</span><br/> <span>125 358 369</span></div>} 
                           total='822' paid='80,451' due='80,451' />


               <OverDue  payment_type='CASH' date='12/6' inovice_number= '451'
                           buisiness_info={<div><span>name</span><br/> <span>125 358 369</span></div>} 
                           total='822' paid='80,451' due='80,451' />
         </table>    
         </div>

        </div>
    )
}

export default SentPayment
