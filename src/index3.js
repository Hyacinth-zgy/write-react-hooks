// 1.此文件看似功能正常，实际上存在问题
// 2.问题:当我们在input输入框输入值的时候，Child组件也会不停的渲染
// 3.实际上Child看起来并没有值的改变，不应该每次进行渲染，所以需要优化

// 4.导致不停渲染的原因:
// 4.1:父组件重新render(父组件重新render引起子组件重新render的情况有两种)
// 4.1.1 直接使用,每当父组件重新render导致的重传props，子组件将直接跟着重新渲染，无论props是否有变化。在类组件中可通过shouldComponentUpdate方法优化，在hook组件中可以使用memo结合其他hook方法优化
// 4.1.2 在componentWillReceiveProps方法中，将props转换成自己的state【查看笔记-映像-高级篇章】
// 4.1.3 组件本身调用setState，无论state有没有变化。在类组件中可通过shouldComponentUpdate方法优化。

// 5.当输入框输入值改变name的值，APP函数组件重新执行，每次重新执行都重新声明data和addClick，这导致每次传入Child的 prop的值看起来没有任何改变，实际上底层数地址指向已经不是同一个了，prop属性的值的更改就会导致组件的更新和渲染
// 6.优化:index4
import React, { useState, useMemo, useCallback } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
function Child({ data, addClick }) {
  console.log('Child render');
  return <button onClick={addClick}>{data.number}</button>;
}
function App() {
  let [number, setNumber] = useState(0);
  let [name, setName] = useState('zhufeng');
  let addClick = () => {
    setNumber(number + 1);
  };
  let data = {
    number,
  };
  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Child data={data} addClick={addClick}></Child>
      </div>
    </div>
  );
}
function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App></App>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
