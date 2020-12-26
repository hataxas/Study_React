import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux_store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


//rerenderEntireTree(); //! отрисовываем наше дерево один раз а перерисовывается автоматически

// react-redux (функция connect) сам отвечает за перерисовку дерева (причем делает это локально, только там где произошло изменение) Нам больше не нужно вручную ничего перерисовывать
// //! при использовании redux нам нужно самим передавать подпищику (нашему subscribe) измененный state:
// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireTree(state);
// });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//serviceWorker.unregister();
