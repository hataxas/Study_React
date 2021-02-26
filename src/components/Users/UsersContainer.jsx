import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../CommonComponents/Preloader/Preloader';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
//import * as axios from 'axios';
import {
  follow,
  unfollow,
  getUsersThunkCreator,
  pageChangedThunkCreator,
} from '../../redux/users_reducer';
import { getUsersList, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getIsPageChangeInProgress } from '../../redux/users_selectors';
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
// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.usersList,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     isPageChangeInProgress: state.usersPage.isPageChangeInProgress,
//     //! получаем доступ к информации о том залогинен ли текущий пользователь и передаем эту информацию в UsersContainer (перенесли это в наш HOC)
//     //isAuth: state.auth.isAuth
//   }
// }

let mapStateToProps = (state) => {
  return {
    users: getUsersList(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    isPageChangeInProgress: getIsPageChangeInProgress(state),
    //! получаем доступ к информации о том залогинен ли текущий пользователь и передаем эту информацию в UsersContainer (перенесли это в наш HOC)
    //isAuth: state.auth.isAuth
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

// //! Передаем в нашу HOC withAuthRedirect (withAuthRedirect.js) UsersContainer (ту компоненту к которой мы хотим применить ту логику, которая описана в нашей HOC). Для того чтобы редирект работал AuthRedirectComponent нужно передать вместо UsersContainer в connect
// let AuthRedirectComponent = withAuthRedirect(UsersContainer);


// export default connect(mapStateToProps,
//   {follow, unfollow, getUsersThunkCreator, pageChangedThunkCreator})(UsersContainer);

//! функция compose позволяет нам объединить все конте йнерные компоненты чтобы четко прослеживалась вложенность. В нашем случае мы оборачиваем компоненту UsersContainer в withAuthRedirect, затем в connect (который отрисовывает нашу компоненту)
export default compose (
  connect(mapStateToProps, {follow, unfollow, getUsersThunkCreator, pageChangedThunkCreator}),
  withAuthRedirect //! нужно разкоммитеть если хотим чтобы работал редирект
) (UsersContainer);
