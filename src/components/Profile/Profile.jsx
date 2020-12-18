import MainImage from './MainImage/MainImage';
import MyPosts from './MyPosts/MyPosts';
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
        <MyPosts postsData = {props.state.postsData} newPostText={props.state.newPostText} dispatch={props.dispatch}/>
      </div>
  );
}

export default Profile;
