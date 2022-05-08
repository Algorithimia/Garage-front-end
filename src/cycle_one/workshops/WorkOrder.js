
import{BsThreeDotsVertical} from 'react-icons/bs'
import OverlayList from './OverlayList'
const WorkOrder = ({workorder}) => {
    return (
        <tr>
        <th > <div className={workorder.status+' '+ 'state'}>{workorder.status}</div> </th>
        <th> {workorder.stages.length>0 ? workorder.stages[0]&&workorder.stages[0].name: <div className='no-data'></div>}</th>
        <th> {workorder.id? workorder.id  : <div className='no-data'></div>}</th>
        <th> {workorder.created_at ? workorder.created_at  : <div className='no-data'></div>}</th>
        <th>{workorder.customer.name  ? workorder.customer.name : <div className='no-data'></div>}</th>
        <th>{workorder.workItem ? workorder.workItem : <div className='no-data'></div>}</th>
        <th> {workorder.employees.length>0 ?workorder.employees.map(e=><span>{e.name}</span>):<div className='no-data'></div>}</th>
        <th className='moreIcon'>
        

           <OverlayList option1='VIEW WORK ORDER' option1_path={`/workshop/owner/singleworkorder/${workorder.id}`}
                        option2='ASSIGN EMPLOYEE' option2_path={`/workshop/owner/allworkorders/assignEmploye/${workorder.id}`}
                        option3='ASSIGN SPARE PARTS' option3_path={`/workshop/owner/selectinventory/${workorder.id}`}
                        option4='VIEW CUSTOMER' option4_path={`/workshop/owner/viewcustomer/${workorder.id}` } 
                        option5='VIEW VEHICLE' option5_path={`/workshop/owner/viewvehicle/${workorder.id}`}  />
          
            </th>
        
    </tr>   
    )
}

export default WorkOrder
