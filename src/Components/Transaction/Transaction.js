import React,{useState} from 'react';
import './transaction.css'

const Transaction = (props) => {

    const [data, setdata] = useState({text:'',amt:""});

    const addtransaction = () => {
        props.add({text:data.text,amt:+(data.amt)})
    }

    const changehandler = (e) => {
        setdata({...data,[e.target.name]:e.target.value})
    }

  return <div>
      
      <h3>Add new transaction</h3>
      <hr style={{width:'29vw'}}/>
      <h4>Text</h4>

      <input 
      className='input'
      placeholder='Enter text...'
      name='text'
      value={data.text}
      onChange={changehandler}
      ></input>

      <h4>Amount<br/>(negative-expense,positive-income)</h4>

      <input 
      className='input'
      placeholder='Enter amount...'
      name='amt'
      value={data.amt}
      onChange={changehandler}
      ></input>
<br/>
      <button className='btn' onClick={addtransaction}>Add transaction</button>
  </div>;
};

export default Transaction;
