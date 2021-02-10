import style from './NewPost.module.css';
import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import {maxLength50} from '../../../../utils/validators/validators';
import Textarea from '../../../CommonComponents/FormsControls/TextareaControls';

const NewPost = (props) => {
  let addPost = (values) => {
    //console.log(values);
    if (values.newPostText) {
      props.addPost(values.newPostText);
    } else {
      throw new SubmissionError({
        newPostText: 'Field is required',
        _error: 'New post failed!'
      })
    }
  }
  return (
    <NewPostReduxForm onSubmit={addPost}/>
  );
}

let NewPostForm = props => {
  return (
    <form onSubmit={props.handleSubmit} className={style.newPost}>
      <Field name="newPostText" component={Textarea} placeholder="New Post" validate={[maxLength50]}/>
      <div className={style.newPost_button}>
        <button type="submit" >Add Post</button>
      </div>
    </form>
  )
}

let NewPostReduxForm = reduxForm({
  // a unique name for the form
  form: 'profileNewPostForm'
})(NewPostForm)



export default NewPost;
