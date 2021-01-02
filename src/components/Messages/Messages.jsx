import AllMessagesContainer from './AllMessages/AllMessagesContainer';
import AllUsersContainer from './AllUsers/AllUsersContainer';
import style from './Messages.module.css';


const Messages = (props) => {
  return (
    <div className={style.dialogs}>
      <div className={style.users_list}>
        <div className={style.users}>
          <AllUsersContainer />
        </div>
      </div>
      <div className={style.messages}>
        <div className={style.my_messages}>
          <AllMessagesContainer />
        </div>
        {/* <div className={style.users_messages}>
          <UsersMessages usersMessagesData={props.state.usersData}/>
        </div> */}

      </div>

    </div>
  )
}

export default Messages;
