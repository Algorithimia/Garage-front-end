import React, { useState,useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Calendar from 'react-calendar';
import ShowMoreText from "react-show-more-text";
import moment from 'moment'
import {AiFillPlusCircle} from "react-icons/ai"
import { FaTools } from 'react-icons/fa';
import{ MdDeleteSweep} from 'react-icons/md'
import {RiEditLine} from "react-icons/ri"
import { Link } from 'react-router-dom';
import AddAppointment from './AddAppointment';
// import 'react-calendar/dist/Calendar.css';
import { useDispatch,useSelector } from 'react-redux'
import {geAppointments,deletAppointment, clearstate} from '../../store/store slices/appointmentSlice'
import Cookies from "universal-cookie";
const cookies = new Cookies();
const Calender = () => {
  const dispatch = useDispatch()
  const { appointmentsList, error,created, edited} = useSelector((state)=>state.appointment)
  let list =  appointmentsList && appointmentsList.map(a=>moment(a.start_at).format("DD-MM-YYYY") )
 
 
    const [appointments, setAppointments] = useState([new Date("2024-03-04 04:44:03"),new Date("2024-04-04 04:44:03")]);
    const [value,setValue]=useState()
    const [showAlert, setShowAlert]= useState(true)

let realDates=appointmentsList.filter(a=>moment(a.start_at)  >= new Date())

let commingAppointment = realDates[realDates.length-1]

    useEffect(() =>{
     dispatch(geAppointments());
    //  setAppointments()
      const timeId = setTimeout(() => {
          // After 3 seconds set the showAlert value to false
          setShowAlert(false)
          dispatch(clearstate())
        }, 5000)
    
        return () => {
          clearTimeout(timeId)
        }
   
     
  
    },[dispatch])

   
    return (
      <div className='calender'>
          <div className='header'>
              CALENDER 	&#38; APPOINTMENTS

             
              <div className='right'>
                  <Link to='/workshop/owner/addappointment'>
                    <button>
                        <span> <AiFillPlusCircle /> </span>
                        Add New

                    </button>
                  </Link>

              </div>


          </div>
          {showAlert && error && <div className='msg-error'>{ Object.values(error)}</div> }
             {showAlert && created && <div className='create-msg'> You Create an Appointment </div> }
             {showAlert && edited && <div className='edite-msg'> Edited successfully </div> }
          <div className='body'>
          <Row>
              <Col lg={6}>
              {/* onChange={(value)=>{setAppointments([...appointments , value]) */}
                <Calendar
                 
                  
                    
                    locale='En'
                    view='month'
                    tileClassName={({ date, view }) => {
                      if(list.find(x=>x==moment(date).format("DD-MM-YYYY"))){
                        return  'highlight'
                       }
                    }}
                 
                    />

              
              </Col>
              <Col lg={6}>
                  <div className='right_div'>
                     {commingAppointment&& <div className='comming'>
                          <div className='first_line'>
                              <span>COMING</span>
                              <div className='right'>
                                  <span className='gray' onClick={()=>dispatch(deletAppointment({appointment_id:commingAppointment.id ,workshop_id:cookies.get("workshop").id}))}>
                                     <MdDeleteSweep />
                                  </span>
                                  <Link to='/workshop/owner/editeappointment' state={{apoointment:commingAppointment}}>
                                    <span className='blue'>
                                      <RiEditLine />
                                    </span>
                                  </Link>

                              </div>
                              <div className='title'>
                               {commingAppointment && commingAppointment.title}
                              </div>
                              <div className='date'>
                              {commingAppointment &&moment(commingAppointment.start_at).format("DD-MM-YYYY") }
                              </div>
                              <div className='with'>
                              <FaTools /> With {commingAppointment && commingAppointment.customer &&commingAppointment.customer.name }

                              </div>
                              <div className='note'><Row> <Col sm={2}><span>Note</span> </Col> <Col sm={10}> <div className='text'>
                                
                                 <ShowMoreText
                                      /* Default options */
                                      lines={2}
                                      more="Show more"
                                      less="Show less"
                                      className="content-css"
                                      anchorClass="my-anchor-css-class"
                                      // onClick={this.executeOnClick}
                                      expanded={false}
                                      width={280}
                                      truncatedEndingComponent={"... "}
                                  >
                                     {commingAppointment && commingAppointment.note}
                                  </ShowMoreText>
                                
                                </div></Col></Row> </div>
                             
                              

                          </div>

                      </div>}
                  </div>
              
              </Col>
        
        </Row>
        </div>
      </div>
    );
}

export default Calender






