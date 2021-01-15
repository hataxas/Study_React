import React from 'react';
import Users from './Users';
import * as axios from 'axios'; //! это означает что мы импопртируем все содержимое библиотеки axios и называем это axios

class UsersAPIComponent extends React.Component{

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
  //? теперь пропишем метод render (при помощи которого будет отрисовываться наш jsx)
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

export default UsersAPIComponent;
