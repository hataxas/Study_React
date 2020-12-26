const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postsData: [
    { id: 1, text: 'Hi, how are you???', likesCount: 70 },
    { id: 2, text: "It's my first post.", likesCount: 50 },
    { id: 3, text: "It's my second post.", likesCount: 100 },
    { id: 4, text: "It's my next post.", likesCount: 80 }
  ],
  newPostText: ''
}

const profileReducer = (state = initialState, action) => {

  //! альтернативная запись (вместо использования if и else if мы можем использовать switch)
  switch (action.type) {
    case ADD_POST: {
      let NewPost = {
        id: 5,
        text: state.newPostText,
        likesCount: 0
      };
      //! создаем копию нашего state и будем менять ее, а не оригинал (иначе react-redux не перерисовывает наши страницы, т.к. по правилам функции не должны менять входящие в них данные)
      let stateCopy = { ...state };
      stateCopy.postsData = [...state.postsData];
      stateCopy.postsData.push(NewPost);
      //! убираем текст из поля ввода
      stateCopy.newPostText = '';
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
}

export const addPostActionCreator = () => {
  return { type: ADD_POST }
}
export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text }
}

export default profileReducer;
