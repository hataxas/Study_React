//import React from 'react';
import { connect } from 'react-redux';
import UsersAPIComponent from './UsersAPIComponent';
import {
  followActionCreator,
  unfollowActionCreator,
  setUsersListActionCreator,
  setCurrentPageActionCreator,
  setTotalUsersCountActionCreator
} from '../../redux/users_reducer';

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.usersList,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
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
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageActionCreator(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountActionCreator(totalCount));
    },
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;
