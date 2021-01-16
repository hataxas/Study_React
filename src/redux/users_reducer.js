const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS_LIST = 'SET_USERS_LIST';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
  usersList: [],
  pageSize: 5, //! задаем сколько пользователей будет отображаться на странице
  totalUsersCount: 0, //! задаем общее колличество пользователей (т.к. неизвестно ставим пока 15)
  currentPage: 1,  //! текущая страница по умолчанию первая
  isFetching: false, //! загрузка в процессе? (изначально ничего не подгружается)
};

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
      return { ...state, usersList: action.users }; //! добавляем в state новых пользователей которые пришли к нам в action (из базы данных)
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }; //! меняем значение текущей страницы на то которое пришло к нам с action
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.count };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }; //! меняем значение isFetching на то которое пришло к нам с action
    default:
      return state;
  }
}

//! Для того чтобы сократить код не будем в названии функций указвать ActionCreator
export const follow = (userId) => {
  return { type: FOLLOW, userId }
}
export const unfollow = (userId) => {
  return { type: UNFOLLOW, userId }
}
export const setUsersList = (users) => {
  return { type: SET_USERS_LIST, users }
}
export const setCurrentPage = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage }
}
export const setTotalUsersCount = (totalUsersCount) => {
  return { type: SET_TOTAL_USERS_COUNT, count: totalUsersCount }
}
export const toggleIsFetching = (isFetching) => {
  return { type: TOGGLE_IS_FETCHING, isFetching }
}

export default usersReducer;
