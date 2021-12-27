import {BsPencilSquare} from 'react-icons/bs'
import {RiTimer2Fill} from "react-icons/ri"
import { Link } from 'react-router-dom'
const Appointment = () => {
    return (
        <Link to='/workshop/owner/calender'>
        <div className='appointment'>
            <RiTimer2Fill />
            <span>COMING APPOINTMENTS</span>
            <div className='inline-block'><BsPencilSquare /> </div>
            <div className='yello'>12 MAR &nbsp; &nbsp;  02 : 25 PM</div>
            <div>customer name</div>
            <Link to='/workshop/owner/addappointment'>SCHEDULE NEW</Link>
           
        </div>
        </Link>
    )
}

export default Appointment
