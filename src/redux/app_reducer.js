
const INITIALIZED = 'INITIALIZED';

let initialState = {
  initialized: false, //! инициализировано приложение? на данный момент нет
};

const appReducer = (state = initialState, action) => {
  //console.log("state: ", state);
  //console.log("action: ", action);
  switch (action.type) {
    case INITIALIZED:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
}

export const initializedSuccess = () => {
  return { type: INITIALIZED }
}


//! создаем thunk для того чтобы делать запросы на сервер

// export const initializeApp = () => {
//   return (dispatch) => {
//     let promise = dispatch(getAuthUserData());
//     // dispatch(somethingElse());
//     // dispatch(somethingElse());
//     //! когда все промисы зарезолвится (все которые есть в массиве) только после этого диспатчится initializedSuccess (ну и все остальное что нам нужно задиспатчить) (это нужно для того чтобы пока мы ждем ответ на запрос об залогинивании пользователя (или другие асинхронные запросы) приложение знало что ему отображать)
//     Promise.all([promise])
//       .then(() => {
//         dispatch(initializedSuccess());
//       });
//   }
// }

export default appReducer;
