import { combineReducers, createStore } from "redux";
import { reducer as formReducer } from 'redux-form'
import messagesReducer from "./messages_reducer";
import profileReducer from "./profile_reducer";
import usersReducer from "./users_reducer";
import userProfileReducer from "./user_profile_reducer";
import authReducer from "./auth_reducer";


let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  userProfilePage: userProfileReducer,
  auth: authReducer,
  form: formReducer
});

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//! сохраняем наш store глобально (чтбы мы могли его использовать для проверок)
window.store = store;

export default store;
