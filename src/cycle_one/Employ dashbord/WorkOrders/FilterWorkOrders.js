import {FaSearch} from'react-icons/fa'
import { Link } from 'react-router-dom'

const FilterWorkOrders = () => {
    return (
        <div className='opacity'>
            <div className="filter">
                <div className="title">FILTER ON Work Oder</div>
                <div className="status">
                    <span className="inline-block">STATUS </span>
                    <div className="inline-block">
                    <input type='radio' name="status" value="Created" checked /> 
                    <label>Created</label>
                    </div>
                    <div className="inline-block">
                    <input type='radio' name="status" value="Active" /> 
                    <label>Active</label>
                    </div>
                    <div className="inline-block">
                    <input type='radio' name="status" value="Completed" /> 
                    <label>Completed</label>
                    </div>
                    <div className="inline-block">
                    <input type='radio' name="status" value="All" /> 
                    <label>All</label>
                    </div>
                </div>
                <div className='search_div'>
                <input className="search"  type='search'  placeholder="WORK ITEM"/>
                <div className='icon'><FaSearch /></div> 
                </div>
                <div className='search_div'>
                <input className="search" type='search'  placeholder="CUSTOMER NAME"/>
                <div className='icon'><FaSearch /></div> 
                </div>
                <br/>
                <Link to='/employ/workorders'>      
                <button className='gray'>Reset</button>
                </Link>   
                <Link to='/employ/workorders'>
                <button className='blue'>FILTER</button>
                </Link>


            </div>
        </div>
    )
}

export default FilterWorkOrders