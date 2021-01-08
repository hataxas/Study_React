import React from 'react';
import style from './Users.module.css';

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsersList(
      [
        {
          id: 1,
          followed: false,
          name: 'Natalia',
          img: '/img/cat.jpg',
          status: "I'm happy!",
          location: {
            city: 'Malme',
            country: 'Sweden'
          }
        },
        {
          id: 2,
          followed: true,
          name: 'Alisa',
          img: '/img/fox.jpg',
          status: "I'm pretty!",
          location: {
            city: 'Malme',
            country: 'Sweden'
          }
        },
        {
          id: 3,
          followed: false,
          name: 'Katia',
          img: '/img/bear.jpg',
          status: "I'm teddy bear!",
          location: {
            city: 'Malme',
            country: 'Sweden'
          }
        },
        {
          id: 4,
          followed: false,
          name: 'Dmytro',
          img: '/img/dog.jpg',
          status: "I'm Foon!",
          location: {
            city: 'Malme',
            country: 'Sweden'
          }
        }
      ]
    )
  }


  return (
    <div className={style.users}>
      {
        props.users.map( (user) => (
            <div key={user.id} className={style.container}>
              <div className={style.avatar}>
                <img className={style.img} src={user.img} alt=""/>
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
  );
}

export default Users;
