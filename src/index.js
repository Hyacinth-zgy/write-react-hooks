// 对index3进行优化
import React, { memo, useState, useMemo, useCallback } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
function Child({ data, addClick }) {
  console.log('Child render');
  return <button onClick={addClick}>{data.number}</button>;
}
Child = memo(Child); // Memo 传入一个组件后返回一个组件，改造后每次渲染会判断一下属性变了没，如果属性不变不渲染,属性变了才渲染
function App() {
  let [number, setNumber] = useState(0);
  let [name, setName] = useState('zhufeng');
  // 优化改造 useCallback 改造函数,如果传入[] ，那么useCallback返回值不会改变，prop就不会改变，子组件永远不会更新，对于依赖prop更新的组件来说，就永远不会更新了，所以需要传入依赖项number，number改变seCallbackhui会重新计算，传入的prop会更新
  // 没有第二个参数没有作用，即子组件还是不不停的更新,每次都会返回新的值
  let addClick = useCallback(() => setNumber(number + 1), [number]);
  // 优化改造 useMemo改造对象  useMemo同理
  let data = useMemo(() => {
    return {
      number,
    };
  }, [number]);
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
