import style from './AllUsers.module.css';
//import User from './User/User';


const AllUsers = (props) => {

  // let AllUsers = props.usersData.map (
  //   (user) => (<User name={user.name} id={user.id} img={user.img} />) //! вместо аргумента user подставляются по очереди элементы массива usersData (такой себе цикл)
  // );

  return (
    <div className={style.users}>
      {props.users}
    </div>
  )
}

export default AllUsers;
