
import{BsThreeDotsVertical} from 'react-icons/bs'
import OverlayList from '../../workshops/OverlayList'
const WorkOrder = ({workorder}) => {
    return (
    <>
    {workorder? 
            <tr>
                <th> <div className={workorder.status+' '+ 'state'}>{workorder.status}</div> </th>
                <th> {workorder.stages.length>=0 ? workorder.stages[0]&&workorder.stages[0].name: <span className='no-data'></span>}</th>
                <th> {workorder.id}</th>
                <th> {workorder.created_at}</th>
                <th>{workorder.customer.name}</th>
                <th> {workorder.used_spare_parts.length>=0 ? workorder.used_spare_parts[0]: <span className='no-data'></span>}</th>
                <th className='moreIcon'>
                    <OverlayList option1='VIEW WORK ORDER' option1_path={`/workshop/owner/singleworkorder/${workorder.id}`}
                                
                                    option2='ASSIGN SPARE PARTS' option2_path={`/workshop/owner/selectinventory/${workorder.id}`}
                                    option3='VIEW CUSTOMER' option3_path={`/workshop/owner/viewcustomer/${workorder.customer.id}` } 
                                    option4='VIEW VEHICLE' option4_path={`/workshop/owner/Custommervehicles/${workorder.customer.id}`}  />       
                </th>
                
        </tr>   
    :''}
    </>
    )
}

export default WorkOrder
