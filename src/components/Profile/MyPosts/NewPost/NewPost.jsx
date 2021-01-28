import style from './NewPost.module.css';
import React from 'react';
import { Field, reduxForm } from 'redux-form'

const NewPost = (props) => {
  let addPost = (values) => {
    props.addPost(values.newPostText);
  }
  return (
    <NewPostReduxForm onSubmit={addPost}/>
  );
}

let NewPostForm = props => {
  return (
    <form onSubmit={props.handleSubmit} className={style.newPost}>
      <Field name="newPostText" component="textarea" className={style.newPost_textarea} placeholder="New Post" />
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
