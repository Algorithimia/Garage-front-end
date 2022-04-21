import React from 'react'
import { MdDeleteSweep } from 'react-icons/md'
import { RiEditLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {deletePackage} from '../../../store/store slices/packagesSlice'
import Cookies from "universal-cookie";
const cookies = new Cookies();
const MintenancePackage = ({packageData}) => {
    const dispatch = useDispatch()
    return (
        <div className='package'>
            <div className='img'>
              <img  src={packageData.image} />

            </div>
            <div className='info'>
            <div className='title'>
               {packageData.title}
            </div>
            <div className='endline'>
                PRICE <span>  {packageData.price} $</span>
                <span className='right'>

                <span onClick={()=>dispatch(deletePackage({package_id:packageData.id,workshop_id:cookies.get("workshop").id }))}><MdDeleteSweep /></span>
          <Link to='/workshop/owner/maintnance/edite' state={{packageData}}>  <span className="blue"><RiEditLine /></span> </Link>
                </span>

            </div>
            </div>
            
        </div>
    )
}

export default MintenancePackage
