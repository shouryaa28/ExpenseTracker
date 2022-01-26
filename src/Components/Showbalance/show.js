import React from 'react';
import './show.css';

const show = (props) => {
  return <div className='showContainer'>
    <h3>Your Balance</h3>
    <h1>₹{props.inc - props.exp}.00</h1>
    <div className='showdiv'>
      <div className='showie'>
        <span>INCOME</span>
        <span style={{color:'springgreen'}}>₹{props.inc}.00</span>
      </div>
      <hr />
      <div className='showie'>
        <span>EXPENSE</span>
        <span style={{color:'red'}}>₹{props.exp}.00</span>
      </div>
    </div>
  </div>;
};

export default show;
