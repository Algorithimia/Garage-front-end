import {BsPencilSquare} from 'react-icons/bs'
import {RiTimer2Fill} from "react-icons/ri"
import { Link } from 'react-router-dom'
import moment from 'moment'
const Appointment = ({appointment, loading}) => {
    return (
        <>
          { loading ? 'Loading ..' :
       
        <Link to='/workshop/owner/calender'>
        <div className='appointment'>
            <RiTimer2Fill />
            <span> {appointment && appointment.title.toUpperCase()} APPOINTMENT</span>
            
            <div className='inline-block'><BsPencilSquare /> </div>
        
            <div className='yello'>{appointment && moment(appointment.start_at.split(" ")[0]).format("DD-MM-YYYY")} &nbsp; &nbsp; {appointment && appointment.start_at.split(" ")[1]}</div>
            <div>with  {appointment && appointment.customer.name}</div>
            <Link to='/workshop/owner/addappointment'>SCHEDULE NEW</Link>
           
        </div>
        </Link>
        }
        </>
    )
}

export default Appointment
