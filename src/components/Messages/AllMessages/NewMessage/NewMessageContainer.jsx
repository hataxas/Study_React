import {addMessageActionCreator} from '../../../../redux/messages_reducer';
import NewMessage from './NewMessage';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    newMessageText: state.messagesPage.newMessageText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (newMessageText) => {
      dispatch(addMessageActionCreator(newMessageText))
    }
  }
}

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps) (NewMessage);

export default NewMessageContainer;
