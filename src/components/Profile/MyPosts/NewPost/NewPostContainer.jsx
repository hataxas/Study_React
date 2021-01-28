import {addPostActionCreator} from '../../../../redux/profile_reducer';
import NewPost from './NewPost';
import {connect} from 'react-redux';


// const NewPostContainer = (props) => {

//   let state = props.store.getState();

//   let addPost = () => {
//     props.store.dispatch(addPostActionCreator());
//   }
//   let updateNewPostText = (text) => {
//     props.store.dispatch(updateNewPostTextActionCreator(text));
//   }

//   return (<NewPost updateNewPostText = {updateNewPostText} addPost = {addPost} newPostText = {state.profilePage.newPostText}/>)
// }


let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText))
    }
  }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps) (NewPost);

export default NewPostContainer;
