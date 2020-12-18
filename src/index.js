import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
//! теперь мы будем использовать stor которы создал для нас redux
//import store from './redux/Store';
import store from './redux/redux_store';

//! чтобы не загромождать index.js выносим эти данные в отдельный файл redux/State.js
// let postsData = [
//   { id: 1, text: 'Hi, how are you???', likesCount: 70 },
//   { id: 2, text: "It's my first post.", likesCount: 50 },
//   { id: 3, text: "It's my second post.", likesCount: 100 },
//   { id: 4, text: "It's my next post.", likesCount: 80 }
// ];
// let messagesData = [
//   { id: 1, text: 'Hi eweryone!' },
//   { id: 2, text: 'How are you?' },
//   { id: 3, text: 'My name is Natalia.' },
//   { id: 4, text: 'Hi!!!' },
//   { id: 5, text: 'Hi!' }
// ];
// let usersData = [
//   { id: 1, name: 'Natalia' },
//   { id: 2, name: 'Alisa' },
//   { id: 3, name: 'Katia' },
//   { id: 4, name: 'Dmytro' },
//   { id: 5, name: 'Oleg' }
// ];

let rerenderEntireTree = (state) => {  //! аргумент state к нам приходит из store.getState() когда мы вызываем функцию rerenderEntireTree(store.getState());
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state} //! мы присваиваем state тот аргумент, который получает функция при вызове, в нашем случае state={store.getState()}

        //! вместо того чтобы передавать каждую функцию по отдельности мы передадим одну функцию dispatch(action):
        // addPost={store.addPost.bind(store)} // bind(store) связывает наш метод addPost с объектом store, только меняет все this внутри метода на store (иначе JS не понимает кто вызывает метод)
        // updateNewPostText={store.updateNewPostText.bind(store)}
        // addMessage={store.addMessage.bind(store)}
        // updateNewMessageText={store.updateNewMessageText.bind(store)}
        dispatch={store.dispatch.bind(store)}
      />
    </BrowserRouter>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState()); //! здесь не нужно bind(store) потому что мы вызывает getState() (пишем его со скобками) прямо в этом файле от имени store, а callBack функции передаются дальше и неизвестно от чьего имени мы будем их вызывать там

// //! вызываем функцию subscribe (которая объявлена в State.js и в качестве аргумента содержит в себе функцию rerenderEntireTree, которая перерисовывает наши страницы) Это делается для того чтобы не импортировать rerenderEntireTree в State.js и избежать циклической зависимости, поэтому мы передаем эту функцию в качестве callBack
// store.subscribe(rerenderEntireTree);

//! при использовании redux нам нужно
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//serviceWorker.unregister();
