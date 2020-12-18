import style from './NewMessage.module.css';
import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../../../redux/messages_reducer';

const NewMessage = (props) => {
  let newMessageElement = React.createRef();

  let addMessage = () => {
    //props.addMessage();
    props.dispatch(addMessageActionCreator());
  }

  let updateNewMessageText = () => {
    let text = newMessageElement.current.value;
    //props.updateNewMessageText(text);
    props.dispatch(updateNewMessageTextActionCreator(text));
  }

  return (
    <div className={style.newMessage}>
      <textarea
        ref={newMessageElement}
        value={props.newMessageText}
        onChange={updateNewMessageText}
        className={style.newMessage_textarea}
        placeholder='New Message'
        >
      </textarea>
      <div className={style.newMessage_button}>
        <button onClick = {addMessage}>Add Message</button>
      </div>
    </div>
  );
}

export default NewMessage;
