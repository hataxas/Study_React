import style from './AllMessages.module.css';
import Message from './Message/Message';
import NewMessage from './NewMessage/NewMessage';

const AllMessages = (props) => {

  // let messagesData = [
  //   {id: 1, text: 'Hi eweryone!'},
  //   {id: 2, text: 'How are you?'},
  //   {id: 3, text: 'My name is Natalia.'},
  //   {id: 4, text: 'Hi!!!'}
  // ]

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
