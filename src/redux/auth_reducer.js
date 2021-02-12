import { getAuthUser } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
  userId: null,
  email: null,
  password: null,
  isAuth: false, //! залогинены? на данный момент нет
  isFetching: false //! загрузка в процессе? (изначально ничего не подгружается)
};

const authReducer = (state = initialState, action) => {
  // console.log("state: ", state);
  // console.log("action: ", action);
  //! альтернативная запись (вместо использования if и else if мы можем использовать switch)
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }; //! меняем значение isFetching на то которое пришло к нам с action
    default:
      return state;
  }
}

//! Для того чтобы сократить код не будем в названии функций указвать ActionCreator
export const setAuthUserData = (userId, email, password) => {
  return { type: SET_USER_DATA, data: { userId, email, password } }
}

export const toggleIsFetching = (isFetching) => {
  return { type: TOGGLE_IS_FETCHING, isFetching }
}

export const getAuthUserData = () => {
  return (dispatch) => {
    getAuthUser.then(data => {
      if (data.status === "success") {
        dispatch(setAuthUserData(data.data));
      }
    });
  }
}

export default authReducer;


// POST /api/users
// {
//   "user": {
//     "name": "Dima Lunich",
//     "status": "Lorem ipsum",
//     "city": "Malmo",
//     "country": "Sweden"
//     "description": "Just a silly doggo",
//     "facebook": "dima.lunich",
//     "twitter": "lunich.dima",
//     "instagram": "lunich",
//     "email": "dima.luicni@exmpl.com",
//     "profession": "A dog",
//     "password": "1231231231212",
//     "password_confirmation": "1231231231212"
//   }
// }

// {
//   "status": "success",
//   "errors": [],
//   "data": {
//     # ... - звичайні поля користувача
//   }
// }
// {
//   "status": "failed",
//   "errors": ["name-is-blank"], # масив помилок
//   "data": {
//     # ... - звичайні поля користувача
//   }
// }
