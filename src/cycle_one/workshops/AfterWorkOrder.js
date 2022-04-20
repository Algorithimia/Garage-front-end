import {React,useEffect} from 'react';
import { Link } from 'react-router-dom'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import { getWorkOrders } from '../../store/store slices/workOrderSlices/workOrder'
import { useDispatch} from 'react-redux'
const AfterWorkOrder = ({back,path,msg='WORK ORDER ADDED SUCCESSFULLY', stage}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        //Runs on every render
  
      
        dispatch(getWorkOrders());
    },[dispatch]);

    return (
        <div className='opacity'>
            <div className='after_work_order'>
                <img  src='/images/cycle one/Group 24.svg' />
                <div className='green_color'><BsFillCheckCircleFill /> {msg}</div>
               {!stage && <Link to='/workshop/owner/selectinventory'><button className='dark'>ADD SPARE PARTS</button></Link>}
                <br />
                <Link to={path}><button className='light'>{back}</button></Link>
                 
            </div>
           
            
        </div>
    )
}

export default AfterWorkOrder
