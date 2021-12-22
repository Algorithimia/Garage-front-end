import React from 'react'
import { Col, Row } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";

import {AiTwotoneHeart} from 'react-icons/ai'
const BoughtFrom = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    return (
        <div className='bought_from'>
            <div className='title'>BOUGHT FROM :</div>

            <Row>
                <Col sm={7}>
                <img className='workshop_img' src='/images/cycle one/workshop.jpg' />
                <div className='inline-block'>
                    <div>Garage Name</div>
                    <div>Garage Type</div>

                </div>
                </Col>
                <Col sm={5}>
                <div className='rating'>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        edit={false}
                        value={3}
                        size={24}
                        activeColor="#ffd700"
                    />
                  
                </div>
                 <span className='icon'><AiTwotoneHeart /> </span>

                </Col>
            </Row>

        </div>
    )
}

export default BoughtFrom
