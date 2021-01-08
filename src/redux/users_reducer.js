const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS_LIST = 'SET_USERS_LIST';

let initialState = {
  usersList: []
}

const usersReducer = (state = initialState, action) => {
  // console.log("state: ", state);
  // console.log("action: ", action);
  //! альтернативная запись (вместо использования if и else if мы можем использовать switch)
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        //! мы перебираем весь массив пользователей и меняем followed только того, чье id пришло к нам в action
        usersList: state.usersList.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        })
      };
    case UNFOLLOW:
      console.log("hello unfollow");
      return {
        ...state,
        //! мы перебираем весь массив пользователей и меняем followed только того, чье id пришло к нам в action
        usersList: state.usersList.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        })
      };
    case SET_USERS_LIST:
      return { ...state, usersList: [...state.usersList, ...action.users] } //! добавляем в state новых пользователей которые пришли к нам в action (из базы данных)
    default:
      return state;
  }
}

export const followActionCreator = (userId) => {
  return { type: FOLLOW, userId }
}
export const unfollowActionCreator = (userId) => {
  return { type: UNFOLLOW, userId }
}
export const setUsersListActionCreator = (users) => {
  return { type: SET_USERS_LIST, users }
}

export default usersReducer;
