import style from './User.module.css';
import {NavLink} from 'react-router-dom';

const User = (props) => {
  return (
  <NavLink to={'/messages/' + props.id} activeClassName={style.active} className={style.user}>
    <img src={props.img} alt=""/> <span className={style.user_name}>{props.name}</span>
  </NavLink>
  )
}

export default User;
