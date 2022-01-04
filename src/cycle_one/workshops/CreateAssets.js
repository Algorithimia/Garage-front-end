import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'


const CreateAssets = () => {
    return (
        <div className='create_asset'>
            <div className='header'>
               ADD ASSET

            </div>
            <div className='body'>
                <Row>
                    <Col lg={6}>
                    <div className='main_input'>
                        <label>Asset name</label>
                        <input type='text' placeholder='Assigned Employee'/>
                        
                        
                    </div>
                    </Col>
                    <Col lg={6}>
                    <div className='main_input'>
                        <label>Assigned Employee</label>
                        <select> 
                            <option>Jack Sparo</option>
                            <option>mario</option>
                            <option>mo</option>
                        </select>
                        <input type='text'/>
                        
                        
                    </div>
                    </Col>
                    <Col lg={6}>
                    <div className='main_input'>
                        <label className='textarea_label'>Asset Description</label>
                        <textarea type='text' placeholder='Asset Description'/>
                        
                        
                    </div>
                    </Col>
                </Row>
                <Link to='/workshop/owner/assets'>
                  <button>Create New Part</button>
                </Link>

            </div>
         
        </div>
    )
}

export default CreateAssets
