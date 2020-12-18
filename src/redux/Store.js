import messagesReducer from "./messages_reducer";
import profileReducer from "./profile_reducer";

//? константы мы перенесли в файлы с reducers
// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const ADD_MESSAGE = 'ADD-MESSAGE';
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

//! объединяем данные в один объект чтобы экспортировать все вместе, а не каждый по отдельности

let store = {
  //! делаем наш state приватным (_state)(к нему нельзя обращаться на прямую, а только через методы)
  _state: {
    profilePage: {
      postsData: [
        { id: 1, text: 'Hi, how are you???', likesCount: 70 },
        { id: 2, text: "It's my first post.", likesCount: 50 },
        { id: 3, text: "It's my second post.", likesCount: 100 },
        { id: 4, text: "It's my next post.", likesCount: 80 }
      ],
      newPostText: ''
    },

    messagesPage: {
      messagesData: [
        { id: 1, text: 'Hi eweryone!', sendBy: 'Natalia' },
        { id: 2, text: 'How are you?', sendBy: 'Natalia' },
        { id: 3, text: 'My name is Panda.', sendBy: 'Panda' },
        { id: 4, text: 'My name is Alisa.', sendBy: 'Alisa' },
        { id: 5, text: 'My name is Katia.', sendBy: 'Katia' },
        { id: 6, text: 'My name is Dima.', sendBy: 'Dmytro' }
      ],
      newMessageText: '',
      usersData: [
        {
          id: 1,
          name: 'Natalia',
          img: '/img/cat.jpg'
        },
        {
          id: 2,
          name: 'Alisa',
          img: '/img/fox.jpg'
        },
        {
          id: 3,
          name: 'Katia',
          img: '/img/bear.jpg'
        },
        {
          id: 4,
          name: 'Dmytro',
          img: '/img/dog.jpg'
        }
      ]
    },

    sidebar: {
      friendsData: [
        { name: 'Alisa', img: '/img/fox.jpg' },
        { name: 'Katia', img: '/img/bear.jpg' },
        { name: 'Dmytro', img: '/img/dog.jpg' }
      ]
    }
  },
  //! т.к. наш массив _state приватный и мы не можем обращаться к нему на прямую мы создадим метод, который позволит нам обращаться к этому массиву
  getState() {
    return this._state
  },

  //! Oбъявляем функцию _refresh (тоже приватную) которая по сути ничего не делает (мы хотим чтобы запускалась функция rerenderEntireTree, которая прийдет из index.js и будет перерисовывать наши страницы когда мы вносим изменения)
  _refresh() {
    console.log('state changed');
  },

  //! создаем функцию subscribe для того чтобы избежать циклической зависимости: мы не будем импортировать в State.js rerenderEntireTree, а передадим этот rerenderEntireTree внутрь subscribe в качестве аргумента из index.js. Т.к. в качестве аргумента мы передаем rerenderEntireTree, то наш _refresh = rerenderEntireTree
  subscribe(observer) {
    this._refresh = observer; //! observer переводится как наблюдатель
  },

  //! превращаем наши функции в методы
  // addPost() {
  //   let NewPost = {
  //     id: 5,
  //     text: this._state.profilePage.newPostText,
  //     likesCount: 0
  //   };
  //   this._state.profilePage.postsData.push(NewPost);
  //   // убираем текст из поля ввода
  //   this._state.profilePage.newPostText = '';
  //   this._refresh(this._state);
  // },

  // updateNewPostText(newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._refresh(this._state);
  // },

  // addMessage() {
  //   let NewMessage = {
  //     id: 7,
  //     text: this._state.messagesPage.newMessageText,
  //     sendBy: 'Panda'
  //   };
  //   this._state.messagesPage.messagesData.push(NewMessage);
  //   this._state.messagesPage.newMessageText = '';
  //   this._refresh(this._state);
  // },
  // updateNewMessageText(newText) {
  //   this._state.messagesPage.newMessageText = newText;
  //   this._refresh(this._state);
  // }

  //! для того чтобы не импортировать каждую функцию через props по всему маршруту, объединяем их в метод dispatch(action) и импортируем уже его (action это массив который должен обязательно иметь свойство type: '...', но также может иметь и другие свойства, которые мы задаем при помощи функций ActionCreator()). И так как этих функций может быть очень много, мы создаем для каждой отдельной страницы отдельный файл .js в котором будет хранится redcer(функция которая принимает свою часть state и action и согласно этому action преобразует state или оставляет неизменным если action не подошел)
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action);

    //! перерисовываем наши страницы на сайте в соответствии с новым  _state
    this._refresh(this._state);
  }
}

//! создаем функции которые буду возвращать массивы actions (это нужно для того чтобы убрать из react (из наших тупых компонент) эту задачу, там мы будем вызывать эти функции в качестве аргумента у dispatch и наши компоненты будут знать какую именно функцию из dispatch мы используем и что именно отрисовать):
//? их мы тоже перенесли к соответствующим reducers
// export const addPostActionCreator = () => {
//   return { type: ADD_POST }
// }
// export const updateNewPostTextActionCreator = (text) => {
//   return { type: UPDATE_NEW_POST_TEXT, newText: text }
// }

// export const addMessageActionCreator = () => {
//   return { type: ADD_MESSAGE }
// }
// export const updateNewMessageTextActionCreator = (text) => {
//   return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text }
// }

export default store;

//! это для того чтобы можно было глобально обратиться к store
window.store = store;
