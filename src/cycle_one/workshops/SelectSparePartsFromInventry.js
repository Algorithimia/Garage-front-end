import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import {FaSearch} from'react-icons/fa'

import SparePartBuy from "./SparePartBuy"
import SelectedSparePart from "./SelectedSpareParts"
const SelectSparePartsFromInventry = () => {
    return (
        <div className="select_spareparts">
            <div className="first_row">
            <Row>
                <Col><span className="title">INVENTORT SPARE PARTS</span></Col>
                <Col>
                    <div className='search_div'>
                        <input className="search"  type='search'  placeholder="Search Spare Parts"/>
                        <div className='icon'><FaSearch /></div>
                    </div>
                </Col>
            </Row>
            </div>
            <div className="tables-row">
             <Row>
               
                <Col sm={12} md={6}>
                    <div className='table_div'>
                        <div className="title">SPARE PARTS LIST</div>
                        <table>
                        <thead>
                            <tr>
                                <th> PART NAME</th>
                                <th > QUAN-<br/> TITY</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <SparePartBuy />
                        <SparePartBuy />
                        <SparePartBuy />
                        <SparePartBuy />
                        </table>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                <div className='table_div'>
                        <div className="title">SELECTED PARTS</div>
                        <table>
                        <thead>
                            <tr>
                                <th> PART NAME</th>
                                <th> QUAN-<br/> TITY</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <SelectedSparePart />
                        <SelectedSparePart />
                        <SelectedSparePart />
                        <SelectedSparePart />
                        </table>
                    </div>
                </Col>
             </Row>
            </div>
            <div className="end_row">
            <Row>
               
                <Col>
                 <Link to='/workshop/owner/buyspareparts'>BUY FROM ANOTHER BUSINESS</Link>
                </Col>
                <Col>
                 <Link to=''><button>Add Spare Parts</button></Link>
                </Col>
                

            </Row>
            </div>
        
        </div>
    )
}

export default SelectSparePartsFromInventry
