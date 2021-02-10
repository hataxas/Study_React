import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../CommonComponents/Preloader/Preloader';
//import * as axios from 'axios';
import {
  follow,
  unfollow,
  getUsersThunkCreator,
  pageChangedThunkCreator,
} from '../../redux/users_reducer';
//import {getUsers} from '../../api/api';


//todo мы контейнерную компоненту, которая отвечает за запросы на сервер UsersContainer оборачиваем другой контейнерной компонентой при помощи connect, которая принимает store в качестве контекста и внутри этих контейнерных компонент наша презентационная компонент Users (ее отрисовывает UsersContainer)

//! компонента отвечающая за запросы на сервер (может быть как классовой так и функциональной)
class UsersContainer extends React.Component{
  //? запрос на сервер далаем в методе componentDidMount() (монтируем нашу компоненту на страницу)
  componentDidMount() {
    //! вместо всего этого используем нашу thunk, написанную в users_reducer
    // this.props.toggleIsFetching(true);
    // //console.log(this.props);
    // //! выносим наш запрос в отдельный файл api.js (делаем DAL) и возвращаем затем не весь response целиком, а только data из response
    // //axios.get(`http://localhost:4567/api/users?page=${this.props.currentPage}&per_page=${this.props.pageSize}&count=21`)
    // getUsers(this.props.currentPage, this.props.pageSize).then( data => {
    //     this.props.toggleIsFetching(false);
    //     this.props.setUsersList(data.result);
    //     this.props.setTotalUsersCount(data.count);
    //   });
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
  }
  //? напишем метод для переключения страниц (т.к. мы хотим сохранить контекст вызова, то пишем метод в виде стрелочной функции) (эта функция будет вызываться на onClick в render())
  onPageChanged = (pageNumber) => {
    // this.props.toggleIsFetching(true);
    // this.props.toggleIsCurrentPageProgress(true);
    // this.props.setCurrentPage(pageNumber);
    // //axios.get(`http://localhost:4567/api/users?page=${pageNumber}&per_page=${this.props.pageSize}&count=21`)
    // getUsers(pageNumber, this.props.pageSize).then(data => {
    //       this.props.toggleIsFetching(false);
    //       this.props.toggleIsCurrentPageProgress(false);
    //       console.log(data.result);
    //       console.log(data.count);
    //       this.props.setUsersList(data.result);
    //     });
    //! вместо всего этого используем нашу thunk, написанную в users_reducer
    this.props.pageChangedThunkCreator(pageNumber, this.props.pageSize);
  }
  //! теперь пропишем метод render (при помощи которого будет отрисовываться наш jsx содержащийсь в User.jsx)
  render () {
    return <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  onPageChanged={this.onPageChanged}
                  users={this.props.users}
                  unfollow={this.props.unfollow}
                  follow={this.props.follow}
                  isFetching={this.props.isFetching}
                  isPageChangeInProgress={this.props.isPageChangeInProgress}
          />
      </>
  }
}

//! компонента отвечающая за передачу store нашей UsersContainer
let mapStateToProps = (state) => {
  return {
    users: state.usersPage.usersList,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isPageChangeInProgress: state.usersPage.isPageChangeInProgress
  }
}
//! мы можем значительно сократить код, если будем записывать mapDispatchToProps сразу в виде объекта и позволяя connect за кадром делать колбэк вызовы
// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followActionCreator(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowActionCreator(userId));
//     },
//     setUsersList: (users) => {
//       dispatch(setUsersListActionCreator(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageActionCreator(pageNumber));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountActionCreator(totalCount));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingActionCreator(isFetching));
//     },
//   }
// }

export default connect(mapStateToProps,
  {follow, unfollow, getUsersThunkCreator, pageChangedThunkCreator})(UsersContainer);
