//import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {
  followActionCreator,
  unfollowActionCreator,
  setUsersListActionCreator
} from '../../redux/users_reducer';

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.usersList
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followActionCreator(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowActionCreator(userId));
    },
    setUsersList: (users) => {
      dispatch(setUsersListActionCreator(users));
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
