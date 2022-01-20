import React from 'react'
import { Link } from 'react-router-dom'
import {RiEditLine} from 'react-icons/ri'
const Employ = ({img}) => {
    return (
        <div className='employ'>
            <img
            src={img}
            />
            <div className='name'>Jerry Watkins</div>
            <Link to='/workshop/owner/employassignworkorder'>
             <button>View Assigned Work Orders</button>
            </Link>
            <div className='login_info'>
                <span className='right'> <Link to='/workshop/owner/employes/changeinfo'> <span> <RiEditLine /> </span> </Link> </span>
                <div className='info'>
                    <div>USER NAME</div>
                    <span className='gray_color'>garagehandle3258</span>
                    <div>PASSWORD</div>
                    <span className='gray_color'>garagehandle3258</span>
                </div>

            </div>
            <div className='personal_info'>
                <div>025 235 658 65</div>
                <div>EMAIL@EXAMPLE.COM</div>

            </div>
            <div className='salary_info'>
                <div> <span>SALARY :  </span>5258 $</div>
                <div> <span>BONUS PER MONTH : </span> 100 $</div>
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
           <Link to='/workshop/owner/addemploy'> <button className='edite'>EDIT</button> </Link>
        </div>
    )
}

export default Employ
