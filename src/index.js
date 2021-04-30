// REACT-HOOKS -useState() 的具象实现
// 思路:用一个数组memoizedState来保存useState所用到的变量
// 每次Counter重新执行都要重新使用useState依次从memoizedState中读取index赋值，所以18行的cursor要置为0

import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

let memoizedState = []; // hooks 的值存放在这个数组里
let cursor = 0; // 当前 memoizedState 的索引
let number = 0;
function useState(initialState) {
  number = number + 1;
  memoizedState[cursor] = memoizedState[cursor] || initialState;
  const currentCursor = cursor;
  function setState(newState) {
    memoizedState[currentCursor] = newState;
    cursor = 0;
    render();
  }
  console.log(number);
  return [memoizedState[cursor++], setState];
}

const ReactObj = {
  useState,
};
console.log(ReactObj);

function Counter() {
  let [state, setState] = ReactObj.useState(1);
  let [stateString, setStateString] = ReactObj.useState('zgy');
  return (
    <div>
      <p>{state}</p>
      <p>{stateString}</p>
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        点我加一
      </button>
      <button
        onClick={() => {
          setStateString(stateString + 'll');
        }}
      >
        点我改变string
      </button>
    </div>
  );
}
function render() {
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
