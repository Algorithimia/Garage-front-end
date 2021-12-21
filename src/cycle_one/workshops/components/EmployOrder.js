import React from 'react'
import { FaCar} from'react-icons/fa'
const EmployOrder = () => {
    return (
        <div className='employ_order'>
            <div className='car_info'>
              <div className='car_name'>
              CAR NAME
              </div>
              <span><span> <FaCar /></span> Car &nbsp; BMW &nbsp; A7 &nbsp; Fuel &nbsp; 6% </span>
            </div>
            <table>
                <thead>
                    <tr>
                        <th> STAGE</th>
                        <th> HOURS</th>
                       
                    </tr>
                </thead>
                <tr>
                        <th> repair</th>
                        <th> 2 H</th>
                        <th className='date'>20 Mar 2021</th>
                       
                </tr>
                <tr>
                        <th> inspect</th>
                        <th> 2 H</th>
                        <th className='date'>20 Mar 2021</th>
                       
                </tr>
                <tr>
                        <th> stage</th>
                        <th> 2 H</th>
                        <th className='date'>20 Mar 2021</th>
                       
                </tr>
                <tr className='red'>
                        <th>3 STAGES</th>
                        <th> 12 HOURS</th>
                       
                       
                </tr>
            </table>
            <div className='btn'>
                <button className='red_btn'>REMOVE FROM WORK ORDER</button>
            </div>

        </div>
    )
}

export default EmployOrder
