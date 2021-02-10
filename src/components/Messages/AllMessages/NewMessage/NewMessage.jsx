import style from './NewMessage.module.css';
import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import {maxLength50} from '../../../../utils/validators/validators';
import Textarea from '../../../CommonComponents/FormsControls/TextareaControls';

const NewMessage = (props) => {
  let addMessage = (values) => {
    if (values.newMessageText) {
      props.addMessage(values.newMessageText);
    } else {
      throw new SubmissionError({
        newMessageText: 'Field is required',
        _error: 'New post failed!'
      })
    }
  }
  return (
    <NewMessageRedaxForm onSubmit={addMessage} />
  );
}

let NewMessageForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit} className={style.newMessage}>
      <Field name="newMessageText" component={Textarea} type="text" placeholder="New Message" validate={[maxLength50]} />
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
