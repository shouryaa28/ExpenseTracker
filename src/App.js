import React, { useState } from 'react';
import History from "./Components/History/history";
import Show from "./Components/Showbalance/show";
import Transaction from "./Components/Transaction/Transaction.js";
import './app.css'

const App = () => {

    const [expense, setexpense] = useState([
    
    ]);

    const expenseAmt = () =>{
        let e = 0;
        expense.forEach((l)=>{
            if(l.amt < 0)
                e -= l.amt
        })
        return e;
    }
    console.log(expenseAmt())
    const incomeAmt = () =>{
        let er = 0;
        expense.forEach((l)=>{
            if(l.amt > 0)
                er +=l.amt
        })
        return er;
    }
    console.log(incomeAmt())
  
    const transactions = (d) => {
      const copydata = [...expense]
      copydata.push(d)
      setexpense(copydata)
    }
     
  return <div className='appContainer'>
    <h2>Expense Tracker</h2>

    <Show inc={incomeAmt()} exp={expenseAmt()}/>

    <History added={expense}/>

    <Transaction add={transactions}/>
    
  </div>;
};

export default App;
