
import { useState } from 'react';
import Board from './components/Board';
import './styles.scss'

function App() {
  const [counter,setCounter] = useState(1);
  
  const onBtnClick = ()=>{
setCounter((currentCounter)=>{
return currentCounter+1;
})
  }

  return (<div className='app'>
  <div>
  
  <button onClick={onBtnClick}>click me</button>
<div>{counter}</div>
  </div>
  </div>);

}

export default App
