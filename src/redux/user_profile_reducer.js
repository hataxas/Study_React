import { getUserById } from '../api/api';

const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  userProfile: null  //! профиль должен прийти с сервера вместе с action
};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return { ...state, userProfile: action.userProfile };
    default:
      return state;
  }
}

//! Для того чтобы сократить код не будем в названии функций указвать ActionCreator

const setUserProfile = (userProfile) => {
  return { type: SET_USER_PROFILE, userProfile }
}
//! создаем thunk Creator
export const getUserProfile = (userId) => {
  return (dispatch) => {
    getUserById(userId).then(data => {
      //! мы диспатчим action, который приведет к изменению в userProfileReducer
      dispatch(setUserProfile(data.result));
    });
  }
}

export default userProfileReducer;
