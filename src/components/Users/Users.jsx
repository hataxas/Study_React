import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios'; //! это означает что мы импопртируем все содержимое библиотеки axios и называем это axios

//! Так выглядит функциональная компонента
// const Users = (props) => {
//   let getUsers = () => {
//     if (props.users.length === 0) {
//       //! делаем get запрос на адресс https://social-network.samuraijs.com/api/1.0/users при помощи библиотеки axios (в качестве ответа ожидаем получить список пользователей, который хранится на сервере)
//       axios.get("http://localhost:3000/api/users.json").then(response => {
//         props.setUsersList(response.data.result);
//       });
//     }
//   }

//   return (
//     <div className={style.users}>
//       <button onClick = {getUsers}>Get Users</button>
//       {
//         props.users.map( (user) => (
//             <div key={user.id} className={style.container}>
//               <div className={style.avatar}>
//                 <img className={style.img} src={user.img != null ? user.img : "/img/moon.jpg"} alt=""/>
//                 <div>
//                 {
//                   user.followed
//                   ? <button className={style.button} onClick = {() => {props.unfollow(user.id)}}>Unfollow</button>
//                   : <button className={style.button} onClick = {() => {props.follow(user.id)}}>Follow</button>
//                 }
//                 </div>
//               </div>
//               <div className={style.data}>
//                 <div className={style.nameStatus}>
//                   <div className={style.name}>{user.name}</div>
//                   <div className={style.status}>{user.status}</div>
//                 </div>
//                 <div className={style.location}>
//                   <div className={style.country}>{user.location.country + ','}</div>
//                   <div className={style.city}>{user.location.city}</div>
//                 </div>
//               </div>
//             </div>
//           )
//         )
//       }
//     </div>
//   );
// }

//! Так выглядит классовая компонента
//? создаем класс Users который наследует React.Component (то есть будет иметь доступ ко всем методам React)
class Users extends React.Component{
  //? если конструирование объекта доверяется родительской компоненте super эту часть кода можно опустить так как это происходит в react по умолчанию
  // constructor(props) {
  //   super(props);
  // }

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
    //! вычисляем сколько страниц нам нужно нарисовать (делим общее колличество пользователей на колличество пользователей отображаемое на одной странице и округляем это значение вверх (чтобы если получим дробное число страниц рисовалось достаточно))
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    //! создаем пустой массив страниц (номеров) и затем при помощи цикла заполняем его значениями
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
          <div className={style.users}>
            {/* Рисуем нашу пагинацию */}
            <div className={style.pagination}>
              {/* перебираем массив pages и для каждой найденой страницы возвращаем ссылку с номером этой страницы (и нужной странице еще и присваиваем класс style.selectedPage) */}
              {pages.map(page => {
                return <span key={page} className={this.props.currentPage === page ? style.selectedPage : ''} onClick = {() => {this.onPageChanged(page);}}>
                    {page}
                  </span>
              })}
            </div>
            {
              this.props.users.map( (user) => (
                  <div key={user.id} className={style.container}>
                    <div className={style.avatar}>
                      <img className={style.img} src={user.img != null ? user.img : "/img/moon.jpg"} alt=""/>
                      <div>
                      {
                        user.followed
                        ? <button className={style.button} onClick = {() => {this.props.unfollow(user.id)}}>Unfollow</button>
                        : <button className={style.button} onClick = {() => {this.props.follow(user.id)}}>Follow</button>
                      }
                      </div>
                    </div>
                    <div className={style.data}>
                      <div className={style.nameStatus}>
                        <div className={style.name}>{user.name}</div>
                        <div className={style.status}>{user.status}</div>
                      </div>
                      <div className={style.location}>
                        <div className={style.country}>{user.location.country + ','}</div>
                        <div className={style.city}>{user.location.city}</div>
                      </div>
                    </div>
                  </div>
                )
              )
            }
          </div>
      );
    }
  }

export default Users;
