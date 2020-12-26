import MainImage from './MainImage/MainImage';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import style from './Profile.module.css';
import AvatarImg from './User/AvatarImg/AvatarImg';
import Description from './User/Description/Description';

const Profile = (props) => {
  return (
      <div>
        <MainImage />
        <div className={style.profile_info}>
          <AvatarImg />
          <Description />
        </div>
        <MyPostsContainer />
      </div>
  );
}

export default Profile;
