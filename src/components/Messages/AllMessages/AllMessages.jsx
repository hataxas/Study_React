import style from './AllMessages.module.css';
//import Message from './Message/Message';
import NewMessageContainer from './NewMessage/NewMessageContainer';

const AllMessages = (props) => {

  // let AllMessages = props.store.getState().messagesPage.messagesData.map (
  //   (message) => (<Message text={message.text} />)
  // );

  return (
    <div className={style.messages}>
      <div className={style.all_messages}>
        {props.messages}
      </div>
      <div className={style.new_message}>
        <NewMessageContainer />
      </div>
    </div>

  )
}

export default AllMessages;
