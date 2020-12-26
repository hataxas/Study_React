//import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../../../redux/messages_reducer';
import NewMessage from './NewMessage';
import {connect} from 'react-redux';

// const NewMessageContainer = (props) => {
//   let state = props.store.getState();

//   let addMessage = () => {
//     props.store.dispatch(addMessageActionCreator());
//   }

//   let updateNewMessageText = (text) => {
//     props.store.dispatch(updateNewMessageTextActionCreator(text));
//   }

//   return (
//     <NewMessage
//       addMessage = {addMessage}
//       updateNewMessageText = {updateNewMessageText}
//       newMessageText = {state.messagesPage.newMessageText}
//       />
//   );
// }

let mapStateToProps = (state) => {
  return {
    newMessageText: state.messagesPage.newMessageText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator())
    },
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text))
    }
  }
}

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps) (NewMessage);

export default NewMessageContainer;
