
import{BsThreeDotsVertical} from 'react-icons/bs'
import OverlayList from './OverlayList'
const WorkOrder = ({workorder}) => {
    return (
        <tr>
        <th > <div className={workorder.status+' '+ 'state'}>{workorder.status}</div> </th>
        <th> {workorder.stages}</th>
        <th> {workorder.id}</th>
        <th> {workorder.created_at}</th>
        <th>{workorder.customer.name}</th>
        <th>{workorder.workItem}</th>
        <th> {workorder.employees.map(e=><span>{e.name}</span>)}</th>
        <th className='moreIcon'>
        

           <OverlayList option1='VIEW WORK ORDER' option1_path={`/workshop/owner/singleworkorder/${workorder.id}`}
                        option2='ASSIGN EMPLOYEE' option2_path={`/workshop/owner/allworkorders/assignEmploye/${workorder.id}`}
                        option3='ASSIGN SPARE PARTS' option3_path={`/workshop/owner/selectinventory/${workorder.id}`}
                        option4='VIEW CUSTOMER' option4_path='/workshop/owner/viewcustomer'  
                        option5='VIEW VEHICLE' option5_path='/workshop/owner/viewvehicle'  />
          
            </th>
        
    </tr>   
    )
}

export default WorkOrder
