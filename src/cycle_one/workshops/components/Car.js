import React,{useState} from 'react'
import{FaCar} from 'react-icons/fa'
import { Link, Route,Routes } from 'react-router-dom'
import { Col, Row } from "react-bootstrap"
import {RiEditLine}from "react-icons/ri"
import {MdDeleteSweep} from "react-icons/md"

const Car = ({view= false}) => {
    const [show,setShow]=useState(view)
    return (
        <div className="car car_border" onClick={()=>setShow(!show)}>
        CAR NAME
        <div className="right_icons">
            <span><MdDeleteSweep /></span>
           <Link to='/workshop/owner/addvehicle'> <span className="blue"><RiEditLine /></span> </Link>
        </div>
        {show && <div className="show">
              <div className='car_info'> <FaCar /> &nbsp;  Car &nbsp;  BMW &nbsp;  A7 &nbsp; Fuel 6%</div>
               <div className='more_info'>Engine Number : 2 | Chassis <br /> Number : 125 <br/> 0 KM Driven  <br/>TAX NUMBER : 123
                   <div className='line'></div>
             
              </div>
              <div className='note'><Row> <Col sm={3}><span>Note</span> </Col> <Col sm={9}> <div className='text'>Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec nibh rhoncus varius in non lorem. Donec interdum, lectus in convallis pulvinar, enim elit porta sapien, vel finibus erat felis sed neque. Etiam aliquet neque sagittis erat tincidunt aliquam. Vestibulum at neque hendrerit, mollis dolor at, blandit justo. Integer ac interdum purus. In placerat lorem non quam pulvinar molestie ac eget lacus. Proin mollis lobortis porttitor. Nam in fringilla felis. Nunc non magna maximus, pulvinar justo ut, pulvinar lacus. Vivamus semper ex vel felis lobortis, nec feugiat erat pulvinar. Cras eu sem sed tellus sodales pellentesque nec id libero. Vestibulum tincidunt, ipsum vitae finibus tempus, orci mi iaculis lacus, id faucibus erat leo ac nisl. Nullam vel pulvinar nisi, ac fringilla urna.</div></Col></Row> </div>
       </div>}
      </div>
    )
}

export default Car
