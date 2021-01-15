import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import * as axios from 'axios';
import {
  followActionCreator,
  unfollowActionCreator,
  setUsersListActionCreator,
  setCurrentPageActionCreator,
  setTotalUsersCountActionCreator
} from '../../redux/users_reducer';

//todo мы контейнерную компоненту, которая отвечает за запросы на сервер UsersContainer оборачиваем другой контейнерной компонентой при помощи connect, которая принимает store в качестве контекста и внутри этих контейнерных компонент наша презентационная компонент Users (ее отрисовывает UsersContainer)

//! компонента отвечающая за запросы на сервер (может быть как классовой так и функциональной)
class UsersContainer extends React.Component{
  //? запрос на сервер далаем в методе componentDidMount() (монтируем нашу компоненту на страницу)
  componentDidMount() {
    if (this.props.users.length === 0) {
      //! делаем get запрос на адресс https://social-network.samuraijs.com/api/1.0/users при помощи библиотеки axios (в качестве ответа ожидаем получить список пользователей, который хранится на сервере) (задаем текущую страницу и колличество пользователей выводимое на странице)
      // axios.get(`http://localhost:3000/api/users.json?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      axios.get(`http://localhost:4567/api/users?page=${this.props.currentPage}&per_page=${this.props.pageSize}&count=21`)
        .then(response => {
          this.props.setUsersList(response.data.result);
          this.props.setTotalUsersCount(response.data.count);
        });
    }
  }
  //? напишем метод для переключения страниц (т.к. мы хотим сохранить контекст вызова, то пишем метод в виде стрелочной функции) (эта функция будет вызываться на onClick в render())
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`http://localhost:4567/api/users?page=${pageNumber}&per_page=${this.props.pageSize}&count=21`)
        .then(response => {
          console.log(response.data.result);
          console.log(response.data.count);
          this.props.setUsersList(response.data.result);
        });
  }
  //! теперь пропишем метод render (при помощи которого будет отрисовываться наш jsx содержащийсь в User.jsx)
  render () {
    return <Users totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  onPageChanged={this.onPageChanged}
                  users={this.props.users}
                  unfollow={this.props.unfollow}
                  follow={this.props.follow}/>
  }
}

//! компонента отвечающая за передачу store нашей UsersContainer
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
