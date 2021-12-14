
import {RiDeleteBinFill} from "react-icons/ri"
const EmployInList = ({name,date,imgUrl}) => {
    return (
        <div className="employ">
            <img src={imgUrl} />
            <div className="inline-block">
                <div>{name}</div>
                <div className="gray">Added {date}</div>
            </div>
            <div className="inline-block delete_icon">
                <RiDeleteBinFill style={{marginBottom:'5' }}/>
            </div>
    </div>
    )
}

export default EmployInList
