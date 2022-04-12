import React from 'react'



import OverlayList from '../OverlayList'
const CustomerRow = ({customer}) => {
    return (
        <tr>
            <th>{customer.name}</th>
            <th>??</th>
            <th>{customer.phone}</th>
            <th>{customer.email}</th>
            <th>??</th>
            <th></th>
            
            <th></th>
            
            <th className='moreIcon'>
            <OverlayList option1='View Customer' option1_path={`/workshop/owner/viewcustomer/${customer.id}`}
                                option2='Add Work Order'  option2_path='/workshop/owner/createworkorder2'  
                                option3='Edit Customer' option3_path='/workshop/owner/vheiclesListview'
                                option4='View Vehicles' option4_path={`/workshop/owner/Custommervehicles/${customer.id}`}
                                option5='Delete Customer' option5_path='/workshop/owner/garagecustomers'
                                />
            </th>
        
         </tr>
    )
}

export default CustomerRow
