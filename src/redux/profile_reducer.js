const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';

let initialState = {
  postsData: [
    { id: 1, text: 'Hi, how are you???', likesCount: 70 },
    { id: 2, text: "It's my first post.", likesCount: 50 },
    { id: 3, text: "It's my second post.", likesCount: 100 },
    { id: 4, text: "It's my next post.", likesCount: 80 }
  ]
}

const profileReducer = (state = initialState, action) => {

  //! альтернативная запись (вместо использования if и else if мы можем использовать switch)
  switch (action.type) {
    case ADD_POST:
      let NewPost = {
        id: 5,
        text: action.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        postsData: [...state.postsData, NewPost], //! добавляем NewPost в копию нашего массива postsData
        newPostText: ''
      };
    case DELETE_POST:
      return {
        ...state,
        postsData: [...state.postsData.filter(post => post.id !== action.postId)], //! удаляем из копии массива пост с тем id которое пришло в action
      };
    default:
      return state;
  }
}

export const addPostActionCreator = (newPostText) => {
  return { type: ADD_POST, newPostText }
}
export const deletePost = (postId) => {
  return { type: DELETE_POST, postId }
}

export default profileReducer;
