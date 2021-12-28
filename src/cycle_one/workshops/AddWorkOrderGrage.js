import React from 'react'
import { Link } from 'react-router-dom'

const AddWorkOrderGrage = () => {
    return (
        <div className='add_work_order_grage'>
           <div className='header'>
             CREATE WORK ODER

           </div>
           <form>
           <div className='main_input'>
               <label>Order Remarks</label>
               <input className='input' placeholder='Order Remarks'/>
             
               
           </div>
           <Link to='/workshop/owner/afterworkordergrage'>
                <input className='btn' type='submit' value='Create Order'/>
           </Link>
           </form>
        </div>
    )
}

export default AddWorkOrderGrage
