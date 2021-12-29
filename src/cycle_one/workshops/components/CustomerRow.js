import React from 'react'



import OverlayList from '../OverlayList'
const CustomerRow = ({name, address, phone ,mail,workorders}) => {
    return (
        <tr>
            <th>{name}</th>
            <th>{address}</th>
            <th>{phone}</th>
            <th>{mail}</th>
            <th>{workorders}</th>
            <th></th>
            
            <th></th>
            
            <th className='moreIcon'>
            <OverlayList option1='View Customer' option1_path='/workshop/owner/viewcustomer'
                                option2='Add Work Order'  option2_path='/workshop/owner/createworkorder2'  
                                option3='Edit Customer' option3_path='/workshop/owner/vheiclesListview'
                                option4='View Vehicles' option4_path='/workshop/owner/viewvehicle'
                                option5='Delete Customer' option5_path='/workshop/owner/garagecustomers'
                                />
            </th>
        
         </tr>
    )
}

export default CustomerRow
