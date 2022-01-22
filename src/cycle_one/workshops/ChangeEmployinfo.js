import React from 'react';
import { Link } from 'react-router-dom';

const ChangeEmployinfo = () => {
  return <div className='opacity'>

      <div className='change'>
          <div className='title'>
          CHANGE 
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL3bQlljod-AMBeQQJDMtOgaugGBBuz1LI2w&usqp=CAU' />
            <span> employee name </span>
             USER/PASSWORD 
          </div>
          <form>
            <div className='input'>
              <input  placeholder='USER NAME'/>

            </div>
            <div className='input'>
              <input  placeholder='PASSWORD'/>

            </div>
            <div className='input'>
              <input  placeholder='CONFIRM PASSWORD'/>

            </div>
            <div className='buttons'>
              <Link to='/workshop/owner/employes'><button className='button'>DISCARD </button></Link>
              <Link to='/workshop/owner/employes'> <input className='button blue' type='submit' value='SAVE' /></Link>
            </div>
          </form>

      </div>
  </div>;
};

export default ChangeEmployinfo;
