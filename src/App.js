import { useState } from 'react';
import './App.css';

function App() {

  let [num1 , setNum1] = useState('');
  let [num2, setNum2] = useState('');
  let [result, setResult] = useState(0);


  const onClickResult = () =>{
    if(num1>=0 && num2>=0){
      let ans = parseInt(num1) + parseInt(num2);
      setResult(parseInt(ans));
    }else{
      setResult("Invalid..");
    }
  }
  return (
    <div className="App">

      <div className="heading">
        <h2>Sum Calculator</h2>
      </div>


      <div className="input">
        <lable>Number1</lable>
        <input type='number' className='input_input' value={num1} onChange={(e) => setNum1(e.target.value)} placeholder='Enter value'></input>
      </div>
      <div className="input">
        <lable>Number2</lable>
        <input type='number' className='input_input' value={num2} onChange={(e) =>setNum2(e.target.value)} placeholder='Enter value'></input>
      </div>

      <div className="btn_group">
        <button type='submit' onClick={onClickResult} className='btn_style' >Submit</button>
      </div>


      <div className='result'>
        <p>The sum of given number is: {result}</p>
      </div>
    </div>
  );
}

export default App;
