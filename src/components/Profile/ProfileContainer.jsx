// import Profile from './Profile';
// import React from 'react';
// import * as axios from 'axios';
// import { connect } from 'react-redux';
// import {setUserProfile} from '../../redux/profile_reducer';

// class ProfileContainer extends React.Component {
//   componentDidMount() {
//     //this.props.toggleIsFetching(true);
//     axios.get(`http://localhost:4567/api/users/1`)
//       .then(response => {
//         //this.props.toggleIsFetching(false);
//         this.props.setUserProfile(response.data.result);
//         //this.props.setTotalUsersCount(response.data.count);
//       });
//   }

//   render() {
//     return (
//       //! таким образом при помощи спрет оператора мы передаем в компоненту Profile все props которые пришли в нашу контейнерную компоненту
//         <Profile {...this.props} profile={this.props.profile} />
//     );
//   }
// }

// let mapStateToProps = (state) => ({
//   profile: state.profilePage.profile
// });

// export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);
