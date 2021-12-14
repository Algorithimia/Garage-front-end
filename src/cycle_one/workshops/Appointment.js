import {BsPencilSquare} from 'react-icons/bs'
import {RiTimer2Fill} from "react-icons/ri"
import { Link } from 'react-router-dom'
const Appointment = () => {
    return (
        <div className='appointment'>
            <RiTimer2Fill />
            <span>COMING APPOINTMENTS</span>
            <div className='inline-block'><BsPencilSquare /> </div>
            <div className='yello'>12 MAR &nbsp; &nbsp;  02 : 25 PM</div>
            <div>customer name</div>
            <Link to='/'>SCHEDULE NEW</Link>
           
        </div>
    )
}

export default Appointment
