// REACT-HOOKS -useState() 初步实现

import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { useState } from './utils/usestate';

function Counter() {
  let [state, setState] = useState(1);
  let [personName, setPersonName] = useState('zgy');
  return (
    <div>
      <p>{state}</p>
      <p>{personName}</p>
      <button
        onClick={() => {
          console.log(1);
          setState(state + 1);
        }}
      >
        点我加一
      </button>
      <button
        onClick={() => {
          console.log(1);
          setPersonName('ldh');
        }}
      >
        点我改变名字
      </button>
    </div>
  );
}
export function render() {
  ReactDOM.render(
    <React.StrictMode>
      <Counter></Counter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
