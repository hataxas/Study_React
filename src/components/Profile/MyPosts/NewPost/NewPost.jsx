import style from './NewPost.module.css';
import React from 'react';


const NewPost = (props) => {

  let newPostElement = React.createRef();

  let addPost = () => {
    //! Для того чтобы компоненты оставались независимыми, нам нужно сделать так чтобы они ничего не знали про store и в часности про dispatch. Добъемся этого при помощи контейнерной компоненты, которая будет принимать всю эту информацию. Создадим файл NewPostContainer и туда будем передавать информацию из внешнего мира, а компонента NewPost останется презентационной
    //props.dispatch(addPostActionCreator());
    props.addPost();
  }
  let updateNewPostText = () => {
    let text = newPostElement.current.value;
    //props.dispatch(updateNewPostTextActionCreator(text));
    props.updateNewPostText(text);
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
