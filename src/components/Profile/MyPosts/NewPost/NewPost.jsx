import style from './NewPost.module.css';
import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../redux/profile_reducer';


const NewPost = (props) => {

  let newPostElement = React.createRef();

  let addPost = () => {
    //props.addPost();
    props.dispatch(addPostActionCreator());
  }
  let updateNewPostText = () => {
    let text = newPostElement.current.value;
    //props.updateNewPostText(text);
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <div className={style.newPost}>
      <textarea onChange = {updateNewPostText} value={props.newPostText} ref={newPostElement} className={style.newPost_textarea} placeholder='New Post' />
      <div className={style.newPost_button}>
        <button onClick = {addPost}>Add Post</button>
      </div>
    </div>
  );
}

export default NewPost;
