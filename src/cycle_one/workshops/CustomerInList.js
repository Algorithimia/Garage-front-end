import {FaTools} from "react-icons/fa"
import { Link } from "react-router-dom"

const CustomerInList = ({name, addBy}) => {
    return (
        <div className="employ customer_margin">
            
            <div className="inline-block">
                <div>{name}</div>
                <div className="gray">Added by {addBy}</div>
            </div>
            <Link to='/workshop/owner/singleworkorder'>
                <div className="inline-block tools_icon delete_icon">
                <FaTools style={{marginBottom:'5' }}/>
                </div>
            </Link>
        </div>
    )
}

export default CustomerInList
