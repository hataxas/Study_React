import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux_store';

let rerenderEntireTree = (state) => {  //! аргумент state к нам приходит из store.getState() когда мы вызываем функцию rerenderEntireTree(store.getState());
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state} //! мы присваиваем state тот аргумент, который получает функция при вызове, в нашем случае state={store.getState()}
        //! мы передадим функцию dispatch(action) дальше через props:
        dispatch={store.dispatch.bind(store)}
        store={store}
      />
    </BrowserRouter>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState()); //! здесь не нужно bind(store) потому что мы вызывает getState() (пишем его со скобками) прямо в этом файле от имени store, а callBack функции передаются дальше и неизвестно от чьего имени мы будем их вызывать там

//! при использовании redux нам нужно самим передавать подпищику (нашему subscribe) измененный state:
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//serviceWorker.unregister();
