//import style from './AllUsers.module.css';
import User from './User/User';
import {connect} from 'react-redux';
import AllUsers from './AllUsers';

// const AllUsers = (props) => {

//   let AllUsers = props.usersData.map (
//     (user) => (<User name={user.name} id={user.id} img={user.img} />) //! вместо аргумента user подставляются по очереди элементы массива usersData (такой себе цикл)
//   );

//   return (
//     <div className={style.users}>
//       {AllUsers}
//     </div>
//   )
// }

let mapUsersDataToUsers = (state) => {
  return {
    users: state.messagesPage.usersData.map (
      (user) => (<User name={user.name} id={user.id} img={user.img} />)
    )
  }
}

const AllUsersContainer = connect(mapUsersDataToUsers) (AllUsers);

export default AllUsersContainer;
