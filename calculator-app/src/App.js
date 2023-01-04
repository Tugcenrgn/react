import { useState } from 'react';
import * as math from "mathjs";
import './App.css';
import Button from './components/Button';
import Input from './components/Input';

function App() {

  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToValue = (val) => {
    setText((text)=>[...text,val+" "])
  }
  
  const resInput = () => {
    setText("");
    setResult("");
  }

  const calcResult = () => {
    const input = text.join("")
    setResult(math.evaluate(input))
    setText("")
  }

  return (
    <div className="container">
      <div className="calc-wrap">
        <Input text={text} result={result} />
        <div className="but-row">
          <Button symbol="7" handleClick={addToValue}/>
          <Button symbol="8" handleClick={addToValue}/>
          <Button symbol="9" handleClick={addToValue}/>
          <Button symbol="/" color="#00AD85" handleClick={addToValue}/>
        </div>
         <div className="but-row">
          <Button symbol="4" handleClick={addToValue}/>
          <Button symbol="5" handleClick={addToValue}/>
          <Button symbol="6" handleClick={addToValue}/>
          <Button symbol="*" color="#00AD85" handleClick={addToValue}/>
        </div>
         <div className="but-row">
          <Button symbol="1" handleClick={addToValue}/>
          <Button symbol="2" handleClick={addToValue}/>
          <Button symbol="3" handleClick={addToValue}/>
          <Button symbol="+" color="#00AD85" handleClick={addToValue}/>
        </div>
         <div className="but-row">
          <Button symbol="0" handleClick={addToValue}/>
          <Button symbol="." handleClick={addToValue}/>
          <Button symbol="=" handleClick={calcResult}/>
          <Button symbol="-" color="#00AD85" handleClick={addToValue}/>
        </div>
        <Button symbol="Clear" color="red" handleClick={resInput}/>
      </div>
    </div>
    
  );
}

export default App;
