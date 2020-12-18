import style from './AllMessages.module.css';
import Message from './Message/Message';
import NewMessage from './NewMessage/NewMessage';

const AllMessages = (props) => {

  let AllMessages = props.messagesData.map (
    (message) => (<Message text={message.text} />)
  );

  return (
    <div className={style.messages}>
      <div className={style.all_messages}>
        {AllMessages}
      </div>
      <div className={style.new_message}>
        <NewMessage newMessageText={props.newMessageText} dispatch={props.dispatch}/>
      </div>
    </div>

  )
}

export default AllMessages;
