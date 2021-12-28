import { Link } from 'react-router-dom'
import {BsFillCheckCircleFill} from 'react-icons/bs'
const AfterWorkOrder = ({back,path}) => {
    return (
        <div className='opacity'>
            <div className='after_work_order'>
                <img  src='/images/cycle one/Group 24.svg' />
                <div className='green_color'><BsFillCheckCircleFill /> WORK ORDER ADDED SUCCESSFULLY</div>
                <Link to='/workshop/owner/selectinventory'><button className='dark'>ADD SPARE PARTS</button></Link>
                <br />
                <Link to={path}><button className='light'>{back}</button></Link>
                 
            </div>
           
            
        </div>
    )
}

export default AfterWorkOrder
