import React,{useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import {GoTriangleDown,GoTriangleUp} from "react-icons/go"


import TransactionRow from './components/TransactionRow'
const BusinessTransAction = () => {

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
        <div className='transaction'>
           <div className='header'>
             PURCHASE HISTORY
             <div className='right'>
                <input placeholder='Search Businesses'/>
                <span><FaSearch /></span>

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
                        <div className='right'>
                            <input placeholder='Search Transactions'/>
                            <span><FaSearch /></span>

                        </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th> PURCHASE<br/>NUM</th>
                            <th> PAYMENT <br/> TYPE</th>
                            <th> DATE</th>
                            <th> DESCRIPTION</th>
                            <th>TOTAL</th>
                            <th>PAID</th>
                            <th> PAID</th>
                            <th>ACTION</th>
                        </tr>
                       
                    </thead>
                    <TransactionRow num='822' payment_type='COMPLETED' date='12/6' description='MNWCC....' total='822' paid='822' due='0'  />
                    <TransactionRow num='812' payment_type='UNFINISHED' date='12/6' description='MNWCC....' total='812' paid='12' due='800' />
                    <TransactionRow num='700' payment_type='COMPLETED' date='12/6' description='MNWCC....' total='822' paid='822' due='0'/>
                    <TransactionRow num='500' payment_type='UNFINISHED' date='12/6' description='MNWCC....' total='812' paid='800' due='12'/>
                    <TransactionRow num='225' payment_type='COMPLETED' date='12/6' description='MNWCC....' total='822' paid='822' due='0'/>
                    <TransactionRow num='122' payment_type='UNFINISHED' date='12/6' description='MNWCC....' total='800' paid='700' due='100'/>
                    <TransactionRow num='882' payment_type='COMPLETED' date='12/6' description='MNWCC....' total='822' paid='822' due='0'/>
                </table>
          



       
        </div>
    )
}

export default BusinessTransAction
