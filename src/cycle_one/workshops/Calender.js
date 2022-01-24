import React, { useState,useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Calendar from 'react-calendar';
import ShowMoreText from "react-show-more-text";

import {AiFillPlusCircle} from "react-icons/ai"
import { FaTools } from 'react-icons/fa';
import{ MdDeleteSweep} from 'react-icons/md'
import {RiEditLine} from "react-icons/ri"
import { Link } from 'react-router-dom';
import AddAppointment from './AddAppointment';
// import 'react-calendar/dist/Calendar.css';
const Calender = () => {
    const [appointments, setAppointments] = useState([new Date(2021, 11, 29), new Date(2021, 11, 27)]);
    const [value,setValue]=useState()
    useEffect(() => {
       setValue(appointments)
       console.log(value)
      }, [appointments]);
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
          <div className='body'>
          <Row>
              <Col lg={6}>
                <Calendar
                    onChange={(value)=>{setAppointments([...appointments , value])
                     console.log(appointments)
                    
                    }}
                  
                    value= {value}
                    locale='En'
                    view='month'
                    />

              
              </Col>
              <Col lg={6}>
                  <div className='right_div'>
                      <div className='comming'>
                          <div className='first_line'>
                              <span>COMING</span>
                              <div className='right'>
                                  <span className='gray'>
                                     <MdDeleteSweep />
                                  </span>
                                  <Link to='/workshop/owner/addappointment'>
                                    <span className='blue'>
                                      <RiEditLine />
                                    </span>
                                  </Link>

                              </div>
                              <div className='title'>
                                APPOINTMENT TITLE
                              </div>
                              <div className='date'>
                                20 Mar 2021
                              </div>
                              <div className='with'>
                              <FaTools /> With VEHICLE OWNER

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
                                      Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec nibh rhoncus varius in non lorem. Donec interdum, lectus in convallis pulvinar, enim elit porta sapien, vel finibus erat felis sed neque. Etiam aliquet neque sagittis erat tincidunt aliquam. Vestibulum at neque hendrerit, mollis dolor at, blandit justo. Integer ac interdum purus. In placerat lorem non quam pulvinar molestie ac eget lacus. Proin mollis lobortis porttitor. Nam in fringilla felis. Nunc non magna maximus, pulvinar justo ut, pulvinar lacus. Vivamus semper ex vel felis lobortis, nec feugiat erat pulvinar. Cras eu sem sed tellus sodales pellentesque nec id libero. Vestibulum tincidunt, ipsum vitae finibus tempus, orci mi iaculis lacus, id faucibus erat leo ac nisl. Nullam vel pulvinar nisi, ac fringilla urna.
                                  </ShowMoreText>
                                
                                </div></Col></Row> </div>
                             
                              

                          </div>

                      </div>
                  </div>
              
              </Col>
        
        </Row>
        </div>
      </div>
    );
}

export default Calender






