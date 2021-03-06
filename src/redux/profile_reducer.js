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

  // if (action.type === ADD_POST) {
  //   let NewPost = {
  //     id: 5,
  //     text: state.newPostText,
  //     likesCount: 0
  //   };
  //   state.postsData.push(NewPost);
  //   //! убираем текст из поля ввода
  //   state.newPostText = '';
  // } else if (action.type === UPDATE_NEW_POST_TEXT) {
  //   state.newPostText = action.newText;
  // }

  //! альтернативная запись (вместо использования if и else if мы можем использовать switch)
  switch (action.type) {
    case ADD_POST:
      let NewPost = {
        id: 5,
        text: state.newPostText,
        likesCount: 0
      };
      state.postsData.push(NewPost);
      //! убираем текст из поля ввода
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
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
