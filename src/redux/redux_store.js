import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from 'redux-form'
import messagesReducer from "./messages_reducer";
import profileReducer from "./profile_reducer";
import usersReducer from "./users_reducer";
import userProfileReducer from "./user_profile_reducer";
import authReducer from "./auth_reducer";
import thunkMiddleware from 'redux-thunk';


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
  applyMiddleware(thunkMiddleware)
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//! сохраняем наш store глобально (чтбы мы могли его использовать для проверок)
window.store = store;

export default store;
