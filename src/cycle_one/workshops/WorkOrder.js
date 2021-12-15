
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
        

           <OverlayList />
          
            </th>
        
    </tr>   
    )
}

export default WorkOrder
