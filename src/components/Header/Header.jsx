import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = (props) => {
  console.log('props:', props);
  return (
    <header className={style.header}>
      <img src='https://penji.co/wp-content/uploads/2019/08/wwf-1024x536.jpeg' alt='' />
      <div className={style.loginBlock}>
        {
          props.isAuth ? <div className={style.user_name}>{props.name}</div> :
          <NavLink className={style.link} to={'/login'}>
            Login
          </NavLink>
        }
      </div>
    </header>
  );
}

export default Header;
