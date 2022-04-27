import React from 'react'

const FlashMsg = ({title, p, icontype,img,setFlashmsg}) => {
  return (
  
     <div className='flash-msgs'>
            <div className='close'  onClick={()=>setFlashmsg(false)}><img src='/images/msgIcons/close.svg'/></div>
            <div className={`flash-icon ${icontype}`}>
                    <img src={img}/>
            </div> 
            <div className='title'>
               {title}
            </div>
            <p>{p}</p>
   
   

</div>
  )
}

export default FlashMsg