import React from 'react'

import {BiDotsVerticalRounded} from 'react-icons/bi'


import OverlayList from '../OverlayList'

const VhiclesListView = ({car_name,Brand,Model,Fuel_type,Vehicle_num,Kilometer_driven,Chassis_num,Engine_num, 
    Fuel,Phone,Customer_name,Customer_taxid,Customermail,page,Order_remarks, CustomerAddress
   
}) => {
    return (
        <tr>
            {page =='fpage' && <th> {car_name? car_name: <div className='no-data'></div>}</th>}
           {page =='fpage' && <th> {Brand? Brand: <div className='no-data'></div>}</th>}
            {page =='fpage' &&<th> {Model? Model: <div className='no-data'></div>}</th>}
            {page =='fpage' && <th>{Fuel_type? Fuel_type: <div className='no-data'></div>}</th>}
            {page =='fpage' && <th> {Vehicle_num? Vehicle_num: <div className='no-data'></div>}</th>}
            {page =='fpage' && <th> {Kilometer_driven? Kilometer_driven: <div className='no-data'></div>}</th>}
            {page =='fpage' && <th>{ Chassis_num? Chassis_num: <div className='no-data'></div>}</th>}
            {page =='fpage' && <th>{ Engine_num? Engine_num: <div className='no-data'></div>}</th>}


            {page =='spage' && <th>{ Fuel? Fuel+'%': <div className='no-data'></div>}</th>}
            {page =='spage' && <th>{ Phone? Phone: <div className='no-data'></div>}</th>}
            {page =='spage' && <th>{ Customer_name? Customer_name: <div className='no-data'></div>}</th>}
            {page =='spage' &&<th>{ Customer_taxid? Customer_taxid: <div className='no-data'></div>}</th>}
            {page =='spage' && <th>{ Customermail? Customermail: <div className='no-data'></div>}</th>}

            {page =='thrpage' && <th>{ Order_remarks? Order_remarks: <div className='no-data'></div>}</th>}
            {page =='thrpage' && <th>{ CustomerAddress? CustomerAddress: <div className='no-data'></div>}</th>}
           
            
            <th>
              <div className='moreIcon'>
                    <OverlayList
                                option1='Add Work Order'  option1_path='/workshop/owner/choosegrage'  
                               />
             </div>  
            
             </th>
            
        
        </tr>
    )
}

export default VhiclesListView
