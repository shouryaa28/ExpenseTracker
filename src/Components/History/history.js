import React from 'react';
import './history.css';


const history = (props) => {
    const render = props.added.map((l,i)=>{
    return (  
        <ul className='historyul' key={i}>
            <span>{l.text}</span>
            <span>{l.amt > 0 ? '+'+l.amt : l.amt}</span>
        </ul>
        )
    })
  return <div className='historyContainer'>
      <h3>History</h3> 
      <hr style={{width:'29vw'}}/>
        <div className='historydiv'>
        {render}
        </div>
  </div>;
};

export default history;
