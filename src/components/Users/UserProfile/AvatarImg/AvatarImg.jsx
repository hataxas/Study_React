import style from './AvatarImg.module.css';

const AvatarImg = (props) => {
  return (
    <div className={style.avatarImg}>
      <img alt='' src = {props.img} />
    </div>
  );
}

export default AvatarImg;
