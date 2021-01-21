import style from './UserProfile.module.css';
import AvatarImg from './AvatarImg/AvatarImg';
import UserInfo from './UserInfo/UserInfo';
import Preloader from '../../CommonComponents/Preloader/Preloader';

const UserProfile = (props) => {
  //! т.к. запрос происходит асинхронно, то props.userProfile может еще не быть когда начинает отрисовываться компонента и будет выскакивать ошибка. Поэтому мы сначала выводим наш Preloader, а когда response будет готов отрисуются наши компоненты
  if (!props.userProfile) {
    return <Preloader />
  }
  return (
      <div className={style.user_profile}>
        <div className={style.user_name}>{props.userProfile.name}</div>
        {/* {console.log(props.userProfile.name)} */}
        <div className={style.profile_info}>
          <AvatarImg img = {props.userProfile.img}/>
          <UserInfo description = {props.userProfile.description} contacts = {props.userProfile.contacts} profession = {props.userProfile.profession}/>
        </div>
      </div>
  );
}

export default UserProfile;

// http://localhost:4567/api/profile/1   (1 - это id человека на чей профиль мы зашли)
// {
//   profile: [
//     {
//       id: 1,
//       name: 'Panda Pandovich',
//       img: null,
//       description: 'I am cool panda... Bla bla bla...',
//       contacts: {
//         facebook: null,
//         twitter: null,
//         instagram: null,
//         whatsApp: null,
//         email: 'panda@gmail.com'
//       },
//       lookingForAJob: true,
//       lookingForAJobDescription: 'bla bla bla'
//     },
//     {
//       id: 2,
//       name: 'Foon Lunich',
//       img: null,
//       description: 'I am Foon... Bla bla bla...',
//       contacts: {
//         facebook: null,
//         twitter: null,
//         instagram: null,
//         whatsApp: null,
//         email: 'foon@gmail.com'
//       },
//       lookingForAJob: false,
//       lookingForAJobDescription: nul
//     },
//   ]
// }
