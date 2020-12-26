import { combineReducers, createStore } from "redux";
import messagesReducer from "./messages_reducer";
import profileReducer from "./profile_reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer
});

let store = createStore(reducers);

//! сохраняем наш store глобально (чтбы мы могли его использовать для проверок)
window.store = store;

export default store;
