
import{BsThreeDotsVertical} from 'react-icons/bs'
import OverlayList from '../../workshops/OverlayList'
const WorkOrder = ({status, stage,  num, date, customerName, workItem, employName}) => {
    return (
        <tr>
        <th > <div className={status+' '+ 'state'}>{status}</div> </th>
        <th> {stage}</th>
        <th> {num}</th>
        <th> {date}</th>
        <th>{customerName}</th>
        <th>{workItem}</th>
        <th className='moreIcon'>
        

           <OverlayList option1='VIEW WORK ORDER' option1_path='/workshop/owner/singleworkorder'
                    
                        option2='ASSIGN SPARE PARTS' option2_path='/workshop/owner/selectinventory' 
                        option3='VIEW CUSTOMER' option3_path='/workshop/owner/viewcustomer'  
                        option4='VIEW VEHICLE' option4_path='/workshop/owner/viewvehicle'  />
          
            </th>
        
    </tr>   
    )
}

export default WorkOrder
