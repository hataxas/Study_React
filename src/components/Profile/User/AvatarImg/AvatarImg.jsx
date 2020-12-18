import style from './AvatarImg.module.css';

const AvatarImg = () => {
  return (
    <div className={style.avatarImg}>
      <img alt='' src='https://images.unsplash.com/photo-1525382455947-f319bc05fb35?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' />
    </div>
  );
}

export default AvatarImg;
