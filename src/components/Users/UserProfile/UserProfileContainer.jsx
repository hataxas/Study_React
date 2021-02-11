import UserProfile from './UserProfile';
import React from 'react';
import { connect } from 'react-redux';
import {getUserProfile} from '../../../redux/user_profile_reducer';
import { withRouter } from 'react-router-dom';

class UserProfileContainer extends React.Component {
  componentDidMount() {
    // console.log(this.props);
    // //! Смотрим путь в консоли
    let userId = this.props.match.params.userId;
    console.log(userId);
    this.props.getUserProfile(userId);
    //! заменили это все thunk функцией
    // getUserById(userId).then(data => {
    //     this.props.setUserProfile(data.result);
    //     console.log(data.result);
    //   });
  }

  render() {
    return (
      //! таким образом при помощи спрет оператора мы передаем в компоненту Profile все props которые пришли в нашу контейнерную компоненту
        <UserProfile {...this.props} userProfile={this.props.userProfile} />
    );
  }
}

let mapStateToProps = (state) => ({
  userProfile: state.userProfilePage.userProfile
});

let WithUrlDataUserProfileContainer = withRouter(UserProfileContainer);

export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataUserProfileContainer);
