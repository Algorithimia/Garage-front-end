import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Calendar from 'react-calendar';
import {AiFillPlusCircle} from "react-icons/ai"
// import 'react-calendar/dist/Calendar.css';
const Calender = () => {
    const [value, onChange] = useState([new Date(2021, 11, 29), new Date(2021, 11, 27)]);

    return (
      <div className='calender'>
          <div className='header'>
              CALENDER 	&#38; APPOINTMENTS
              <div className='right'>
                  <button>
                      <span> <AiFillPlusCircle /> </span>
                      Add New

                  </button>

              </div>


          </div>
          <div className='body'>
          <Row>
              <Col md={6}>
                <Calendar
                    onChange={onChange}
                    value={value}
                    locale='En'
                    view='month'
                    />
              
              </Col>
        
        </Row>
        </div>
      </div>
    );
}

export default Calender






