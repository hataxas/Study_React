import React from 'react';
import style from './Users.module.css';
import {NavLink} from 'react-router-dom';

let Users = (props) => {
  //! вычисляем сколько страниц нам нужно нарисовать (делим общее колличество пользователей на колличество пользователей отображаемое на одной странице и округляем это значение вверх (чтобы если получим дробное число страниц рисовалось достаточно))
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  //! создаем пустой массив страниц (номеров) и затем при помощи цикла заполняем его значениями
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return <div className={style.users}>
      {/* Рисуем нашу пагинацию */}
      <div className={style.pagination}>
        {/* перебираем массив pages и для каждой найденой страницы возвращаем ссылку с номером этой страницы (и нужной странице еще и присваиваем класс style.selectedPage) */}
        {pages.map(page => {
          return <button key={page} className={props.currentPage === page ? style.selectedPage : ''} disabled={props.isPageChangeInProgress} onClick = {() => {props.onPageChanged(page)}}>
              {page}
            </button>
        })}
      </div>
      {
        props.users.map( (user) => (
            <div key={user.id} className={style.container}>
              <div className={style.avatar}>
                <NavLink to={'/user_profile/' + user.id}>
                  <img className={style.img} src={user.img != null ? user.img : "/img/moon.jpg"} alt=""/>
                </NavLink>
                <div>
                {
                  user.followed
                  ? <button className={style.button} onClick = {() => {props.unfollow(user.id)}}>Unfollow</button>
                  : <button className={style.button} onClick = {() => {props.follow(user.id)}}>Follow</button>
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
}

export default Users;
