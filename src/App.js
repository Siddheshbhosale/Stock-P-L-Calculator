//made by siddhesh

import { useState } from "react";
import "./styles.css";

export default function App() {
  var [buy,setbuy] =useState(0);
  var [quantity,setquantity] =useState(0);
  var [current,setcurrent] =useState(0);
  var [output,setoutput] =useState('Your P&L will be display here')

  function handlechange(e){
    let no =e.target.id;
    if(no==='1'){
      setbuy(Number(e.target.value));
    }
    else if(no==='2'){
      setquantity(Number(e.target.value));
    }
    else{
      setcurrent(Number(e.target.value));
    }
  }

  function handleclick(e){
      let ctr = (current*quantity)-(buy*quantity);
      let per =   (ctr/(buy*quantity))*100;
      if(ctr>0){
        setoutput(`Hey,your profit is ${ctr} and the percentage is ${per}%`);
      }
      else{
        setoutput(`Oops,your loss is ${ctr} and the percentage is ${per}%`);
      }
  }

  return (
    <div className="App">
      <div className="elements">
        <h1>Stock Profile & Loss Calculator</h1>
         <h2>Initial Price</h2>
         <input id="1" onChange={e=>handlechange(e)} type="number"/>
         <h2>Quantity of Stocks</h2>
         <input id="2" onChange={e=>handlechange(e)} type="number"/>
         <h2>Current Price</h2>
         <input id="3" onChange={e=>handlechange(e)} type="number"/>
         <button onClick={e=>handleclick(e)}>Calculate</button>
         <div className="display">{output}</div>
      </div>

      <footer id="footer">
                <ul className="footer-list">
                    <li className="list-item"><a target="_blank" href="bhosalesiddhesh9@gmail.com" className="footer-links">
                        <i className="fa fa-envelope" aria-hidden="true"></i></a>
                    </li>
                    <li className="list-item"><a href="https://github.com/Siddheshbhosale">
                        <i className="fab fa-github" aria-hidden="true"></i>
                    </a>
                    </li>
                    <li className="list-item"><a href="https://www.linkedin.com/in/siddheshbhosale">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    </li>
                    <li className="list-item"><a href="https://github.com/Siddheshbhosale" >
                        <i className="fas fa-briefcase"></i>
                    </a>
                    </li>
                </ul>
       </footer>
    </div>
  );
}
