import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';

function App() {

  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    setText((text)=>[...text,val+" "])
  }
  
  const resetInput = () => {
    setText("");
    setResult("");
  }
  return (
    <div className="container">
      <div className="calc-wrap">
        <Input text={text} result={result} />
        <div className="but-row">
          <Button symbol="7" handleClick={addToText}/>
          <Button symbol="8" handleClick={addToText}/>
          <Button symbol="9" handleClick={addToText}/>
          <Button symbol="/" color="#00AD85" handleClick={addToText}/>
        </div>
         <div className="but-row">
          <Button symbol="4" handleClick={addToText}/>
          <Button symbol="5" handleClick={addToText}/>
          <Button symbol="6" handleClick={addToText}/>
          <Button symbol="*" color="#00AD85" handleClick={addToText}/>
        </div>
         <div className="but-row">
          <Button symbol="1" handleClick={addToText}/>
          <Button symbol="2" handleClick={addToText}/>
          <Button symbol="3" handleClick={addToText}/>
          <Button symbol="+" color="#00AD85" handleClick={addToText}/>
        </div>
         <div className="but-row">
          <Button symbol="0" handleClick={addToText}/>
          <Button symbol="." handleClick={addToText}/>
          <Button symbol="=" />
          <Button symbol="-" color="#00AD85" handleClick={addToText}/>
        </div>
        <Button symbol="Clear" color="red"/>
      </div>
    </div>
    
  );
}

export default App;
