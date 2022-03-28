import React from 'react'
import {IoIosTime} from 'react-icons/io'
import { Link } from 'react-router-dom'
const Appointment = () => {
  return (
    <div className='box bigger'>

        <div className='title'>
        Appointment
        </div>
        <div className='body'>
        <div className='box-row  yello'>
            coming
        </div>
        <div className='box-row'>
        <span><IoIosTime /></span>
        12, MAR
        </div>
        <Link to='/vehicleowmer'>SEE ALL</Link>
        </div>
       
    </div>
  )
}

export default Appointment