
import {RiDeleteBinFill} from "react-icons/ri"
const EmployInList = ({employ}) => {
    return (
        <div className="employ">
            <img src={employ.avatar2} />
            <div className="inline-block">
                <div>{employ.name}</div>
                <div className="gray">Added {employ.created_at}</div>
            </div>
            <div className="inline-block delete_icon">
                <RiDeleteBinFill style={{marginBottom:'5' }}/>
            </div>
    </div>
    )
}

export default EmployInList
