import React from 'react'



import OverlayList from '../OverlayList'
const CustomerRow = ({workorder}) => {
    return (
        <tr>
            {/* <th>{customer.name ?customer.name : <div className='no-data'></div>}</th> */}
            <th>{workorder.customer.name ? workorder.customer.name:<div className='no-data'></div>}</th>
            <th>{workorder.customer.address? workorder.customer.address:<div className='no-data'></div>}</th>
            <th>{workorder.customer.phone ? workorder.customer.phone:<div className='no-data'></div>}</th>
            <th>{workorder.customer.email ? workorder.customer.email:<div className='no-data'></div>}</th>
            <th>{workorder.id ? workorder.id:<div className='no-data'></div>}</th>
            
            <th></th>
            
            <th className='moreIcon'>
            <OverlayList option1='View Customer' option1_path={`/workshop/owner/viewcustomer/${workorder.customer.id}`}
                                option2='Add Work Order'  option2_path='/workshop/owner/createworkorder2'  
                               
                                option3='View Vehicles' option3_path={`/workshop/owner/Custommervehicles/${workorder.customer.id}`}
                                option4='Delete Customer' option4_path='/workshop/owner/garagecustomers'
                                />
            </th>
        
         </tr>
    )
}

export default CustomerRow
