import React,{useState} from 'react'
import{FaCar} from 'react-icons/fa'
const Order = ({view=false}) => {
    const [show,setShow] =useState(view)
    return (
        <div className="order" >
                                       <span  onClick={()=>setShow(!show)}> order num</span>
                                       { show && <div className="more">
                                          <div className="text">
                                            <div><FaCar /> &nbsp; ABC 569 &nbsp;  BMW &nbsp;  2017 &nbsp; Deseil</div>
                                            <div>10 MAR 2021</div> 
                                            <div>customer name</div>
                                             <div>ABC 569</div>
                                           </div> 
                                           <table>
                                                
                                                <tr>
                                                    <th className='black'> Total</th>
                                                    <th className='blue'> Recieved</th>
                                                    <th  className='red'> Due</th>
                                                
                                                </tr>
                                            
                                                <tr className='bold'>
                                                    <th className='black' > 100 $</th>
                                                    <th  className='blue'>70 $ </th>
                                                    <th className='red'>30 $</th>
                                                 </tr>
                                            </table>

                                        </div>}
                                    </div>
    )
}

export default Order
