import React from 'react'

const UsedPaymentMethods = ({method, payed, date, id}) => {
    return (
        <div className='user_payment_method'>
            <div> 
                <img src={`/images/cycle one/${method}.svg`} /> 
                <span className='yellow'>{payed} $</span>
                <span className='right'>{date}</span>
            </div>
            <div className='id'>
             {id}
            </div>

    </div>
    )
}

export default UsedPaymentMethods
