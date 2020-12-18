import AllMessages from './AllMessages/AllMessages';
import AllUsers from './AllUsers/AllUsers';
import style from './Messages.module.css';
// import UsersMessages from './UsersMessages/UsersMessages';


const Messages = (props) => {
  return (
    <div className={style.dialogs}>
      <div className={style.users_list}>
        <div className={style.users}>
          <AllUsers usersData={props.state.usersData}/>
        </div>
      </div>
      <div className={style.messages}>
        <div className={style.my_messages}>
          <AllMessages messagesData={props.state.messagesData} newMessageText={props.state.newMessageText} dispatch={props.dispatch}/>
        </div>
        {/* <div className={style.users_messages}>
          <UsersMessages usersMessagesData={props.state.usersData}/>
        </div> */}

      </div>

    </div>
  )
}

export default Messages;
