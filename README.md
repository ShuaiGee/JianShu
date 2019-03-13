This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Available Scripts
In the project directory, you can run:
### `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
--- 
## 所用技术

### `Redux`
 * 数据状态管理框架
 * Redux三原则：store唯一性/只有store能修改自己的属性值/Reducer是一个纯函数
 `本项目采用React-Redux实现数据管理`

### `Redux中间件`
 * Redux-thunk
 * Redux-saga
 
`本项目采用Redux-thunk进行对action的分类处理，根据action的特定类型进行对应的操作`
### `React-Router`
`实现页面之间的跳转以及页面之间参数的传递`
### `Immutable`
`Immutable 实现的原理是 Persistent Data Structure（持久化数据结构），也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变。`

