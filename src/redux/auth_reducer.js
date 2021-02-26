import { stopSubmit } from 'redux-form';
import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
  userId: null,
  email: null,
  name: null,
  password: null,
  isAuth: false, //! залогинены? на данный момент нет
  isFetching: false //! загрузка в процессе? (изначально ничего не подгружается)
};

const authReducer = (state = initialState, action) => {
  //console.log("state: ", state);
  //console.log("action: ", action);
  //! альтернативная запись (вместо использования if и else if мы можем использовать switch)
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data, //! {userId: 1, email: "kling.brittany@gmail.com", name: "Brittany Kling", isAuth: true}
      };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }; //! меняем значение isFetching на то которое пришло к нам с action
    default:
      return state;
  }
}

//! Для того чтобы сократить код не будем в названии функций указвать ActionCreator
export const setAuthUserData = (userId, email, name, isAuth) => {
  return { type: SET_USER_DATA, data: { userId, email, name, isAuth } }
}

// export const getAuthUserData = () => {
//   return (dispatch) => {
//     authAPI.me()
//       .then(response => {
//         if (response.data.status === "success") {
//           let {id, email, name} = responce.data.data;
//           dispatch(setAuthUserData(id, email, name, true));
//       }
//     });
//   }
// }

export const toggleIsFetching = (isFetching) => {
  return { type: TOGGLE_IS_FETCHING, isFetching }
}

//! создаем thunk для того чтобы делать запросы на сервер

export const login = (email, password) => {
  return (dispatch) => {
    authAPI.login(email, password)
      .then(response => {
        if (response.data.status === "success") {
          let data = response.data.result;
          dispatch(setAuthUserData(data.user.id, data.user.contacts.email, data.user.name, true));
        } else {
          //! если возникли проблемы во время залогинивания, мы останавливаем процесс используя функцию stopSubmit (в этой функции мы прописываем имя формы и возможные причины проблемы)
          let action = stopSubmit('login', { email: 'Email is wrong', password: 'Password is wrong' });
          dispatch(action);
        }
      });
  }
}

//! Когда вылогиниваемся нам нужно занулить всю информацию о пользователе userId = nul, email= nul, name= nul, isAuth=false
export const logout = () => {
  return (dispatch) => {
    authAPI.logout()
      .then(response => {
        if (response.data.status === "success") {
          console.log(response.data);
          dispatch(setAuthUserData(null, null, null, false));
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
