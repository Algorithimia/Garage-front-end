import React from 'react'
import {BsArrowRightCircle} from "react-icons/bs"
import { Link } from 'react-router-dom'


import VhiclesListView from './VhiclesListView'
//VhiclesListView  used in 3 pages for vhehicles list view
const CarInfoListView = ({workorders}) => {
    const renderedVehicles = workorders.map(workorder=>{
        return <VhiclesListView page='fpage'key={workorder.id}car_name={workorder.vehicle&&workorder.vehicle.name} Brand={workorder.vehicle.model.brand&&workorder.vehicle.model.brand.name}  Model={workorder.vehicle.model&&workorder.vehicle.model.name}  Fuel_type={workorder.vehicle&&workorder.vehicle.fuel_type } Vehicle_num={workorder.vehicle&&workorder.vehicle.vehicle_number} Kilometer_driven={workorder.vehicle&&workorder.vehicle.kilometer_driven} Chassis_num={workorder.vehicle&&workorder.vehicle.chassis_number} Engine_num={workorder.vehicle&&workorder.vehicle.engine_number} />
    })
    return (
        <table>
            <thead>
                <tr>
                    <th> Car Name</th>
                    <th> Brand</th>
                    <th> Model</th>
                    <th> Fuel Type</th>
                    <th> Vehicle Number</th>
                    <th> Kilometer Driven</th>
                    <th> Chassis Number</th>
                    <th> Engine Number </th>
                   
                    <th><Link to='/workshop/owner/vheiclesListview/user'> <BsArrowRightCircle /> </Link></th>
                  
                    
                
                </tr>
            </thead>
          {renderedVehicles}
            
    </table>
    )
}

export default CarInfoListView
