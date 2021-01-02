const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
}

// const messagesReducer = (state = initialState, action) => {

//   switch (action.type) {
//     case ADD_MESSAGE: {
//       let NewMessage = {
//         id: 7,
//         text: state.newMessageText,
//         sendBy: 'Panda'
//       };
//       let stateCopy = {
//         ...state,
//         newMessageText: '',
//         messagesData: [...state.messagesData, NewMessage], //! вместо push(NewMessage) мы просто добавляем NewMessage в наш массив через запятую
//       };
//       //stateCopy.messagesData = [...state.messagesData];
//       //stateCopy.messagesData.push(NewMessage);
//       //stateCopy.newMessageText = '';
//       return stateCopy;
//     }
//     case UPDATE_NEW_MESSAGE_TEXT: {
//       let stateCopy = {
//         ...state,
//         newMessageText: action.newText //! вносим изменения непосредственно во время копирования объекта
//       };
//       // stateCopy.newMessageText = action.newText;
//       return stateCopy;
//     }
//     default:
//       return state;
//   }
// }

//! мы можем обойтись без переменной stateCopy (будем просто создавать копию и сразу ее возвращать)
const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let NewMessage = {
        id: 7,
        text: state.newMessageText,
        sendBy: 'Panda'
      };
      return {
        ...state,
        newMessageText: '',
        messagesData: [...state.messagesData, NewMessage], //! вместо push(NewMessage) мы просто добавляем NewMessage в наш массив через запятую
      };
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText //! вносим изменения непосредственно во время копирования объекта
      };
    default:
      return state;
  }
}

export const addMessageActionCreator = () => {
  return { type: ADD_MESSAGE }
}
export const updateNewMessageTextActionCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text }
}

export default messagesReducer;
