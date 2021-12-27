import React from 'react'
import { Link } from 'react-router-dom'

const AddAppointment = () => {
    return (
        <div className='add_appointment'>
            <div className='header'>
                 ADD APPOINTMENTS

            </div>
            <div className='body'>
                <div className='input_row'>
                    <div className='input_div date'>
                        <label>APPOINTMENT DATE</label>
                        <br/>
                        <input  type='date' />
                    </div>
                    <div className='input_div time'>
                        <label>APPOINTMENT TIME</label>
                        <br/>
                        <input type='time'  />
                    </div>
                </div>
                <div className='input_div'>
                        <label>APPOINTMENT TITLE</label>
                        <br/>
                        <input  placeholder='APPOINTMENT TITLE'/>
                    </div>
                    <div className='input_div'>
                        <label>VEHICLE OWNER</label>
                        <br/>
                        <input  placeholder='VEHICLE OWNER'/>
                    </div>
                    <div className='input_div'>
                        <label>APPOINTMENT NOTE</label>
                        <br/>
                        <textarea  placeholder='APPOINTMENT NOTE'/>
                    </div>
                    <div className='butns'>
                        <Link to='/'><button className='gray'>RESET</button></Link>
                        <Link to='/'><button className='blue'>ADD</button></Link>

                    </div>

            </div>
        </div>
    )
}

export default AddAppointment
