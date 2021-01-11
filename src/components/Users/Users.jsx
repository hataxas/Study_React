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
  constructor(props) {
    super(props);
    if (this.props.users.length === 0) {
      //! делаем get запрос на адресс https://social-network.samuraijs.com/api/1.0/users при помощи библиотеки axios (в качестве ответа ожидаем получить список пользователей, который хранится на сервере)
      axios.get("http://localhost:3000/api/users.json").then(response => {
        this.props.setUsersList(response.data.result);
      });
    }
  }
  //? теперь пропишем метод render (при помощи которого будет отрисовываться наш jsx)
  render () {
    return (
          <div className={style.users}>
            {/* <button onClick = {this.getUsers}>Get Users</button> */}
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
