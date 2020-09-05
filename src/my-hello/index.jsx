import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ReactDOM, { render } from 'react-dom'


/*
构建一个函数组件（注意组件类只能包含一个顶层标签）
1.  如何创建一个函数组件
2.  如何使用 useState 创建一个变量
3.  如何传递参数给组件
 */
const HelloMessage = props =>  {
    /*
    1. props 包含组件传递的参数，props.name 获取到使用组件 <HelloMessage name='小帅哥' /> 的name
    2. 使用 State Hook
        声明 count 变量
        申明 setCount 用于改变变量值
     */
    const [count, setCount] = useState(0);

    /*
    固定写法，返回一个html串
     setCount(count + 1) 更新count的值,自动重新渲染组件
     */
    return (<div    >
        <h1>你好，{props.name}!   </h1>
        <h2>你点了我: {count}次 </h2>
        <button onClick={() => setCount(count + 1)}>
            点击
        </button>
    </div>);
} ;

// 声明 name 参数类型是 string 类型
HelloMessage.propTypes = {
    name: PropTypes.string
};

//创建div 挂载到body
const appTarget = document.createElement('div');
document.body.appendChild(appTarget);

//挂载组件到到div
//  name='小帅哥' 传递参数给组件
ReactDOM.render(<HelloMessage name='小帅哥' />, appTarget);

