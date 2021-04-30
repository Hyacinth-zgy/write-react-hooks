// REACT-HOOKS -useState() 初步实现

import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

let lastState; // 声明一个状态值:代表值的上一个状态
function useState(initialState) {
  lastState = lastState || initialState; // 如果上一个状态有值的话就不使用初始值
  function setState(newState) {
    // 声明一个函数，将新的状态值赋值给lastState
    console.log(1);
    lastState = newState;
    render(); // 执行重新渲染
  }
  return [lastState, setState];
}

function Counter() {
  console.log(2);
  let [state, setState] = useState(1);
  return (
    <div>
      <p>{state}</p>
      <button
        onClick={() => {
          console.log(1);
          setState(state + 1);
        }}
      >
        点我加一
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
