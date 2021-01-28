const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
  messagesData: [
    { id: 1, text: 'Hi eweryone!', sendBy: 'Natalia' },
    { id: 2, text: 'How are you?', sendBy: 'Natalia' },
    { id: 3, text: 'My name is Panda.', sendBy: 'Panda' },
    { id: 4, text: 'My name is Alisa.', sendBy: 'Alisa' },
    { id: 5, text: 'My name is Katia.', sendBy: 'Katia' },
    { id: 6, text: 'My name is Dima.', sendBy: 'Dmytro' }
  ],
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

//! мы можем обойтись без переменной stateCopy (будем просто создавать копию и сразу ее возвращать)
const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let NewMessage = {
        id: 7,
        text: action.newMessageText,
        sendBy: 'Panda'
      };
      return {
        ...state,
        messagesData: [...state.messagesData, NewMessage], //! вместо push(NewMessage) мы просто добавляем NewMessage в наш массив через запятую
      };
    default:
      return state;
  }
}

export const addMessageActionCreator = (newMessageText) => {
  return { type: ADD_MESSAGE, newMessageText }
}

export default messagesReducer;
