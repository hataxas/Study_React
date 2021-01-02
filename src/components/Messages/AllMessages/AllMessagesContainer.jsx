//import style from './AllMessages.module.css';
import Message from './Message/Message';
import {connect} from 'react-redux';
import AllMessages from './AllMessages';

// const AllMessages = (props) => {

//   let messages = props.store.getState().messagesPage.messagesData.map (
//     (message) => (<Message text={message.text} />)
//   );

//   return (
//     <div className={style.messages}>
//       <div className={style.all_messages}>
//         {AllMessages}
//       </div>
//       <div className={style.new_message}>
//         <NewMessageContainer />
//       </div>
//     </div>

//   )
// }
let mapMessagesDataToMessages = (state) => {
  return {
    messages: state.messagesPage.messagesData.map (
      (message) => (<Message key={message.id} text={message.text} />)
    )
  }
}

const AllMessagesContainer = connect(mapMessagesDataToMessages) (AllMessages);



export default AllMessagesContainer;
