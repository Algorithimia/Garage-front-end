import React from 'react'

const SubscribtionAccount = ({way, id,paypal, visa}) => {
    return (
        <div className='account'>
            <div className='first_row'>
               Bankname
                <img  className={way} src={visa ? `/images/cycle one/visa.svg`:`/images/cycle one/paypal.svg`} />

                </div>

                <div className='id'>{id}</div>
                <div className='card_info'>

                    { paypal &&  <div className='inline-block name'>
                        <span>USER NAME</span>
                        <br/>
                        John Doe
                    </div> }
                    
                    { visa && 
                    <div>
                        <div className='inline-block name'>
                            <span>CARDHOLDER NAME</span>
                            <br/>
                            John Doe
                        </div>
                        <div className='inline-block right'>
                            <span>EXPIRE DATE</span>
                            <br/>
                            05 / 2021
                        </div> 
                    </div>
                    
                    }         

               </div>

               <div className='plan'>
                   <span className='underline'>PLAN SUBSCRIBTION</span>
                   <span className='right'>30 DAYS</span>

               </div>
               <div className='date'>
                 05 / 2021
               </div>
            
        </div>
    )
}
 {/* <img src='/images/cycle one/paypal.svg' /> */}
export default SubscribtionAccount
