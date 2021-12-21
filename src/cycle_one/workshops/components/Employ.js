import React from 'react'
import { Link } from 'react-router-dom'
import {RiEditLine} from 'react-icons/ri'
const Employ = () => {
    return (
        <div className='employ'>
            <img
            src='https://media.istockphoto.com/photos/headshot-of-44-year-old-mixed-race-man-in-casual-polo-shirt-picture-id1264106963?b=1&k=20&m=1264106963&s=170667a&w=0&h=dLQliHpFkaweGQhiRfkNGkwsAPoKCEy9UWWk-m2iCCk='
            />
            <div className='name'>Jerry Watkins</div>
            <Link to=''>
             <button>View Assigned Work Orders</button>
            </Link>
            <div className='login_info'>
                <span className='right'> <Link to='/'> <span> <RiEditLine /> </span> </Link> </span>
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
            <button className='edite'>EDIT</button>
        </div>
    )
}

export default Employ
