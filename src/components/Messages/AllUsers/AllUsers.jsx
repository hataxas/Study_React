import style from './AllUsers.module.css';
import User from './User/User';


const AllUsers = (props) => {
  // let usersData = [
  //   {id: 1, name: 'Natalia'},
  //   {id: 2, name: 'Alisa'},
  //   {id: 3, name: 'Katia'},
  //   {id: 4, name: 'Dmytro'}
  // ]
  //! Вместо того чтобы записывать все элементы вручную получим наш массив элементов при помощи метода map(), преобразовав массив usersData в массив users
  // let AllUsers = [
  //   <User name={usersData[0].name} id={usersData[0].id} />,
  //   <User name={usersData[1].name} id={usersData[1].id} />,
  //   <User name={usersData[2].name} id={usersData[2].id} />,
  //   <User name={usersData[3].name} id={usersData[3].id} />
  // ]

  let AllUsers = props.usersData.map (
    (user) => (<User name={user.name} id={user.id} img={user.img} />) //! вместо аргумента user подставляются по очереди элементы массива usersData (такой себе цикл)
  );

  return (
    <div className={style.users}>
          {/* выносим все повторяющиеся элементы
          <User name={usersData[0].name} id={usersData[0].id} />,
          <User name={usersData[1].name} id={usersData[1].id} />,
          <User name={usersData[2].name} id={usersData[2].id} />,
          <User name={usersData[3].name} id={usersData[3].id} />
          в массив элементов, который мы назвали AllUsers*/}
      {AllUsers}
    </div>
  )
}

export default AllUsers;
