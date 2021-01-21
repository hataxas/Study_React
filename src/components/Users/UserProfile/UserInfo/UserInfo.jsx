import style from './UserInfo.module.css';

const UserInfo = (props) => {
  return (
    <div className={style.user_info}>
      <div className={style.description}>
      <h2 className={style.title}>Description:</h2>
        {props.description}
      </div>
      <div className={style.contacts}>
        <h2 className={style.title}>Contacts:</h2>
        <ul className={style.contacts_items}>
          <li className={style.contacts_item}>
            <span className={style.weight}>facebook: </span>
            {props.contacts.facebook}
          </li>
          <li className={style.contacts_item}>
            <span className={style.weight}>twitter: </span>
            {props.contacts.twitter}
          </li>
          <li className={style.contacts_item}>
            <span className={style.weight}>instagram: </span>
            {props.contacts.instagram}
          </li>
          <li className={style.contacts_item}>
            <span className={style.weight}>email: </span>
            <a href={"mailto:" + props.contacts.email} rel="noreferrer" target="_blank">{props.contacts.email}</a>
          </li>
        </ul>
      </div>
      <div className={style.job_info}>
        <h2 className={style.title}>Profession:</h2>
        <div className={style.specialty}>{props.profession}</div>
      </div>
    </div>
  );
}

export default UserInfo;
