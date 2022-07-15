// import logo from './logo.svg';
import './App.css';
import { useRef, useState } from "react";

export default function App() {
  var billRef = useRef(0);
  var cashRef = useRef(0);
  var notes = [2000, 500, 100, 50, 20, 10, 5, 1];
  var [errorMessage,setMessage] = useState('');
  var [notarr,setNote] = useState(Array(notes.length).fill(0));

  // var notarr = [];


  function showText(e){
    e.preventDefault();
    // console.info("Hiee")
    const bill = billRef.current.value;
    const cash = cashRef.current.value
    console.info("bill",billRef.current.value);
    console.info("cash",cashRef.current.value);
    if(bill > 0){
      console.info(cash<bill)
      var returned = cash-bill;
      var pending = returned;
      var noOfNote = 1;
      notarr = [];
      if(returned >= 0){
        console.info("Returned Amount = ",returned);
        notes.forEach(element => {
        console.info(element)
        noOfNote = Math.trunc(pending/element);
        pending = pending%element;
        notarr.push(noOfNote);
        // console.info(noOfNote)
        // console.info(pending);
        });
        console.info(notarr);
        setNote(notarr);
        // console.info(pending);
      }
      else{
        setMessage("Enter Cash amount greater than bill amount");
      }

    }
    else{
      setMessage("Enter valid bill amount");
    }
  }


  

  return (
    <div className="App w-full max-w-lg mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
      <form className="bg-white rounded px-8 pt-6 pb-8 mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */} 

      <h1>Cash register Manager</h1>
      <p style={{padding:"1rem"}}>Enter the bill amount and the cash given by customer 
        and know minimum number of notes to be returned</p>
      <label className="block text-black text-sm font-bold mb-2">
      Bill Amount
      <input type="text" 
      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
      placeholder="Enter Bill Amount"
      // onChange={(e) => setAmount(e.target.value)}
      ref={billRef}/>
      </label>
      <label className="block text-black text-sm font-bold mb-2"><br/>
      Cash Given
      <input type="text"
      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      placeholder="Enter the Cash"
      ref={cashRef}/>
    </label><br/>
    <div className='text-center'>
    <button onClick = {showText} className='bg-slate-900 hover:bg-slate-500 text-white
              font-bold py-2 px-4 border-b-4 border-slate-700 
              hover:border-slate-600 rounded'> Check 
    </button>
    <p style={{color:"red"}}>{errorMessage}</p>
    </div>
    </form>
    <table className="table-auto border-separate border-spacing-2 border border-slate-400 ...">
    <caption style={{fontSize:"1.3rem",marginBottom:"1rem"}}><strong>Return Change</strong></caption>
    <tbody>
    <tr>
      <th className="border border-slate-300 ...">No of Notes</th>{
      notarr.map((noNote) =>{
      return(
        <td className="border border-slate-300 ...">{noNote}</td>
      )
      })
    }
    </tr>
    <tr>
      <th className="border border-slate-300 ...">Note</th>
     {
        notes.map(note=>{
          return(
          <td className="border border-slate-300 ...">{note}</td>
          )
        })
      }
    </tr>
    </tbody>
    </table>
    </div>
  );
}

