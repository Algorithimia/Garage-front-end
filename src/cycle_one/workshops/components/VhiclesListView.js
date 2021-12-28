import React from 'react'

import {BiDotsVerticalRounded} from 'react-icons/bi'


import OverlayList from '../OverlayList'

const VhiclesListView = ({Brand,Model,Fuel_type,Vehicle_num,Kilometer_driven,Chassis_num,Engine_num, 
    Fuel,Phone,Customer_name,Customer_taxid,Customermail,
    Order_remarks, CustomerAddress
}) => {
    return (
        <tr>
           {Brand && <th> {Brand}</th>}
            {Model &&<th> {Model}</th>}
            {Fuel_type && <th>{Fuel_type}</th>}
            {Vehicle_num && <th> {Vehicle_num}</th>}
            {Kilometer_driven && <th> {Kilometer_driven}</th>}
            {Chassis_num && <th>{ Chassis_num}</th>}
            {Engine_num && <th>{ Engine_num}</th>}


            {Fuel && <th>{Fuel}</th>}
            {Phone && <th>{ Phone}</th>}
            {Customer_name && <th>{ Customer_name}</th>}
            {Customer_taxid && <th>{ Customer_taxid}</th>}
            {Customer_name && <th>{ Customermail}</th>}


            {Order_remarks && <th>{Order_remarks}</th>}
            {CustomerAddress && <th>{CustomerAddress}</th>}
            <th>
              <div className='moreIcon'>
                    <OverlayList option1='Edit Vehicle' option1_path='/workshop/owner/addvehicle2'
                                option2='Add Work Order'  option2_path='/workshop/owner/choosegrage'  
                                option3='Delete Vehicle' option3_path='/workshop/owner/vheiclesListview' />
             </div>  
            
             </th>
            
        
        </tr>
    )
}

export default VhiclesListView
