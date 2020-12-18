import MainImage from './MainImage/MainImage';
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';
import AvatarImg from './User/AvatarImg/AvatarImg';
import Description from './User/Description/Description';

const Profile = (props) => {
  // let postsData = [
  //   {id: 1, text: 'Hi, how are you???', likesCount: 70},
  //   {id: 2, text: "It's my first post.", likesCount: 50},
  //   {id: 3, text: "It's my second post.", likesCount: 100}
  // ]
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
