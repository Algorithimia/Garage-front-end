import React, { useState } from 'react'
import ReactStars from "react-rating-stars-component";

import {AiTwotoneHeart,AiOutlineHeart} from 'react-icons/ai'


const Buisness = ({business, favourite=true}) => {
const[fav,setFav]=useState( )

    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    return (
        <div className='buisness-box'>
            <img src={business.image}  />
          <br/>
            <div className='rating'>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                       
                        value={4}
                        size={24}
                        activeColor="#ffd700"
                    />
                    
            </div>
            <span className='icon'onClick={()=>setFav(!fav)}>{fav? <AiTwotoneHeart /> : <AiOutlineHeart/> }</span>
            <div className='name'>
              {business.title}
            </div>
            <div className='type'>
             {/* {business.city && business.city.name} {business.area && business.area.name} */}
            </div>

            
        </div>
    )
}

export default Buisness
