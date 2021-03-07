import React from 'react';
import style from './Users.module.css';
import {NavLink} from 'react-router-dom';
import Paginator from '../CommonComponents/Paginator/Paginator';

let Users = ({totalUsersCount, pageSize, currentPage, isPageChangeInProgress, onPageChanged, users, unfollow, follow}) => {
  return <div className={style.users}>
      <Paginator totalUsersCount = {totalUsersCount}
        pageSize = {pageSize}
        currentPage = {currentPage}
        isPageChangeInProgress = {isPageChangeInProgress}
        onPageChanged = {onPageChanged}
      />
      {
        users.map( (user) => (
            <div key={user.id} className={style.container}>
              <div className={style.avatar}>
                <NavLink to={'/user_profile/' + user.id}>
                  <img className={style.img} src={user.img != null ? user.img : "/img/moon.jpg"} alt=""/>
                </NavLink>
                <div>
                {
                  user.followed
                  ? <button className={style.button} onClick = {() => {unfollow(user.id)}}>Unfollow</button>
                  : <button className={style.button} onClick = {() => {follow(user.id)}}>Follow</button>
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
