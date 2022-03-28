import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {RiEditLine} from 'react-icons/ri'
const Employ = ({employ}) => {
    let location = useLocation()
    return (
        <div className='employ'>
            <img
            src={employ.avatar}
            />
            <div className='name'>Jerry Watkins</div>
            <Link to='/workshop/owner/employassignworkorder'>
             <button>View Assigned Work Orders</button>
            </Link>
            <div className='login_info'>
                <span className='right'> <Link to='/workshop/owner/employes/changeinfo'> <span> <RiEditLine /> </span> </Link> </span>
                <div className='info'>
                    <div>USER NAME</div>
                    <span className='gray_color'>{employ.email}</span>
                    <div>PASSWORD</div>
                    <span className='gray_color'>password</span>
                </div>

            </div>
            <div className='personal_info'>
                <div>{employ.phone}</div>
                <div>{employ.email}</div>

            </div>
            <div className='salary_info'>
                <div> <span>SALARY :  </span>{employ.salary}</div>
                <div> <span>BONUS PER MONTH : </span> {employ.bonus}</div>
            </div>
            <div className='assigned_decision'>
                <div>ASSIGNED DECISIONS :</div>
                <Link to='/'><div className='option'>VEHICLES</div></Link>
               
                <Link to='/'><div className='option'>WORK ORDERS</div></Link>
               
                <Link to='/'><div className='option'>CUSTOMES</div></Link>
               
                <Link to='/'><div className='option'>INVENTORY</div></Link>
               
                <Link to='/'><div className='option'>EMPLOYEES</div></Link>
 
            </div>
           <button className='delete'>DELETE</button> 
           <Link to='/workshop/owner/editeemploy'  state={{ employ: employ }}> <button className='edite'>EDIT</button> </Link>
        </div>
    )
}

export default Employ
