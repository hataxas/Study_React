import style from './NewMessage.module.css';
import React from 'react';
import { Field, reduxForm } from 'redux-form'

const NewMessage = (props) => {
  let addMessage = (values) => {
    props.addMessage(values.newMessageText);
  }
  return (
    <NewMessageRedaxForm onSubmit={addMessage} />
  );
}

let NewMessageForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit} className={style.newMessage}>
      <Field name="newMessageText" component="textarea" type="text" placeholder="New Message" className={style.newMessage_textarea} />
      <div className={style.newMessage_button}>
        <button type="submit">Add Message</button>
      </div>
    </form>
  )
}

let NewMessageRedaxForm = reduxForm({
  // a unique name for the form
  form: 'messagesNewMessageForm'
})(NewMessageForm)

export default NewMessage;
