import { render } from '../index';
let lastState; // 声明一个状态值:代表值的上一个状态
export function useState(initialState) {
  lastState = lastState || initialState; // 如果上一个状态有值的话就不使用初始值
  function setState(newState) {
    // 声明一个函数，将新的状态值赋值给lastState
    console.log(1);
    lastState = newState;
    render(); // 执行重新渲染
  }
  return [lastState, setState];
}
