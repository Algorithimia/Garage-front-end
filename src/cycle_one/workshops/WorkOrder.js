
import{BsThreeDotsVertical} from 'react-icons/bs'
import OverlayList from './OverlayList'
const WorkOrder = ({status, stage,  num, date, customerName, workItem, employName}) => {
    return (
        <tr>
        <th > <div className={status+' '+ 'state'}>{status}</div> </th>
        <th> {stage}</th>
        <th> {num}</th>
        <th> {date}</th>
        <th>{customerName}</th>
        <th>{workItem}</th>
        <th> {employName}</th>
        <th className='moreIcon'>
        

           <OverlayList option1='VIEW WORK ORDER' option1_path='/workshop/owner/singleworkorder'
                        option2='ASSIGN EMPLOYEE' option2_path='/workshop/owner/allworkorders/assignEmploye'
                        option3='ASSIGN SPARE PARTS' option3_path='/workshop/owner/selectinventory' 
                        option4='VIEW CUSTOMER' option4_path='/workshop/owner/viewcustomer'  
                        option5='VIEW VEHICLE' option5_path='/workshop/owner/viewvehicle'  />
          
            </th>
        
    </tr>   
    )
}

export default WorkOrder
