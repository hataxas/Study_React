const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  userProfile: null  //! профиль должен прийти с сервера вместе с action
};

const userProfileReducer = (state = initialState, action) => {
  //console.log("state: ", state);
  //console.log("action: ", action);
  //! альтернативная запись (вместо использования if и else if мы можем использовать switch)
  switch (action.type) {
    case SET_USER_PROFILE:
      return { ...state, userProfile: action.userProfile };
    default:
      return state;
  }
}

//! Для того чтобы сократить код не будем в названии функций указвать ActionCreator

export const setUserProfile = (userProfile) => {
  return { type: SET_USER_PROFILE, userProfile }
}

export default userProfileReducer;
