import React from 'react'
import {BsArrowRightCircle} from "react-icons/bs"
import { Link } from 'react-router-dom'


import VhiclesListView from './VhiclesListView'

const CarInfoListView = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th> Brand</th>
                    <th> Model</th>
                    <th> Fuel Type</th>
                    <th> Vehicle Number</th>
                    <th> Kilometer Driven</th>
                    <th> Chassis Number</th>
                    <th> Engine Number </th>
                    <th></th>
                    
                
                </tr>
            </thead>
            <VhiclesListView Brand='BMW' Model='A7' Fuel_type='Fuel 6%' Vehicle_num='52332' Kilometer_driven='1000' Chassis_num='258' Engine_num='52332' />
            <VhiclesListView Brand='BMW' Model='A7' Fuel_type='Fuel 6%' Vehicle_num='52332' Kilometer_driven='1000' Chassis_num='258' Engine_num='52332' />
            <VhiclesListView Brand='BMW' Model='A7' Fuel_type='Fuel 6%' Vehicle_num='52332' Kilometer_driven='1000' Chassis_num='258' Engine_num='52332' />
            <VhiclesListView Brand='BMW' Model='A7' Fuel_type='Fuel 6%' Vehicle_num='52332' Kilometer_driven='1000' Chassis_num='258' Engine_num='52332' />
            <VhiclesListView Brand='BMW' Model='A7' Fuel_type='Fuel 6%' Vehicle_num='52332' Kilometer_driven='1000' Chassis_num='258' Engine_num='52332' />
            <VhiclesListView Brand='BMW' Model='A7' Fuel_type='Fuel 6%' Vehicle_num='52332' Kilometer_driven='1000' Chassis_num='258' Engine_num='52332' />
            <VhiclesListView Brand='BMW' Model='A7' Fuel_type='Fuel 6%' Vehicle_num='52332' Kilometer_driven='1000' Chassis_num='258' Engine_num='52332' />
            <VhiclesListView Brand='BMW' Model='A7' Fuel_type='Fuel 6%' Vehicle_num='52332' Kilometer_driven='1000' Chassis_num='258' Engine_num='52332' />
            <VhiclesListView Brand='BMW' Model='A7' Fuel_type='Fuel 6%' Vehicle_num='52332' Kilometer_driven='1000' Chassis_num='258' Engine_num='52332' />
            <VhiclesListView Brand='BMW' Model='A7' Fuel_type='Fuel 6%' Vehicle_num='52332' Kilometer_driven='1000' Chassis_num='258' Engine_num='52332' />
            
    </table>
    )
}

export default CarInfoListView
