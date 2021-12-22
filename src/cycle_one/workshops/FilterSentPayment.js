import {FaSearch} from'react-icons/fa'

const FilterSentPayment = () => {
    return (
        <div className='opacity'>
            <div className="filter">
                <div className="title">FILTER ON SENT PAYMENT</div>
                <div className="status">
                    <span className="inline-block">TYPE </span>
                    <div className="inline-block">
                    <input type='radio' name="payment-type" value="CASH" checked /> 
                    <label>CASH</label>
                    </div>
                    <div className="inline-block">
                    <input type='radio' name="payment-type" value="CREDIT" /> 
                    <label>CREDIT</label>
                    </div>
                    <div className="inline-block">
                    <input type='radio' name="payment-type" value="All" /> 
                    <label>All</label>
                    </div>
                    
                </div>
                <div className='search_div'>
                <input className="search"  type='search'  placeholder="SPARE ITEM"/>
                <div className='icon'><FaSearch /></div> 
                </div>
                <div className='search_div'>
                <input className="search" type='search'  placeholder="BUSINESS NAME"/>
                <div className='icon'><FaSearch /></div> 
                </div>
                <br/>
                <button className='gray'>Reset</button>
                <button className='blue'>FILTER</button>


            </div>
        </div>
    )
}

export default FilterSentPayment
